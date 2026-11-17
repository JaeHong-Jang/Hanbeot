import type { SttWorkerReply, SttWorkerRequest } from './sttProtocol';

type Pending = { resolve: (text: string) => void; reject: (error: Error) => void };

/** 받아쓰기 워커를 감싼다. load()로 모델을 올리고 transcribe()로 16kHz 소리를 글로 바꾼다. */
export class WhisperTranscriber {
  private worker: Worker | null = null;
  private pending = new Map<number, Pending>();
  private nextId = 1;

  load(onProgress: (ratio: number) => void): Promise<void> {
    const worker = new Worker(new URL('./whisper.worker.ts', import.meta.url), { type: 'module' });
    this.worker = worker;
    return new Promise((resolve, reject) => {
      worker.onmessage = (event: MessageEvent<SttWorkerReply>) => {
        const message = event.data;
        if (message.type === 'progress') onProgress(message.ratio);
        if (message.type === 'ready') resolve();
        if (message.type === 'result') this.settle(message.id)?.resolve(message.text);
        if (message.type === 'error') {
          const error = new Error(message.message);
          if (message.id === null) reject(error);
          else this.settle(message.id)?.reject(error);
        }
      };
      worker.onerror = (event) => reject(new Error(event.message));
      this.post({ type: 'load' });
    });
  }

  transcribe(audio: Float32Array): Promise<string> {
    const id = this.nextId;
    this.nextId += 1;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.post({ type: 'transcribe', id, audio });
    });
  }

  dispose(): void {
    this.worker?.terminate();
    this.worker = null;
    this.pending.clear();
  }

  private post(request: SttWorkerRequest): void {
    this.worker?.postMessage(request);
  }

  private settle(id: number): Pending | undefined {
    const entry = this.pending.get(id);
    this.pending.delete(id);
    return entry;
  }
}
