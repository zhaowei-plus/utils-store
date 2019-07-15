import moment from 'moment';

/**
 * 格式化时间
 * @param {number} date - 时间戳
 * @param fullDate - 是否需要完整时间包含时分秒  eq:YYYY-MM-DD HH:mm:ss
 * @returns {string}
 * @example
 * formatCommonDate(1554790648037) === 2019-04-09
 * @example
 * formatCommonDate(1554790648037,true) === 2019-04-09 14:17:28
 */
export default function formatCommonDate(date, fullDate) {
  if (!date) {
    return '-';
  }

  const formatType = fullDate ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';

  return moment(date).format(formatType);
}