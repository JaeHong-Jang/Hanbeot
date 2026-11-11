/**
 * 붓 획 만들기: 붓이 지나가는 중심선(SVG path)에 "누르는 힘"을 입혀 획의 윤곽을 만든다.
 * 붓을 대는 곳은 둥글게 부풀고, 떼는 곳은 가늘게 빠진다.
 */
export type Point = { x: number; y: number };

/** 획 하나의 힘 조절. 값은 모두 0~1 비율이다. */
export type BrushProfile = {
  /** 붓을 대고 눌러 가는 구간의 길이 */
  headLen: number;
  /** 시작할 때의 굵기. 0이면 둥근 머리, 0보다 크면 앞 획에서 이어 온 굵기 */
  headMin: number;
  /** 붓을 들기 시작하는 지점 */
  tailStart: number;
  /** 끝에서의 굵기. 작을수록 뾰족하게 빠진다 */
  tailMin: number;
};

type Sample = Point & {
  /** 진행 방향에 수직인 단위 벡터 */
  nx: number;
  ny: number;
  /** 획 전체 길이에서의 위치(0~1) */
  t: number;
};

type Cubic = { p0: Point; p1: Point; p2: Point; p3: Point };

const END_CAP_LEN = 0.06; // 끝을 둥글게 마무리하는 구간
const WOBBLE = 0.05; // 손떨림만큼의 굵기 변화

/** "M x y C x1 y1 x2 y2 x y C …" 꼴의 path를 3차 곡선 조각으로 나눈다. M과 C만 지원한다. */
export function parseCubicPath(d: string): Cubic[] {
  const tokens = d.match(/[MC]|-?\d*\.?\d+/g) ?? [];
  const cubics: Cubic[] = [];
  let cursor: Point | null = null;
  let position = 0;
  const readPoint = (): Point => {
    const x = Number(tokens[position]);
    const y = Number(tokens[position + 1]);
    position += 2;
    return { x, y };
  };
  while (position < tokens.length) {
    const command = tokens[position];
    position += 1;
    if (command === 'M') {
      cursor = readPoint();
    } else if (command === 'C' && cursor) {
      const p1 = readPoint();
      const p2 = readPoint();
      const p3 = readPoint();
      cubics.push({ p0: cursor, p1, p2, p3 });
      cursor = p3;
    } else {
      throw new Error(`brushOutline: unsupported path command "${command ?? ''}"`);
    }
  }
  return cubics;
}

function cubicAt({ p0, p1, p2, p3 }: Cubic, u: number): Point {
  const v = 1 - u;
  const a = v * v * v;
  const b = 3 * v * v * u;
  const c = 3 * v * u * u;
  const e = u * u * u;
  return {
    x: a * p0.x + b * p1.x + c * p2.x + e * p3.x,
    y: a * p0.y + b * p1.y + c * p2.y + e * p3.y,
  };
}

function cubicTangent({ p0, p1, p2, p3 }: Cubic, u: number): Point {
  const v = 1 - u;
  return {
    x: 3 * v * v * (p1.x - p0.x) + 6 * v * u * (p2.x - p1.x) + 3 * u * u * (p3.x - p2.x),
    y: 3 * v * v * (p1.y - p0.y) + 6 * v * u * (p2.y - p1.y) + 3 * u * u * (p3.y - p2.y),
  };
}

/** 중심선을 따라 일정한 간격으로 점과 법선을 뽑는다. */
export function samplePath(d: string, stepLen = 2): Sample[] {
  const raw: (Point & { nx: number; ny: number; dist: number })[] = [];
  let dist = 0;
  let previous: Point | null = null;
  let lastNormal = { nx: 0, ny: -1 };

  for (const cubic of parseCubicPath(d)) {
    const roughLen =
      Math.hypot(cubic.p1.x - cubic.p0.x, cubic.p1.y - cubic.p0.y) +
      Math.hypot(cubic.p2.x - cubic.p1.x, cubic.p2.y - cubic.p1.y) +
      Math.hypot(cubic.p3.x - cubic.p2.x, cubic.p3.y - cubic.p2.y);
    const steps = Math.max(6, Math.ceil(roughLen / stepLen));
    // 조각이 이어지는 곳의 점이 두 번 들어가지 않게 첫 조각만 u=0부터 시작한다
    for (let step = previous ? 1 : 0; step <= steps; step++) {
      const u = step / steps;
      const point = cubicAt(cubic, u);
      const tangent = cubicTangent(cubic, u);
      const tangentLen = Math.hypot(tangent.x, tangent.y);
      if (tangentLen > 1e-6)
        lastNormal = { nx: -tangent.y / tangentLen, ny: tangent.x / tangentLen };
      if (previous) dist += Math.hypot(point.x - previous.x, point.y - previous.y);
      raw.push({ ...point, ...lastNormal, dist });
      previous = point;
    }
  }
  const total = dist || 1;
  return raw.map(({ dist: at, ...rest }) => ({ ...rest, t: at / total }));
}

/** 위치 t에서의 굵기 비율(0~1 남짓). */
export function brushWidthAt(t: number, profile: BrushProfile, seed = 0): number {
  const head =
    t < profile.headLen
      ? profile.headMin + (1 - profile.headMin) * Math.sqrt(t / profile.headLen)
      : 1;
  let tail = 1;
  if (t > profile.tailStart) {
    const u = (t - profile.tailStart) / (1 - profile.tailStart);
    tail = 1 + (profile.tailMin - 1) * Math.pow(u, 1.5);
  }
  const cap = t > 1 - END_CAP_LEN ? Math.sqrt(Math.max(0, (1 - t) / END_CAP_LEN)) : 1;
  const wobble = 1 + WOBBLE * Math.sin(t * 9 + seed);
  return Math.max(0, head * tail * cap * wobble);
}

const round = (value: number): number => Math.round(value * 10) / 10;

/** 중심선 d를 따라 최대 굵기 maxWidth로 쓴 붓 획의 윤곽(닫힌 path). */
export function brushOutline(d: string, maxWidth: number, profile: BrushProfile): string {
  const samples = samplePath(d);
  const seed = samples.length; // 획마다 다른 떨림
  const left: string[] = [];
  const right: string[] = [];
  for (const sample of samples) {
    const half = (maxWidth * brushWidthAt(sample.t, profile, seed)) / 2;
    left.push(`${round(sample.x + sample.nx * half)} ${round(sample.y + sample.ny * half)}`);
    right.push(`${round(sample.x - sample.nx * half)} ${round(sample.y - sample.ny * half)}`);
  }
  return `M${left.join('L')}L${right.reverse().join('L')}Z`;
}
