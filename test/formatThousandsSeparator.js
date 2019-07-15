import { formatThousandsSeparator } from '../src/index';

describe('验证金额千分位', () => {
  it('金额转化为千位计数', () => {
    expect(formatThousandsSeparator(111111)).toBe('111,111.00');
    expect(formatThousandsSeparator(1000)).toBe('1,000.00');
    expect(formatThousandsSeparator(100, 2)).toBe('100.00');
    expect(formatThousandsSeparator(100, 3)).toBe('100.000');
    expect(formatThousandsSeparator(-1000)).toBe('-1,000.00');
    expect(formatThousandsSeparator(1000.1111)).toBe('1,000.11');
    expect(formatThousandsSeparator(0.123)).toBe('0.12');
    expect(formatThousandsSeparator(null)).toBe('');
    expect(formatThousandsSeparator(undefined)).toBe('');
  });
});
