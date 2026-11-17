/** 마이크 소리를 "한 번 말한 덩어리"로 자르는 기준. 시간은 모두 샘플 수가 아니라 초 단위다. */
export type SegmenterOptions = {
  sampleRate: number;
  /** 이 음량(RMS, 0~1)을 넘으면 말소리로 본다 */
  threshold: number;
  /** 말이 끝났다고 보는 조용한 시간 */
  silenceSec: number;
  /** 이보다 짧은 소리는 기침·부딪힘으로 보고 버린다 */
  minSpeechSec: number;
  /** 쉬지 않고 말해도 이 길이에서 한 번 끊는다(Whisper 입력은 30초까지) */
  maxSpeechSec: number;
  /** 말 시작 앞에 붙여 줄 여유. 첫 음절이 잘리지 않게 한다 */
  preRollSec: number;
};

export const DEFAULT_SEGMENTER: SegmenterOptions = {
  sampleRate: 16_000,
  threshold: 0.015,
  silenceSec: 0.8,
  minSpeechSec: 0.35,
  maxSpeechSec: 25,
  preRollSec: 0.25,
};

export type SegmenterResult =
  { kind: 'none' } | { kind: 'started' } | { kind: 'ended'; audio: Float32Array };

const NONE: SegmenterResult = { kind: 'none' };

export function rms(frame: Float32Array): number {
  if (frame.length === 0) return 0;
  let sum = 0;
  for (const sample of frame) sum += sample * sample;
  return Math.sqrt(sum / frame.length);
}

function concat(frames: readonly Float32Array[]): Float32Array {
  const total = frames.reduce((length, frame) => length + frame.length, 0);
  const out = new Float32Array(total);
  let offset = 0;
  for (const frame of frames) {
    out.set(frame, offset);
    offset += frame.length;
  }
  return out;
}

/**
 * 음량으로 말의 시작과 끝을 찾는 간단한 구간 검출기.
 * 프레임을 하나씩 넣으면 말이 시작될 때 'started', 조용해져서 끝나면 'ended'와 그 구간의 소리를 준다.
 */
export class SpeechSegmenter {
  private frames: Float32Array[] = [];
  private preRoll: Float32Array[] = [];
  private preRollSamples = 0;
  private speaking = false;
  private voicedSamples = 0;
  private silentSamples = 0;
  private totalSamples = 0;

  constructor(private readonly options: SegmenterOptions = DEFAULT_SEGMENTER) {}

  push(frame: Float32Array): SegmenterResult {
    const voiced = rms(frame) >= this.options.threshold;
    if (!this.speaking) return voiced ? this.start(frame) : this.keepPreRoll(frame);

    this.frames.push(frame);
    this.totalSamples += frame.length;
    if (voiced) {
      this.voicedSamples += frame.length;
      this.silentSamples = 0;
    } else {
      this.silentSamples += frame.length;
    }
    const { sampleRate, silenceSec, maxSpeechSec } = this.options;
    const quietLongEnough = this.silentSamples >= silenceSec * sampleRate;
    const tooLong = this.totalSamples >= maxSpeechSec * sampleRate;
    return quietLongEnough || tooLong ? this.finish() : NONE;
  }

  /** 음소거·보류로 듣기를 멈출 때 하던 구간을 버린다. */
  reset(): void {
    this.frames = [];
    this.preRoll = [];
    this.preRollSamples = 0;
    this.speaking = false;
    this.voicedSamples = 0;
    this.silentSamples = 0;
    this.totalSamples = 0;
  }

  private keepPreRoll(frame: Float32Array): SegmenterResult {
    this.preRoll.push(frame);
    this.preRollSamples += frame.length;
    const limit = this.options.preRollSec * this.options.sampleRate;
    while (this.preRollSamples > limit) {
      const oldest = this.preRoll.shift();
      if (!oldest) break;
      this.preRollSamples -= oldest.length;
    }
    return NONE;
  }

  private start(frame: Float32Array): SegmenterResult {
    this.speaking = true;
    this.frames = [...this.preRoll, frame];
    this.totalSamples = this.preRollSamples + frame.length;
    this.voicedSamples = frame.length;
    this.silentSamples = 0;
    this.preRoll = [];
    this.preRollSamples = 0;
    return { kind: 'started' };
  }

  private finish(): SegmenterResult {
    const longEnough = this.voicedSamples >= this.options.minSpeechSec * this.options.sampleRate;
    const audio = concat(this.frames);
    this.reset();
    // 너무 짧은 소리도 'ended'로 알려야 화면이 "듣는 중"에서 돌아온다. 소리는 비워서 준다.
    return { kind: 'ended', audio: longEnough ? audio : new Float32Array(0) };
  }
}
