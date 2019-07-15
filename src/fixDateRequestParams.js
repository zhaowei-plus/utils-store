import moment from 'moment';

/**
 * 时间区间格式化
 * 开始时间 YYYY-MM-DD 00:00:00
 * 结束时间 YYYY-MM-DD 23:59:59
 * @param {number} date - 时间戳
 * @param {boolean} isEnd - 是否是结束时间 eq:YYYY-MM-DD 23:59:59
 * @returns {string}
 * @example
 * fixDateRequestParams(1554790648037) === 2019-04-09 00:00:00
 * @example
 * fixDateRequestParams(1554790648037,true) === 2019-04-09 23:59:59
 */
export default function fixDateRequestParams(date, isEnd) {
  if (!date) {
    return '';
  }
  if (!isEnd) {
    return `${moment(date).format('YYYY-MM-DD')} 00:00:00`;
  } else {
    return `${moment(date).format('YYYY-MM-DD')} 23:59:59`;
  }
}

