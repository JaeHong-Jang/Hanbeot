import {
  brushOutline,
  brushWidthAt,
  parseCubicPath,
  samplePath,
  type BrushProfile,
} from './brushOutline';

const profile: BrushProfile = { headLen: 0.1, headMin: 0, tailStart: 0.5, tailMin: 0.1 };

describe('parseCubicPath', () => {
  it('splits a path into cubic pieces that share end points', () => {
    const cubics = parseCubicPath('M0 0C10 0 20 0 30 0C40 0 50 10 60 10');
    expect(cubics).toHaveLength(2);
    expect(cubics[1]?.p0).toEqual(cubics[0]?.p3);
  });

  it('rejects commands it cannot draw', () => {
    expect(() => parseCubicPath('M0 0L10 10')).toThrow();
  });
});

describe('samplePath', () => {
  it('walks from 0 to 1 without going backwards', () => {
    const samples = samplePath('M0 0C10 0 20 0 30 0C40 0 50 10 60 10');
    const positions = samples.map((sample) => sample.t);
    expect(positions[0]).toBe(0);
    expect(positions.at(-1)).toBeCloseTo(1);
    expect(positions.every((t, order) => order === 0 || t >= (positions[order - 1] ?? 0))).toBe(
      true,
    );
  });

  it('gives a unit normal perpendicular to a straight stroke', () => {
    const [first] = samplePath('M0 0C10 0 20 0 30 0');
    expect(Math.abs(first?.nx ?? 1)).toBeCloseTo(0);
    expect(Math.abs(first?.ny ?? 0)).toBeCloseTo(1);
  });
});

describe('brushWidthAt', () => {
  it('starts from nothing, swells, then thins toward the tail', () => {
    expect(brushWidthAt(0, profile)).toBe(0);
    const body = brushWidthAt(0.3, profile);
    expect(body).toBeGreaterThan(0.9);
    expect(brushWidthAt(0.9, profile)).toBeLessThan(body / 2);
    expect(brushWidthAt(1, profile)).toBe(0);
  });

  it('keeps the starting width when the stroke continues from another', () => {
    expect(brushWidthAt(0, { ...profile, headMin: 0.3 })).toBeCloseTo(0.3);
  });
});

describe('brushOutline', () => {
  it('returns one closed shape', () => {
    const outline = brushOutline('M0 0C10 0 20 0 30 0', 10, profile);
    expect(outline.startsWith('M')).toBe(true);
    expect(outline.endsWith('Z')).toBe(true);
    expect(outline.match(/M/g)).toHaveLength(1);
  });
});
