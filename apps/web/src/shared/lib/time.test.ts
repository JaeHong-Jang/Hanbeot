import { daysSince, formatMmSs } from './time';

describe('formatMmSs', () => {
  it('formats seconds', () => {
    expect(formatMmSs(462)).toBe('07:42');
    expect(formatMmSs(0)).toBe('00:00');
    expect(formatMmSs(-5)).toBe('00:00');
  });
});

describe('daysSince', () => {
  const now = new Date('2026-11-12T12:00:00Z');
  it('counts whole days', () => {
    expect(daysSince('2026-11-12T09:00:00Z', now)).toBe(0);
    expect(daysSince('2026-11-09T11:00:00Z', now)).toBe(3);
  });
  it('treats future or unreadable times as today', () => {
    expect(daysSince('2026-12-01T00:00:00Z', now)).toBe(0);
    expect(daysSince('not a date', now)).toBe(0);
  });
});
