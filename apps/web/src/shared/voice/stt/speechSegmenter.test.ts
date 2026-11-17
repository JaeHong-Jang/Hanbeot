import { SpeechSegmenter, rms, type SegmenterOptions } from './speechSegmenter';

const OPTIONS: SegmenterOptions = {
  sampleRate: 1000,
  threshold: 0.1,
  silenceSec: 0.3,
  minSpeechSec: 0.2,
  maxSpeechSec: 2,
  preRollSec: 0.1,
};
const FRAME = 100; // 0.1초
const loud = () => new Float32Array(FRAME).fill(0.5);
const quiet = () => new Float32Array(FRAME).fill(0.001);

function feed(segmenter: SpeechSegmenter, frames: readonly Float32Array[]) {
  return frames.map((frame) => segmenter.push(frame));
}

describe('rms', () => {
  it('is 0 for silence and the level for a flat signal', () => {
    expect(rms(new Float32Array(10))).toBe(0);
    expect(rms(new Float32Array(10).fill(0.5))).toBeCloseTo(0.5);
    expect(rms(new Float32Array(0))).toBe(0);
  });
});

describe('SpeechSegmenter', () => {
  it('reports the start of speech and ends it after enough silence', () => {
    const segmenter = new SpeechSegmenter(OPTIONS);
    const results = feed(segmenter, [quiet(), loud(), loud(), loud(), quiet(), quiet(), quiet()]);
    expect(results.map((r) => r.kind)).toEqual([
      'none',
      'started',
      'none',
      'none',
      'none',
      'none',
      'ended',
    ]);
    const last = results.at(-1);
    // 앞 여유 0.1초 + 말 0.3초 + 뒤 조용한 0.3초
    expect(last?.kind === 'ended' ? last.audio.length : 0).toBe(700);
  });

  it('gives back empty audio for a sound too short to be speech', () => {
    const segmenter = new SpeechSegmenter(OPTIONS);
    const results = feed(segmenter, [loud(), quiet(), quiet(), quiet()]);
    const last = results.at(-1);
    expect(last?.kind).toBe('ended');
    expect(last?.kind === 'ended' ? last.audio.length : -1).toBe(0);
  });

  it('cuts a long speech at the maximum length', () => {
    const segmenter = new SpeechSegmenter(OPTIONS);
    const results = feed(
      segmenter,
      Array.from({ length: 20 }, () => loud()),
    );
    expect(results.at(-1)?.kind).toBe('ended');
    expect(results.filter((r) => r.kind === 'ended')).toHaveLength(1);
  });

  it('drops the segment in progress on reset', () => {
    const segmenter = new SpeechSegmenter(OPTIONS);
    feed(segmenter, [loud(), loud()]);
    segmenter.reset();
    expect(segmenter.push(quiet()).kind).toBe('none');
    expect(segmenter.push(loud()).kind).toBe('started');
  });
});
