/** 받아쓰기 모델. 다른 크기로 바꾸려면 이 한 줄만 고친다. */
export const STT_MODEL = 'onnx-community/whisper-small';

/** 화면 → 워커 */
export type SttWorkerRequest =
  { type: 'load' } | { type: 'transcribe'; id: number; audio: Float32Array };

/** 워커 → 화면 */
export type SttWorkerReply =
  | { type: 'progress'; ratio: number }
  | { type: 'ready' }
  | { type: 'result'; id: number; text: string }
  | { type: 'error'; id: number | null; message: string };
