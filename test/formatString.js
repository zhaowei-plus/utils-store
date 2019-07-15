import { formatString } from '../src/index';

describe('验证金额转换', () => {
  it('由分转换成元', () => {
    expect(formatString('这是字符串')).toBe('这是字符串');
    expect(formatString('')).toBe('-');
    expect(formatString(10)).toBe(10);
    expect(formatString(0)).toBe('-');
    expect(formatString({})).toEqual({});
    expect(formatString([])).toEqual([]);
    expect(formatString(null)).toBe('-');
    expect(formatString(undefined)).toBe('-');
  });
});
