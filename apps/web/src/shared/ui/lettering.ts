import { brushOutline, type BrushProfile } from '@/shared/lib/brushOutline';

/**
 * 붓으로 쓴 "한벗"(흘림 캘리그라피). 폰트가 아니라 붓이 지나가는 중심선을 획 순서대로 적은 것이다.
 * 획마다 누르는 힘(kind)이 달라서 굵은 획, 점, 길게 빼는 획, 가는 이음선으로 나뉜다.
 */
export type StrokeKind = 'body' | 'dab' | 'sweep' | 'link';

export type BrushStrokeDef = {
  /** 붓이 지나가는 중심선(SVG path, M과 C만) */
  d: string;
  kind: StrokeKind;
  /** true면 앞 획 끝에서 붓을 떼지 않고 이어 쓴다 */
  joined: boolean;
  /** 이 획에서 가장 굵은 곳의 폭 */
  width: number;
  /** 굵기 변화를 입힌 획의 윤곽(닫힌 path) */
  outline: string;
};

const BRUSH_WIDTH = 15; // 힘껏 누른 획의 폭
const LINK_WIDTH = 0.17; // 이음선은 붓끝만 스친다

/** 획 종류별 힘 조절. fresh = 붓을 새로 댈 때, joined = 이음선에서 이어 올 때. */
const PROFILES: Record<StrokeKind, { fresh: BrushProfile; joined: BrushProfile }> = {
  // 눌러서 긋고 끝에서 가볍게 뺀다
  body: {
    fresh: { headLen: 0.12, headMin: 0, tailStart: 0.5, tailMin: 0.16 },
    joined: { headLen: 0.2, headMin: 0.22, tailStart: 0.5, tailMin: 0.16 },
  },
  // 짧게 찍는 점·곁줄기. 끝까지 도톰하다
  dab: {
    fresh: { headLen: 0.28, headMin: 0, tailStart: 0.55, tailMin: 0.5 },
    joined: { headLen: 0.3, headMin: 0.22, tailStart: 0.55, tailMin: 0.5 },
  },
  // 굵게 시작해 길고 뾰족하게 빼는 획
  sweep: {
    fresh: { headLen: 0.1, headMin: 0, tailStart: 0.32, tailMin: 0.03 },
    joined: { headLen: 0.16, headMin: 0.22, tailStart: 0.38, tailMin: 0.03 },
  },
  // 획 사이를 잇는 실 같은 선
  link: {
    fresh: { headLen: 0.2, headMin: 0.6, tailStart: 0.4, tailMin: 0.75 },
    joined: { headLen: 0.2, headMin: 0.6, tailStart: 0.4, tailMin: 0.75 },
  },
};

type StrokeInput = { d: string; kind: StrokeKind; joined: boolean; weight: number };

const stroke = (d: string, kind: StrokeKind, weight = 1): StrokeInput => ({
  d,
  kind,
  joined: false,
  weight,
});
const join = (d: string, kind: StrokeKind, weight = 1): StrokeInput => ({
  d,
  kind,
  joined: true,
  weight,
});
const link = (d: string): StrokeInput => ({ d, kind: 'link', joined: true, weight: LINK_WIDTH });

function build(input: StrokeInput): BrushStrokeDef {
  const width = BRUSH_WIDTH * input.weight;
  const profile = PROFILES[input.kind][input.joined ? 'joined' : 'fresh'];
  return {
    d: input.d,
    kind: input.kind,
    joined: input.joined,
    width,
    outline: brushOutline(input.d, width, profile),
  };
}

const STROKES: readonly StrokeInput[] = [
  // 한: ㅎ
  stroke('M50 24C57 25 64 28 71 33', 'dab', 0.85),
  link('M71 33C60 42 42 51 28 60'),
  join('M28 60C48 55 74 49 102 41', 'body', 0.75),
  link('M102 41C92 52 80 60 68 66'),
  join('M68 66C52 62 38 76 42 92C46 106 64 110 76 102C88 94 90 78 78 69', 'body', 0.7),
  // 한: ㅏ
  stroke('M126 8C126 44 124 84 118 124', 'body', 1),
  link('M118 124C116 104 117 84 122 68'),
  join('M122 68C132 64 142 60 154 54', 'dab', 0.8),
  // 한: ㄴ. 오른쪽으로 길게 빼서 다음 글자 밑까지 간다
  stroke('M48 114C44 128 46 142 58 147C84 154 124 146 172 124', 'sweep', 0.95),
  // 벗: ㅂ
  stroke('M190 34C189 56 187 80 194 93C202 102 220 99 226 88C230 76 230 54 230 30', 'body', 0.85),
  link('M230 30C218 44 204 56 192 66'),
  join('M192 66C204 64 216 62 228 60', 'dab', 0.62),
  // 벗: ㅓ
  stroke('M238 70C246 68 254 66 264 62', 'dab', 0.75),
  link('M264 62C266 44 267 24 268 6'),
  join('M268 6C269 40 267 78 260 112', 'body', 1),
  // 벗: ㅅ. 마지막 획은 굵게 눌렀다가 길게 흘려 뺀다
  link('M260 112C254 116 247 114 242 110'),
  join('M242 110C234 124 220 140 200 152', 'body', 0.75),
  link('M200 152C212 146 226 134 234 124'),
  join('M234 124C248 138 268 152 290 152C300 152 308 147 316 138', 'sweep', 1),
];

export const LETTERING = {
  width: 326,
  height: 168,
  /** 글씨 기울기. x' = x + slant * (y - height / 2). 음수면 위쪽이 오른쪽으로 눕는다. */
  slant: -0.16,
  strokes: STROKES.map(build),
} as const;

/** 기울기를 적용한 좌표. 붓 그림을 글씨 위에 올릴 때 쓴다. */
export function slantPoint(x: number, y: number): { x: number; y: number } {
  return { x: x + LETTERING.slant * (y - LETTERING.height / 2), y };
}

/** 글씨 묶음에 주는 SVG transform. slantPoint와 같은 변환이다. */
export const SLANT_TRANSFORM = `matrix(1 0 ${LETTERING.slant} 1 ${(-LETTERING.slant * LETTERING.height) / 2} 0)`;
