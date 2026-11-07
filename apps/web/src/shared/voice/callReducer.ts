import type { VoiceEvent } from './types';

import type { CallMode, SafeModeEntered } from '@/entities';

export type CallStatus = 'idle' | 'connecting' | 'connected' | 'ended';
export type Orb = 'listening' | 'thinking' | 'speaking';
export type Caption = { id: string; speaker: 'user' | 'ai'; text: string };

export type CallState = {
  status: CallStatus;
  orb: Orb;
  muted: boolean;
  held: boolean;
  mode: CallMode;
  captions: Caption[];
  safeMode: SafeModeEntered | null;
  /** 마지막 발화 종료 시각(t0). 설계서 7.2. */
  lastT0Ms: number | null;
  /** 첫 오디오 재생 시각(t1)으로 계산한 TTFA. */
  lastTtfaMs: number | null;
};

export type CallAction =
  | { type: 'event'; event: VoiceEvent }
  | { type: 'set_muted'; muted: boolean }
  | { type: 'set_held'; held: boolean }
  | { type: 'barge_in' };

export const initialCallState: CallState = {
  status: 'idle',
  orb: 'listening',
  muted: false,
  held: false,
  mode: 'listen',
  captions: [],
  safeMode: null,
  lastT0Ms: null,
  lastTtfaMs: null,
};

function reduceEvent(state: CallState, event: VoiceEvent): CallState {
  switch (event.type) {
    case 'connection_changed':
      if (event.status === 'closed') return { ...state, status: 'ended' };
      return { ...state, status: event.status };
    case 'turn_started':
      return { ...state, orb: 'listening' };
    case 'turn_ended':
      return { ...state, orb: 'thinking', lastT0Ms: event.t0_speech_end_ms };
    case 'playback_started': {
      const ttfa = state.lastT0Ms === null ? null : event.at_ms - state.lastT0Ms;
      return { ...state, orb: 'speaking', lastTtfaMs: ttfa ?? state.lastTtfaMs };
    }
    case 'caption_added':
      return {
        ...state,
        captions: [...state.captions, { id: event.id, speaker: event.speaker, text: event.text }],
      };
    case 'mode_changed':
      return { ...state, mode: event.mode };
    case 'safe_mode_entered':
      return { ...state, safeMode: event };
    default:
      return state;
  }
}

export function callReducer(state: CallState, action: CallAction): CallState {
  switch (action.type) {
    case 'event':
      return reduceEvent(state, action.event);
    case 'set_muted':
      return { ...state, muted: action.muted };
    case 'set_held':
      return { ...state, held: action.held };
    case 'barge_in':
      return { ...state, orb: 'listening' };
  }
}
