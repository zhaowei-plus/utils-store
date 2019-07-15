/**
 * 数字格式化为千分位
 * @param {number} targetNumber -  金额
 * @param {number} fractionDigits -  保留小数位数
 * @returns {*}
 * @example
 * formatThousandsSeparator(1000) === 1,000
 * @example
 * formatThousandsSeparator(1000,2) === 1,000.00
 */
export default function formatThousandsSeparator(targetNumber, fractionDigits) {
  if (!targetNumber && targetNumber !== 0) {
    return '';
  }

  if (targetNumber === 0) {
    return 0;
  }

  let minus = false;
  /**
       * 兼容负数
       */
  if (targetNumber < 0) {
    minus = true;
    targetNumber = Math.abs(targetNumber);
  }
  fractionDigits = fractionDigits >= 0 && fractionDigits <= 20 ? fractionDigits : 2;
  /**
     * replace(/[^\d\.-]/g, '')
     * 匹配 除数字、逗号（,）、短横线（ - 负数符号）之外的字符串,替换成''
     * eq: 'a123'.replace(/[^\d\.-]/g, '') === 123
     * eq: 'a123bc'.replace(/[^\d\.-]/g, '0') === 012300
     * eq: 'a123-'.replace(/[^\d\.-]/g, '0') === 0123-
     */
  targetNumber = `${parseFloat((`${targetNumber}`).replace(/[^\d\.-]/g, '')).toFixed(fractionDigits)}`;
  const reversedSplitNumber = targetNumber.split('.')[0].split('').reverse();
  // 小数位
  const decimalPlace = targetNumber.split('.')[1];
  let reversedString = '';
  for (let i = 0; i < reversedSplitNumber.length; i += 1) {
    reversedString += reversedSplitNumber[i] + ((i + 1) % 3 === 0 && (i + 1) !== reversedSplitNumber.length ? ',' : '');
  }
  /**
       * 兼容负数和整数
       */
  return `${minus ? '-' : ''}${reversedString.split('').reverse().join('')}${decimalPlace ? `.${decimalPlace}` : ''}`;
}

