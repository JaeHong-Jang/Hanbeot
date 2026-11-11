/**
 * "한벗" 펜 글씨(날림체). 폰트가 아니라 펜이 지나가는 중심선을 획 순서대로 적은 것이다.
 * 굵은 획 사이를 가는 이음선으로 이어서, 펜을 거의 떼지 않고 빠르게 쓴 글씨가 된다.
 */
export type PenStrokeDef = {
  /** SVG path. 한 획. */
  d: string;
  /** 굵기 배수. 1 = 힘을 준 획, 0.3 안팎 = 힘을 뺀 이음선. */
  weight: number;
  /** true면 앞 획 끝에서 펜을 떼지 않고 이어 쓴다. */
  joined: boolean;
};

const LINK = 0.28;

const stroke = (d: string, weight = 1): PenStrokeDef => ({ d, weight, joined: false });
const join = (d: string, weight = 1): PenStrokeDef => ({ d, weight, joined: true });

export const LETTERING = {
  width: 326,
  height: 168,
  /** 글씨 기울기. x' = x + slant * (y - height / 2). 음수면 위쪽이 오른쪽으로 눕는다. */
  slant: -0.2,
  strokes: [
    // 한: ㅎ
    stroke('M50 24C57 25 64 28 71 33'),
    join('M71 33C60 42 42 51 28 60', LINK),
    join('M28 60C48 55 74 49 102 41'),
    join('M102 41C92 52 80 60 68 66', LINK),
    join('M68 66C52 62 38 76 42 92C46 106 64 110 76 102C88 94 90 78 78 69', 0.9),
    // 한: ㅏ
    stroke('M126 8C126 44 124 84 118 124'),
    join('M118 124C116 104 117 84 122 68', LINK),
    join('M122 68C132 64 142 60 154 54', 0.9),
    // 한: ㄴ. 오른쪽으로 길게 빼서 다음 글자 밑까지 간다
    stroke('M48 114C44 128 46 142 58 147C84 154 124 146 172 124'),
    // 벗: ㅂ
    stroke('M190 34C189 56 187 80 194 93C202 102 220 99 226 88C230 76 230 54 230 30'),
    join('M230 30C218 44 204 56 192 66', LINK),
    join('M192 66C204 64 216 62 228 60', 0.9),
    // 벗: ㅓ
    stroke('M238 70C246 68 254 66 264 62', 0.9),
    join('M264 62C266 44 267 24 268 6', LINK),
    join('M268 6C269 40 267 78 260 112'),
    // 벗: ㅅ. 마지막 획은 길게 흘려 쓴다
    join('M260 112C254 116 247 114 242 110', LINK),
    join('M242 110C234 124 220 140 200 152', 0.8),
    join('M200 152C212 146 226 134 234 124', LINK),
    join('M234 124C248 138 268 152 290 152C300 152 308 147 316 138'),
  ] as readonly PenStrokeDef[],
} as const;

/** 기울기를 적용한 좌표. 펜 그림을 글씨 위에 올릴 때 쓴다. */
export function slantPoint(x: number, y: number): { x: number; y: number } {
  return { x: x + LETTERING.slant * (y - LETTERING.height / 2), y };
}

/** 글씨 묶음에 주는 SVG transform. slantPoint와 같은 변환이다. */
export const SLANT_TRANSFORM = `matrix(1 0 ${LETTERING.slant} 1 ${(-LETTERING.slant * LETTERING.height) / 2} 0)`;

const NIB_ANGLE_RAD = (32 * Math.PI) / 180;
const NIB_WIDTH = 7; // 힘을 준 획에서 가장 굵은 폭
const HAIRLINE = 1.6; // 가장 가는 폭
const NIB_COPIES_PER_SIDE = 3;

/**
 * 만년필 펜촉 흉내: 같은 선을 펜촉 방향으로 조금씩 밀어 여러 번 겹친다.
 * 펜촉과 나란히 가는 선은 가늘고, 가로지르는 선(내리긋기)은 굵어진다.
 * 첫 항목이 가운데 선이다.
 */
export function nibOffsets(weight: number): { dx: number; dy: number }[] {
  const half = (NIB_WIDTH * weight) / 2;
  const steps = [0];
  for (let k = 1; k <= NIB_COPIES_PER_SIDE; k++) steps.push(k, -k);
  return steps.map((k) => {
    const t = (k / NIB_COPIES_PER_SIDE) * half;
    return { dx: Math.cos(NIB_ANGLE_RAD) * t, dy: -Math.sin(NIB_ANGLE_RAD) * t };
  });
}

/** 선 하나의 굵기. 이음선도 끊겨 보이지 않을 만큼은 남긴다. */
export function nibLineWidth(weight: number): number {
  return Math.max(1.15, HAIRLINE * weight);
}
