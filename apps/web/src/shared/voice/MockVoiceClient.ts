import type { VoiceClient, VoiceEvent, VoiceEventHandler } from './types';

import type { CallMode } from '@/entities';

/** 서버 없이 화면을 돌려 보는 가짜 클라이언트. 연결 후 한 턴을 흉내 낸다. */
export class MockVoiceClient implements VoiceClient {
  private handlers = new Set<VoiceEventHandler>();
  private timers: number[] = [];
  private held = false;
  private muted = false;

  subscribe(handler: VoiceEventHandler): () => void {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  private emit(event: VoiceEvent): void {
    this.handlers.forEach((h) => h(event));
  }

  private later(ms: number, fn: () => void): void {
    this.timers.push(window.setTimeout(fn, ms));
  }

  async connect(): Promise<void> {
    this.emit({ type: 'connection_changed', status: 'connecting' });
    this.later(200, () => {
      this.emit({ type: 'connection_changed', status: 'connected' });
      this.runDemoTurn();
    });
  }

  private runDemoTurn(): void {
    this.later(300, () => {
      if (this.muted || this.held) return;
      this.emit({ type: 'turn_started', utterance_id: 'u1', at_ms: performance.now() });
      this.emit({ type: 'caption_added', id: 'c1', speaker: 'user', text: '오늘 발표를 망쳐서…' });
    });
    this.later(900, () => {
      this.emit({ type: 'turn_ended', utterance_id: 'u1', t0_speech_end_ms: performance.now() });
    });
    this.later(1400, () => {
      this.emit({ type: 'playback_started', at_ms: performance.now() });
      this.emit({
        type: 'caption_added',
        id: 'c2',
        speaker: 'ai',
        text: '발표가 마음에 걸리는구나.',
      });
    });
  }

  async disconnect(): Promise<void> {
    this.timers.forEach((id) => window.clearTimeout(id));
    this.timers = [];
    this.emit({ type: 'connection_changed', status: 'closed' });
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
  }

  setHeld(held: boolean): void {
    this.held = held;
  }

  interrupt(): void {
    this.timers.forEach((id) => window.clearTimeout(id));
    this.timers = [];
  }

  setMode(mode: CallMode): void {
    this.emit({ type: 'mode_changed', mode });
  }
}
