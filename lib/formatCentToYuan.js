import NP from 'number-precision';
import formatThousandsSeparator from './formatThousandsSeparator';

/**
 * 把分转换为元
 * 默认格式化为千分位格式
 * 保留两位小数
 * @param {number} num - 金额(分)
 * @param {boolean} thousandsSeparator -  是否需要格式化成千分位,默认为true
 * @param {number} fractionDigits  - 保留小数位数,默认为2
 * @returns {*} 金额(元)
 * @example
 * formatCentToYuan(100000) === 1,000.00
 */
export default function formatCentToYuan(num, thousandsSeparator = true, fractionDigits = 2) {
  if (!num && num !== 0) {
    return '-';
  }

  if (isNaN(num)) {
    return '-';
  }

  let yuan = NP.divide(num, 100);
  yuan = NP.round(yuan, fractionDigits);
  if (!thousandsSeparator) {
    return yuan;
  }

  return formatThousandsSeparator(yuan, fractionDigits);
}