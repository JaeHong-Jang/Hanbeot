import { nextSheetOpen } from './sheetSnap';

describe('nextSheetOpen', () => {
  it('snaps to the nearer side on a slow release', () => {
    expect(nextSheetOpen({ ratio: 0.3, velocity: 0.1 })).toBe(true);
    expect(nextSheetOpen({ ratio: 0.7, velocity: -0.1 })).toBe(false);
  });

  it('follows the direction of a fast flick wherever the sheet is', () => {
    expect(nextSheetOpen({ ratio: 0.1, velocity: 0.9 })).toBe(false);
    expect(nextSheetOpen({ ratio: 0.9, velocity: -0.9 })).toBe(true);
  });
});
