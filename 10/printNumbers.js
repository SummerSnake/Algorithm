/**
 * 打印从1到最大的n位数
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。
 * 比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 */

/**
 * @desc 求出边界，循环赋值
 * @param { number } n
 * @return { number[] }
 */
const printNumbers = (n) => {
  // const len = '9'.repeat(n);
  const len = Math.pow(10, n) - 1;
  const ret = new Int32Array(len);

  for (let i = 1; i <= len; i++) {
    ret[i - 1] = i;
  }

  return ret;
};

console.log(printNumbers(2));

/**
 * @desc 快速幂：将指数转换成二进制形式
 *       1. 位运算 << 对于左移，直观的理解为，对于正数来说，左移相当于乘以2（但效率比乘法高）；
 *          对于负数来说，没有直观的理解。
 *       2. 位运算 >> 对于右移，直观的理解为，对于正数来说，右1移相当于除以2（但效率比除法高）；
 *          对于负数来说，没有直观的理解。
 * @param { number } n
 * @return { number[] }
 */
const printNumbers2 = (n) => {
  let base = 10;
  let sum = 1;
  let ret = [];

  while (n != 0) {
    // 如果当前二进制最后一位为1
    if ((n & 1) == 1) {
      sum *= base;
    }
    n >>= 1;
    base *= base;
  }

  let i = 1;
  while (i < sum) {
    ret.push(i++);
  }

  return ret;
};

console.log(printNumbers2(2));
