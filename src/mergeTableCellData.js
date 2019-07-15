/**
 * 合并列表数据
 * 把相邻行，同一个字段相同的值，合并为一个单元格
 * 仅支持依据单个字段合并
 * @param {array} data 列表数据
 * @param  {string} field 合并依据的字段
 * @returns {array}
 * @example
 * const data = [
 *  {
 *    id: 1,
 *    exampleId: 1,
 *    example: '这是例子1',
 *  },{
 *    id: 2,
 *    exampleId: 1,
 *    example: '这是例子1',
 *  }
 * ]
 * mergeTableCellData(data, 'exampleId')
 *  ===
 *[
 *  {
 *    id: 1,
 *    exampleId: 1,
 *    example: '这是例子1',
 *    numkit: 2,
 *  },{
 *    id: 2,
 *    exampleId: 1,
 *    example: '这是例子1',
 *    numkit: 0,
 *  }
 * ]
 */
export default function mergeTableCellData(data = [], field) {
  if (!data || !data.length) {
    return [];
  }
  const repeatCounter = {};
  const marked = {};
  data.forEach((item) => {
    const itemField = item[field];
    repeatCounter[itemField] = repeatCounter[itemField] ? repeatCounter[itemField] += 1 : 1;
  });
  data.forEach((item) => {
    const itemField = item[field];
    if (repeatCounter[itemField] > 1) {
      item.numkit = marked[itemField] ? 0 : repeatCounter[itemField];
      marked[itemField] = true;
      return;
    }
    item.numkit = 1;
  });
  return data;
}
