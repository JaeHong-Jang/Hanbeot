/**
 * 이 기기에 남기는 통화 기록. 대화 내용은 담지 않고, 편지를 다시 불러올 세션 번호와 시간만 둔다.
 * 편지 본문은 서버의 요약(/summaries/{sessionId})에서 가져온다.
 */
export type CallLogEntry = {
  sessionId: string;
  friendId: string;
  /** 통화가 끝난 시각(ISO 8601) */
  endedAt: string;
  durationSec: number;
};

export const CALL_LOG_MAX = 30;

const isEntry = (value: unknown): value is CallLogEntry => {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.sessionId === 'string' &&
    typeof v.friendId === 'string' &&
    typeof v.endedAt === 'string' &&
    !Number.isNaN(Date.parse(v.endedAt)) &&
    typeof v.durationSec === 'number' &&
    v.durationSec >= 0
  );
};

/** 저장소에서 읽은 문자열을 기록 목록으로 바꾼다. 깨졌거나 모양이 다른 항목은 버린다. */
export function parseCallLog(raw: string | null): CallLogEntry[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isEntry) : [];
  } catch {
    return [];
  }
}

/** 새 통화를 맨 앞에 넣는다. 같은 세션은 한 번만 남기고, 최근 max건까지만 둔다. */
export function addCallLog(
  log: readonly CallLogEntry[],
  entry: CallLogEntry,
  max: number = CALL_LOG_MAX,
): CallLogEntry[] {
  return [entry, ...log.filter((e) => e.sessionId !== entry.sessionId)].slice(0, max);
}

/** 이번 주(월요일 0시부터, 기기 시간 기준) 통화 횟수와 분. 분은 반올림한다. */
export function weekStats(
  log: readonly CallLogEntry[],
  now: Date,
): { calls: number; minutes: number } {
  const monday = new Date(now);
  const daysSinceMonday = (now.getDay() + 6) % 7;
  monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - daysSinceMonday);
  const thisWeek = log.filter((e) => {
    const t = Date.parse(e.endedAt);
    return t >= monday.getTime() && t <= now.getTime();
  });
  const seconds = thisWeek.reduce((sum, e) => sum + e.durationSec, 0);
  return { calls: thisWeek.length, minutes: Math.round(seconds / 60) };
}

/** 가짜 API 모드에서만 쓰는 예시 기록: 하루, 사흘, 엿새 전 통화. */
export function demoCallLog(now: Date): CallLogEntry[] {
  const daysAgo = (days: number, minutes: number, id: string): CallLogEntry => ({
    sessionId: id,
    friendId: 'haneul',
    endedAt: new Date(now.getTime() - days * 86_400_000).toISOString(),
    durationSec: minutes * 60,
  });
  return [daysAgo(1, 23, 'demo-a'), daysAgo(3, 14, 'demo-b'), daysAgo(6, 9, 'demo-c')];
}
