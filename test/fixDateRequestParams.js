import { fixDateRequestParams } from '../src/index';

describe('验证时间转换', () => {
  it('开始/结束时间', () => {
    expect(fixDateRequestParams(1546272000000)).toBe('2019-01-01 00:00:00');
    expect(fixDateRequestParams(1554790648037, true)).toBe('2019-04-09 23:59:59');
    expect(fixDateRequestParams(-1554790648037)).toBe('1920-09-25 00:00:00');
    expect(fixDateRequestParams(-1554790648037, true)).toBe('1920-09-25 23:59:59');
    expect(fixDateRequestParams(-1)).toBe('1970-01-01 00:00:00');
    expect(fixDateRequestParams(-1, true)).toBe('1970-01-01 23:59:59');
    expect(fixDateRequestParams(1)).toBe('1970-01-01 00:00:00');
    expect(fixDateRequestParams(1, true)).toBe('1970-01-01 23:59:59');
    expect(fixDateRequestParams(null)).toBe('');
    expect(fixDateRequestParams(null, true)).toBe('');
    expect(fixDateRequestParams(undefined)).toBe('');
    expect(fixDateRequestParams(undefined, true)).toBe('');
  });
});
