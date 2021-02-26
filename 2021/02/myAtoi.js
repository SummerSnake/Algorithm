/**
 * 字符串转换整数 (atoi) (力扣 8)
 *
 * 实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
 */

/**
 * @desc 一次遍历 + 异常判断 + 边界防护
 * @param { string } s
 * @return { number }
 */
const myAtoi = (s) => {
  let i = 0;
  let curr; // "+"、"-"、数字

  while (i < s.length) {
    if (typeof curr === 'undefined') {
      // 未有符合的字符
      if (s[i] === ' ') {
        i++;
        continue;
      } else if (s[i] === '-' || s[i] === '+' || s[i] >= 0) {
        curr = s[i];
      } else {
        return 0;
      }
    } else if (s[i] >= 0) {
      // curr 已有值 且 当前字符为数字
      curr += s[i];

      if (curr < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
      }
      if (curr > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
      }
    } else {
      // curr 已有值 且 当前字符不为数字
      break;
    }

    i++;
  }

  return parseInt(curr) || 0;
};

myAtoi('   +0 123');

/**
 * @desc parseInt()
 * @param { string } s
 * @return { number }
 */
const myAtoi2 = (s) => {
  const num = parseInt(s, 10);
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  return isNaN(num) ? 0 : Math.max(Math.min(num, INT_MAX), INT_MIN);
};

myAtoi2('   -42');
