import { mergeTableCellData } from '../src/index';

describe('验证合并单元格', () => {
  it('根据某个字段合并单元格', () => {
    expect(mergeTableCellData([
      {
        id: 1,
        nameId: 1,
        name: '这是名称1',
      }, {
        id: 2,
        nameId: 1,
        name: '这是名称1',
      },
    ], 'nameId')).toEqual([
      {
        id: 1,
        nameId: 1,
        name: '这是名称1',
        numkit: 2,
      }, {
        id: 2,
        nameId: 1,
        name: '这是名称1',
        numkit: 0,
      },
    ]);
    expect(mergeTableCellData([
      {
        id: 1,
        nameId: 1,
        name: '这是名称1',
      }, {
        id: 2,
        nameId: 1,
        name: '这是名称1',
      }, {
        id: 3,
        nameId: 1,
        name: '这是名称1',
      },
    ], 'name')).toEqual([
      {
        id: 1,
        nameId: 1,
        name: '这是名称1',
        numkit: 3,
      }, {
        id: 2,
        nameId: 1,
        name: '这是名称1',
        numkit: 0,
      }, {
        id: 3,
        nameId: 1,
        name: '这是名称1',
        numkit: 0,
      },
    ]);
    expect(mergeTableCellData([
      {
        id: 1,
        nameId: 1,
        name: '这是名称1',
      }, {
        id: 2,
        nameId: 1,
        name: '这是名称1',
      },
    ], 'id')).toEqual([
      {
        id: 1,
        nameId: 1,
        name: '这是名称1',
        numkit: 1,
      }, {
        id: 2,
        nameId: 1,
        name: '这是名称1',
        numkit: 1,
      },
    ]);
    expect(mergeTableCellData([
      {
        id: 1,
        nameId: 1,
        name: '这是名称1',
      }, {
        id: 2,
        nameId: 1,
        name: '这是名称1',
      },
    ], 'value')).toEqual([
      {
        id: 1,
        nameId: 1,
        name: '这是名称1',
        numkit: 2,
      }, {
        id: 2,
        nameId: 1,
        name: '这是名称1',
        numkit: 0,
      },
    ]);
    expect(mergeTableCellData([], 'id')).toEqual([]);
    expect(mergeTableCellData({}, 'id')).toEqual([]);
    expect(mergeTableCellData(1, 'id')).toEqual([]);
    expect(mergeTableCellData(null, 'id')).toEqual([]);
    expect(mergeTableCellData(undefined, 'id')).toEqual([]);
  });
});
