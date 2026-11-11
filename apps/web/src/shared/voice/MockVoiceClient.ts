import type { VoiceClient, VoiceEvent, VoiceEventHandler } from './types';

import type { CallMode } from '@/entities';

type DemoTurn = { user: string; ai: string; cueCategory?: string };

/** 데모 대화. 한 번씩 순서대로 흘러가고 끝나면 처음으로 돌아간다. */
const DEMO_TURNS: readonly DemoTurn[] = [
  { user: '오늘 발표를 망쳐서…', ai: '발표가 마음에 걸리는구나.' },
  {
    user: '준비는 많이 했는데 머리가 하얘졌어.',
    ai: '준비한 만큼 못 보여줘서 더 속상했겠다.',
    cueCategory: 'low',
  },
  { user: '응, 팀원들한테도 미안하고.', ai: '미안한 마음까지 드는구나. 천천히 얘기해도 괜찮아.' },
  { user: '다음 주에 또 발표가 있어.', ai: '다음 발표가 벌써 걱정되는 거야?' },
];

const CUE_REPLY = {
  confirmed: '그랬구나. 말해줘서 고마워.',
  denied: '아, 내가 잘못 짚었네. 알려줘서 고마워.',
} as const;

const CONNECT_MS = 900;
const USER_SPEAKS_MS = 1400;
const THINK_MS = 700;
const AI_SPEAKS_MS = 2600;
const BETWEEN_TURNS_MS = 1400;

/** 서버 없이 화면을 돌려 보는 가짜 클라이언트. 연결 후 데모 대화를 턴마다 흉내 낸다. */
export class MockVoiceClient implements VoiceClient {
  private handlers = new Set<VoiceEventHandler>();
  private timers: number[] = [];
  private held = false;
  private muted = false;
  private started = false;
  private connected = false;
  private turnOrder = 0;
  private captionCount = 0;
  private answeredCues = new Set<string>();

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

  private clearTimers(): void {
    this.timers.forEach((id) => window.clearTimeout(id));
    this.timers = [];
  }

  private caption(speaker: 'user' | 'ai', text: string): void {
    this.captionCount += 1;
    this.emit({ type: 'caption_added', id: `c${this.captionCount}`, speaker, text });
  }

  async connect(): Promise<void> {
    this.started = true;
    this.emit({ type: 'connection_changed', status: 'connecting' });
    this.later(CONNECT_MS, () => {
      this.connected = true;
      this.emit({ type: 'connection_changed', status: 'connected' });
      this.scheduleTurn(BETWEEN_TURNS_MS);
    });
  }

  /** 다음 사용자 턴을 예약한다. 음소거·보류 중에는 사용자 말이 들어오지 않으므로 기다린다. */
  private scheduleTurn(delayMs: number): void {
    this.later(delayMs, () => {
      if (!this.connected) return;
      if (this.muted || this.held) {
        this.scheduleTurn(BETWEEN_TURNS_MS);
        return;
      }
      this.runTurn();
    });
  }

  private runTurn(): void {
    const turn = DEMO_TURNS[this.turnOrder % DEMO_TURNS.length];
    if (!turn) return;
    this.turnOrder += 1;
    const utteranceId = `u${this.turnOrder}`;

    this.emit({ type: 'turn_started', utterance_id: utteranceId, at_ms: performance.now() });
    this.caption('user', turn.user);
    this.later(USER_SPEAKS_MS, () => {
      this.emit({
        type: 'turn_ended',
        utterance_id: utteranceId,
        t0_speech_end_ms: performance.now(),
      });
    });
    this.later(USER_SPEAKS_MS + THINK_MS, () => {
      this.emit({ type: 'playback_started', at_ms: performance.now() });
      this.caption('ai', turn.ai);
      if (turn.cueCategory) {
        this.emit({
          type: 'cue_detected',
          category: turn.cueCategory,
          score: 0.7,
          utterance_id: utteranceId,
        });
      }
    });
    this.scheduleTurn(USER_SPEAKS_MS + THINK_MS + AI_SPEAKS_MS + BETWEEN_TURNS_MS);
  }

  async disconnect(): Promise<void> {
    // 연결을 시작한 적이 없으면 닫을 것도 없다(화면이 열리자마자 닫히는 경우).
    if (!this.started) return;
    this.started = false;
    this.clearTimers();
    this.connected = false;
    this.emit({ type: 'connection_changed', status: 'closed' });
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
  }

  setHeld(held: boolean): void {
    this.held = held;
    if (!this.connected) return;
    // 보류하면 하던 말을 모두 멈추고, 풀면 다음 턴부터 이어 간다.
    this.clearTimers();
    if (!held) this.scheduleTurn(BETWEEN_TURNS_MS);
  }

  interrupt(): void {
    // AI 말을 끊으면 바로 다음 사용자 턴으로 넘어간다.
    this.clearTimers();
    if (this.connected) this.scheduleTurn(BETWEEN_TURNS_MS / 2);
  }

  setMode(mode: CallMode): void {
    this.emit({ type: 'mode_changed', mode });
  }

  answerCue(utteranceId: string, confirmed: boolean): void {
    // 같은 질문에 두 번 답해도 대답은 한 번만 한다.
    if (!this.connected || this.answeredCues.has(utteranceId)) return;
    this.answeredCues.add(utteranceId);
    this.caption('ai', confirmed ? CUE_REPLY.confirmed : CUE_REPLY.denied);
  }
}
