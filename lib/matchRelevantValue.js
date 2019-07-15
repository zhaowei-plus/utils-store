/**
 * 获取type值对应的字符串
 * @param {number} type -  某状态/类型对应的type值
 * @param {array} typeConfig  -  所有状态/类型
 * @return {string}  -  该type值对应的状态/类型
 * @example
 * const data = [
 *  {
 *    type: 1
 *    name:'例子1'
 *  },{
 *    type: 2
 *    name:'例子2'
 *  },
 * ]
 * matchRelevantValue(1,data) === '例子1'
 */
export default function matchRelevantValue(type, typeConfig = []) {
  let value = '-';
  typeConfig.every(info => {
    if (info.type === type) {
      value = info.name;
      return false;
    }
    return true;
  });
  return value;
}