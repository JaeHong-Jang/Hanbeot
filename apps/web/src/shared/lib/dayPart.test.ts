import { clockLabel, dayPart, resolveDayPart } from './dayPart';

describe('dayPart', () => {
  it.each([
    [4, 'night'],
    [5, 'morning'],
    [16, 'morning'],
    [17, 'evening'],
    [19, 'evening'],
    [20, 'night'],
    [0, 'night'],
  ] as const)('%i시는 %s', (hour, part) => {
    expect(dayPart(hour)).toBe(part);
  });
});

describe('resolveDayPart', () => {
  it('follows the clock on auto and keeps a chosen part otherwise', () => {
    expect(resolveDayPart('auto', 8)).toBe('morning');
    expect(resolveDayPart('night', 8)).toBe('night');
    expect(resolveDayPart('이상한 값', 18)).toBe('evening');
  });
});

describe('clockLabel', () => {
  it('reads the time with the part of the day', () => {
    expect(clockLabel(new Date(2026, 10, 12, 21, 40))).toBe('밤 9시 40분');
    expect(clockLabel(new Date(2026, 10, 12, 8, 0))).toBe('오전 8시');
    expect(clockLabel(new Date(2026, 10, 12, 0, 5))).toBe('새벽 12시 5분');
  });
});
