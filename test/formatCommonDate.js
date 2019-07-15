import { formatCommonDate } from '../src/index';

describe('验证转换日期', () => {
  it('时间戳转换字符串', () => {
    expect(formatCommonDate(1554790648037)).toBe('2019-04-09');
    expect(formatCommonDate(1554790648037, true)).toBe('2019-04-09 14:17:28');
    expect(formatCommonDate(1553330000000)).toBe('2019-03-23');
    expect(formatCommonDate(1552330000)).toBe('1970-01-19');
    expect(formatCommonDate(15523300000000, true)).toBe('2461-11-30 03:46:40');
    expect(formatCommonDate(-1, true)).toBe('1970-01-01 07:59:59');
    expect(formatCommonDate(1, true)).toBe('1970-01-01 08:00:00');
  });
});
