import { addCallLog, parseCallLog, weekStats, type CallLogEntry } from './callLog';

const entry = (sessionId: string, endedAt: string, durationSec = 600): CallLogEntry => ({
  sessionId,
  friendId: 'haneul',
  endedAt,
  durationSec,
});

describe('parseCallLog', () => {
  it('returns an empty list for missing or broken storage', () => {
    expect(parseCallLog(null)).toEqual([]);
    expect(parseCallLog('{not json')).toEqual([]);
    expect(parseCallLog('{"a":1}')).toEqual([]);
  });

  it('drops entries with the wrong shape instead of crashing', () => {
    const raw = JSON.stringify([
      entry('ok', '2026-11-10T10:00:00Z'),
      { sessionId: 'bad-date', friendId: 'haneul', endedAt: 'yesterday', durationSec: 60 },
      {
        sessionId: 'negative',
        friendId: 'haneul',
        endedAt: '2026-11-10T10:00:00Z',
        durationSec: -1,
      },
    ]);
    expect(parseCallLog(raw).map((e) => e.sessionId)).toEqual(['ok']);
  });
});

describe('addCallLog', () => {
  it('puts the newest call first and keeps one entry per session', () => {
    const log = [entry('a', '2026-11-10T10:00:00Z'), entry('b', '2026-11-09T10:00:00Z')];
    const next = addCallLog(log, entry('b', '2026-11-11T10:00:00Z', 60));
    expect(next.map((e) => e.sessionId)).toEqual(['b', 'a']);
    expect(next[0]?.durationSec).toBe(60);
  });

  it('keeps only the most recent calls', () => {
    const log = [entry('a', '2026-11-10T10:00:00Z'), entry('b', '2026-11-09T10:00:00Z')];
    expect(addCallLog(log, entry('c', '2026-11-11T10:00:00Z'), 2).map((e) => e.sessionId)).toEqual([
      'c',
      'a',
    ]);
  });
});

describe('weekStats', () => {
  // 2026-11-12은 목요일. 이번 주 월요일은 11월 9일.
  const now = new Date(2026, 10, 12, 21, 0);

  it('counts calls from Monday 00:00 and rounds minutes', () => {
    const log = [
      entry('thu', new Date(2026, 10, 12, 9, 0).toISOString(), 23 * 60 + 40),
      entry('mon', new Date(2026, 10, 9, 0, 30).toISOString(), 10 * 60),
      entry('lastSun', new Date(2026, 10, 8, 23, 59).toISOString(), 30 * 60),
    ];
    expect(weekStats(log, now)).toEqual({ calls: 2, minutes: 34 });
  });

  it('treats Sunday as the end of the week, not the start', () => {
    const sunday = new Date(2026, 10, 15, 22, 0);
    const log = [entry('mon', new Date(2026, 10, 9, 8, 0).toISOString(), 60)];
    expect(weekStats(log, sunday).calls).toBe(1);
  });

  it('is zero with no calls', () => {
    expect(weekStats([], now)).toEqual({ calls: 0, minutes: 0 });
  });
});
