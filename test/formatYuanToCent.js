import { formatYuanToCent } from '../src/index';

describe('验证金额转换', () => {
  it('由元转换成分', () => {
    expect(formatYuanToCent(111)).toBe(11100);
    expect(formatYuanToCent(0.12)).toBe(12);
    expect(formatYuanToCent(-100)).toBe(-10000);
    expect(formatYuanToCent(-12.111)).toBe(-1211);
    expect(formatYuanToCent(-0.12)).toBe(-12);
    expect(formatYuanToCent(0)).toBe(0);
    expect(formatYuanToCent(null)).toBe('');
    expect(formatYuanToCent(undefined)).toBe('');
  });
});
