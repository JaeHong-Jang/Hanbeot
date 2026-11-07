import type { CallEvent, CallMode } from '@/entities';

/** 클라이언트 전용 이벤트(계약 밖): 연결 상태, 자막, 첫 오디오 재생(TTFA의 t1). */
export type ConnectionChanged = {
  type: 'connection_changed';
  status: 'connecting' | 'connected' | 'closed';
};
export type CaptionAdded = {
  type: 'caption_added';
  id: string;
  speaker: 'user' | 'ai';
  text: string;
};
export type PlaybackStarted = { type: 'playback_started'; at_ms: number };

export type VoiceEvent = CallEvent | ConnectionChanged | CaptionAdded | PlaybackStarted;
export type VoiceEventHandler = (event: VoiceEvent) => void;

/**
 * 음성 연결 추상화. 화면은 이 인터페이스만 안다.
 * TODO: pipecat-ai/client-js(PipecatClient + SmallWebRTCTransport)로 구현한 클래스를 여기에 꽂는다.
 *       서버 이벤트(packages/contracts/events)를 VoiceEvent로 그대로 흘려보내면 된다.
 */
export interface VoiceClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  /** 마이크만 끈다. */
  setMuted(muted: boolean): void;
  /** 마이크와 AI 발화를 모두 멈춘다. */
  setHeld(held: boolean): void;
  /** 탭으로 AI 발화 끊기(끼어들기). */
  interrupt(): void;
  setMode(mode: CallMode): void;
  subscribe(handler: VoiceEventHandler): () => void;
}
