import { formatMmSs } from './time';

describe('formatMmSs', () => {
  it('formats seconds', () => {
    expect(formatMmSs(462)).toBe('07:42');
    expect(formatMmSs(0)).toBe('00:00');
    expect(formatMmSs(-5)).toBe('00:00');
  });
});
