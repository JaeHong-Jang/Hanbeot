/// <reference lib="webworker" />
import { pipeline, type AutomaticSpeechRecognitionPipeline } from '@huggingface/transformers';

import { STT_MODEL, type SttWorkerReply, type SttWorkerRequest } from './sttProtocol';

/**
 * Whisper small을 브라우저 안에서 돌리는 워커. 소리는 이 기기 밖으로 나가지 않는다.
 * 모델 파일은 처음 한 번 Hugging Face에서 받아 브라우저 캐시에 둔다.
 */
let transcriber: AutomaticSpeechRecognitionPipeline | null = null;

const reply = (message: SttWorkerReply) => self.postMessage(message);

async function load(): Promise<void> {
  const useGpu = 'gpu' in navigator;
  // 파일마다 따로 오는 진행률을 전체 바이트 기준 하나로 합친다.
  const sizes = new Map<string, { loaded: number; total: number }>();
  transcriber = await pipeline('automatic-speech-recognition', STT_MODEL, {
    device: useGpu ? 'webgpu' : 'wasm',
    // WebGPU는 인코더를 fp32로 둬야 결과가 깨지지 않는다. WASM은 8비트 양자화로 받는 양과 시간을 줄인다.
    dtype: useGpu ? { encoder_model: 'fp32', decoder_model_merged: 'q4' } : 'q8',
    progress_callback: (info) => {
      if (info.status !== 'progress') return;
      sizes.set(info.file, { loaded: info.loaded, total: info.total });
      let loaded = 0;
      let total = 0;
      for (const size of sizes.values()) {
        loaded += size.loaded;
        total += size.total;
      }
      reply({ type: 'progress', ratio: total > 0 ? loaded / total : 0 });
    },
  });
  reply({ type: 'ready' });
}

async function transcribe(id: number, audio: Float32Array): Promise<void> {
  if (!transcriber) throw new Error('model not loaded');
  const output = await transcriber(audio, { language: 'korean', task: 'transcribe' });
  const text = Array.isArray(output) ? output.map((part) => part.text).join(' ') : output.text;
  reply({ type: 'result', id, text: text.trim() });
}

self.onmessage = (event: MessageEvent<SttWorkerRequest>) => {
  const request = event.data;
  const work = request.type === 'load' ? load() : transcribe(request.id, request.audio);
  work.catch((error: unknown) => {
    reply({
      type: 'error',
      id: request.type === 'transcribe' ? request.id : null,
      message: error instanceof Error ? error.message : String(error),
    });
  });
};
