import { callReducer, initialCallState, type CallState } from './callReducer';
import type { VoiceEvent } from './types';

const apply = (state: CallState, event: VoiceEvent): CallState =>
  callReducer(state, { type: 'event', event });

const cue: VoiceEvent = { type: 'cue_detected', category: 'low', score: 0.7, utterance_id: 'u1' };
const safe: VoiceEvent = { type: 'safe_mode_entered', level: 'L1', card: { tel: '109' } };

describe('callReducer', () => {
  it('keeps a detected cue until it is answered', () => {
    const withCue = apply(initialCallState, cue);
    expect(withCue.cue?.utterance_id).toBe('u1');
    expect(callReducer(withCue, { type: 'answer_cue' }).cue).toBeNull();
  });

  it('never asks a confirmation question in safe mode', () => {
    const inSafeMode = apply(initialCallState, safe);
    expect(apply(inSafeMode, cue).cue).toBeNull();
    // 질문이 떠 있는 중에 안전 모드에 들어가면 질문을 내린다
    expect(apply(apply(initialCallState, cue), safe).cue).toBeNull();
  });

  it('computes TTFA from turn end to first playback', () => {
    const ended = apply(initialCallState, {
      type: 'turn_ended',
      utterance_id: 'u1',
      t0_speech_end_ms: 1000,
    });
    const playing = apply(ended, { type: 'playback_started', at_ms: 1650 });
    expect(playing.lastTtfaMs).toBe(650);
    expect(playing.orb).toBe('speaking');
  });

  it('ends the call and drops the pending cue when the connection closes', () => {
    const closed = apply(apply(initialCallState, cue), {
      type: 'connection_changed',
      status: 'closed',
    });
    expect(closed.status).toBe('ended');
    expect(closed.cue).toBeNull();
  });

  it('closes the speaking state when playback ends without overwriting a new turn', () => {
    const speaking = apply(initialCallState, { type: 'playback_started', at_ms: 500 });
    expect(apply(speaking, { type: 'playback_stopped' }).orb).toBe('listening');
    const thinking = { ...initialCallState, orb: 'thinking' as const };
    expect(apply(thinking, { type: 'playback_stopped' })).toBe(thinking);
  });
});
