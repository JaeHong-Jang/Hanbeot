import { josa } from './friends';

describe('josa', () => {
  it('picks the particle by final consonant', () => {
    expect(josa('하늘', '이', '')).toBe('하늘이');
    expect(josa('도윤', '과', '와')).toBe('도윤과');
    expect(josa('지호', '과', '와')).toBe('지호와');
    expect(josa('지호', '아', '야')).toBe('지호야');
  });
});
