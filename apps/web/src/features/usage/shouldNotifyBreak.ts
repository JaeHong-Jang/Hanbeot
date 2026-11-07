/** 임시 운영 기준(설계서 5⑪): 연속 60분. W6에서 조정. */
export const BREAK_AFTER_SEC = 60 * 60;

/** 경계에 도달했고 안전 모드가 아니며 사용자가 아직 닫지 않았을 때만 알린다. */
export function shouldNotifyBreak(
  elapsedSec: number,
  safeMode: boolean,
  dismissed: boolean,
): boolean {
  return elapsedSec >= BREAK_AFTER_SEC && !safeMode && !dismissed;
}
