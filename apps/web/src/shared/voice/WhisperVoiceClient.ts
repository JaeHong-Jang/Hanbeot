import { DEMO_TURNS } from './MockVoiceClient';
import { MicCapture } from './stt/MicCapture';
import { SpeechSegmenter } from './stt/speechSegmenter';
import { WhisperTranscriber } from './stt/WhisperTranscriber';
import type { VoiceClient, VoiceEvent, VoiceEventHandler } from './types';

import type { CallMode } from '@/entities';

const THINK_MS = 600;
const AI_SPEAKS_MS = 2600;

/**
 * 내 말을 실제로 받아쓰는 클라이언트. 마이크 소리를 말 구간으로 잘라 브라우저 안의
 * Whisper small로 글로 바꾼다. 소리와 글은 서버로 보내지 않는다.
 * 한벗의 대답은 아직 서버(LLM, TTS)가 없어서 정해진 데모 문장을 차례로 돌려 쓴다.
 * TODO: 서버 파이프라인이 준비되면 받아쓴 글을 보내고 대답을 받아 온다.
 */
export class WhisperVoiceClient implements VoiceClient {
  private handlers = new Set<VoiceEventHandler>();
  private timers: number[] = [];
  private mic = new MicCapture();
  private segmenter = new SpeechSegmenter();
  private transcriber = new WhisperTranscriber();
  private started = false;
  private listening = false;
  private muted = false;
  private held = false;
  private turnOrder = 0;
  private captionCount = 0;

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
    this.emit({ type: 'stt_status_changed', status: 'loading', progress: 0 });
    // 마이크 허용과 모델 받기를 같이 시작한다. 모델은 처음 한 번만 오래 걸린다.
    const [mic, model] = await Promise.allSettled([
      this.mic.start((frame) => this.onFrame(frame)),
      this.transcriber
        .load((ratio) =>
          this.emit({
            type: 'stt_status_changed',
            status: 'loading',
            progress: Math.min(ratio, 0.99),
          }),
        )
        .then(() => this.emit({ type: 'stt_status_changed', status: 'loading', progress: 1 })),
    ]);
    if (!this.started) {
      // 준비하는 사이에 통화를 닫았다. 뒤늦게 켜진 마이크가 남지 않게 끈다.
      this.mic.stop();
      return;
    }
    this.emit({ type: 'connection_changed', status: 'connected' });
    if (mic.status === 'rejected') {
      this.emit({ type: 'stt_status_changed', status: 'error', reason: 'mic' });
      return;
    }
    if (model.status === 'rejected') {
      this.mic.stop();
      this.emit({ type: 'stt_status_changed', status: 'error', reason: 'model' });
      return;
    }
    this.listening = true;
    this.emit({ type: 'stt_status_changed', status: 'ready' });
  }

  private onFrame(frame: Float32Array): void {
    if (!this.listening || this.muted || this.held) return;
    const result = this.segmenter.push(frame);
    if (result.kind === 'none') return;
    if (result.kind === 'started') {
      this.turnOrder += 1;
      // 내가 말을 시작하면 한벗은 하던 말을 멈춘다(끼어들기).
      this.clearTimers();
      this.emit({ type: 'playback_stopped' });
      this.emit({
        type: 'turn_started',
        utterance_id: this.utteranceId(),
        at_ms: performance.now(),
      });
      return;
    }
    void this.onSpeechEnded(result.audio);
  }

  private utteranceId(): string {
    return `u${this.turnOrder}`;
  }

  private async onSpeechEnded(audio: Float32Array): Promise<void> {
    if (audio.length === 0) return; // 말이라기엔 너무 짧은 소리
    const turn = this.turnOrder;
    this.emit({
      type: 'turn_ended',
      utterance_id: this.utteranceId(),
      t0_speech_end_ms: performance.now(),
    });
    this.emit({ type: 'stt_status_changed', status: 'transcribing' });
    let text = '';
    try {
      text = await this.transcriber.transcribe(audio);
    } catch {
      this.emit({ type: 'stt_status_changed', status: 'error', reason: 'model' });
      return;
    }
    if (!this.listening) return;
    this.emit({ type: 'stt_status_changed', status: 'ready' });
    // 받아쓰는 동안 새 말을 시작했으면 대답은 그 말이 끝난 뒤에 한다.
    if (!text || turn !== this.turnOrder) {
      if (text) this.caption('user', text);
      else this.emit({ type: 'playback_stopped' });
      return;
    }
    this.caption('user', text);
    this.reply(turn);
  }

  private reply(turn: number): void {
    const demo = DEMO_TURNS[(turn - 1) % DEMO_TURNS.length];
    if (!demo) return;
    this.later(THINK_MS, () => {
      this.emit({ type: 'playback_started', at_ms: performance.now() });
      this.caption('ai', demo.ai);
    });
    this.later(THINK_MS + AI_SPEAKS_MS, () => this.emit({ type: 'playback_stopped' }));
  }

  async disconnect(): Promise<void> {
    if (!this.started) return;
    this.started = false;
    this.listening = false;
    this.clearTimers();
    this.mic.stop();
    this.transcriber.dispose();
    this.emit({ type: 'connection_changed', status: 'closed' });
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (muted) this.segmenter.reset();
  }

  /** 아직 한벗 목소리(TTS)가 없어서 끌 소리가 없다. */
  setOutputMuted(): void {}

  setHeld(held: boolean): void {
    this.held = held;
    if (!held) return;
    this.segmenter.reset();
    this.clearTimers();
  }

  interrupt(): void {
    this.clearTimers();
    this.emit({ type: 'playback_stopped' });
  }

  setMode(mode: CallMode): void {
    this.emit({ type: 'mode_changed', mode });
  }

  /** 받아쓰기만 하는 동안에는 음성 단서를 내지 않으므로 답할 확인 질문도 없다. */
  answerCue(): void {}
}

/** 이 브라우저에서 마이크와 워커를 쓸 수 있는지. 안 되면 데모 클라이언트로 돌린다. */
export function canUseWhisper(): boolean {
  return (
    typeof Worker !== 'undefined' &&
    typeof AudioWorkletNode !== 'undefined' &&
    Boolean(navigator.mediaDevices?.getUserMedia)
  );
}
