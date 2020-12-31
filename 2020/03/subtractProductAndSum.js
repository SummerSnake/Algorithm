/**
 * @desc 整数的各位积和之差
 *
 * 给定一个整数 n，计算并返回该整数「各位数字之积」与「各位数字之和」的差。
 */

/**
 * 转字符串
 */
const subtractProductAndSum = n => {
  const str = n.toString();
  const len = str.length - 1;
  let add = 0;
  let multiple = 1;

  for (let i = len; i >= 0; i -= 1) {
    add += parseInt(str[i]);
    multiple *= str[i];
  }

  return multiple - add;
};

console.log(subtractProductAndSum(4421));

/**
 * 数字取模
 */
const subtractProductAndSum2 = n => {
  let add = 0;
  let multiple = 1;

  while (n > 0) {
    let tmp = n % 10;
    n = Math.floor(n / 10); // 小数向下取整为0
    add += tmp;
    multiple *= tmp;
  }

  return multiple - add;
};

console.log(subtractProductAndSum2(4421));
