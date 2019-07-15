import NP from 'number-precision';

/**
 * 把元转换为分
 * @param {*} num - 金额(元)
 * @returns {*} 金额(分)
 * @example
 * formatYuanToCent(100) === 10000
 */
export default function formatYuanToCent(num) {
  // 需要保留两位小数,并乘以100
  if (!num && num !== 0) {
    return '';
  }

  if (isNaN(num)) {
    return '';
  }

  num = NP.times(num, 100);
  num = NP.round(num, 0);
  return num;
}

