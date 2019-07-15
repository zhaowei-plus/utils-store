import { matchRelevantValue } from '../src/index';

const arr = [
  {
    type: 1,
    name: '一',
  }, {
    type: 2,
    name: '二',
  }, {
    type: 3,
    name: '三',
  }, {
    type: 4,
    name: '四',
  }, {
    type: 5,
    name: '五',
  }, {
    type: 6,
    name: '六',
  },
];

const arr2 = [
  {
    label: 1,
    value: '一',
  }, {
    label: 2,
    value: '二',
  }, {
    label: 3,
    value: '三',
  }, {
    label: 4,
    value: '四',
  }, {
    label: 5,
    value: '五',
  }, {
    label: 6,
    value: '六',
  },
];

describe('验证获取type对应值', () => {
  it('获取type对应值', () => {
    expect(matchRelevantValue(1, arr)).toBe('一');
    expect(matchRelevantValue(0, arr)).toBe('-');
    expect(matchRelevantValue(-1)).toBe('-');
    expect(matchRelevantValue(3, arr2, 'label', 'value')).toBe('三');
    expect(matchRelevantValue(3)).toBe('-');
    expect(matchRelevantValue([])).toBe('-');
    expect(matchRelevantValue({})).toBe('-');
    expect(matchRelevantValue(null)).toBe('-');
    expect(matchRelevantValue(undefined)).toBe('-');
  });
});
