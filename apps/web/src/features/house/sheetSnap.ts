/** 이보다 빠르게(px/ms) 밀었으면 위치와 상관없이 민 방향으로 붙인다. */
const FLICK_SPEED = 0.4;

type Release = {
  /** 놓은 순간 판이 내려가 있는 정도. 0 = 다 펼침, 1 = 다 접힘 */
  ratio: number;
  /** 손가락 속도(px/ms). 아래로 밀면 양수 */
  velocity: number;
};

/** 손을 뗐을 때 판을 펼칠지(true) 접을지(false). 빠르게 밀었으면 방향, 아니면 가까운 쪽. */
export function nextSheetOpen({ ratio, velocity }: Release): boolean {
  if (Math.abs(velocity) >= FLICK_SPEED) return velocity < 0;
  return ratio < 0.5;
}
