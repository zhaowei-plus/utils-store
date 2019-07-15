/**
 * 格式化字符串类型
 * @param {string} str
 * @return {*}
 * @example
 * formatString('example') === 'example'
 * @example
 * formatString('') === '-
*/
export default function formatString(str) {
  if (!str) {
    return '-';
  }
  return str;
}