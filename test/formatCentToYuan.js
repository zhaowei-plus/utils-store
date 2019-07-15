import { formatCentToYuan } from '../src/index';

describe('验证金额转换', () => {
  it('由分转换成元', () => {
    expect(formatCentToYuan(111111)).toBe('1,111.11');
    expect(formatCentToYuan(-100000)).toBe('-1,000.00');
    expect(formatCentToYuan(-12)).toBe('-0.12');
    expect(formatCentToYuan(0)).toBe(0);
    expect(formatCentToYuan(0)).toBe(0);
    expect(formatCentToYuan(100000, false)).toBe(1000);
    expect(formatCentToYuan(100000, false, 3)).toBe(1000.00);
    expect(formatCentToYuan(100000, true, 3)).toBe('1,000.000');
    expect(formatCentToYuan(null)).toBe('-');
    expect(formatCentToYuan(undefined)).toBe('-');
  });
});
