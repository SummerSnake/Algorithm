/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 */

/**
 * @desc 转字符串递归
 * @param { number } num
 * @return { number }
 */
const addDigits = (num) => {
  const str = num.toString();
  let ret = 0;

  for (let item of str) {
    ret += parseInt(item);
  }

  return ret.toString().length > 1 ? addDigits(ret) : ret;
};

console.log(addDigits(38));

/**
 * @desc 数学计算循环
 * @param { number } num
 * @return { number }
 */
const addDigits2 = (num) => {
  // 每次循环取最后两位数字
  while (Math.floor(num / 10)) {
    // num % 10 取个位数，Math.floor(num / 10)取十位数
    num = (num % 10) + Math.floor(num / 10);
  }

  return num;
};

console.log(addDigits2(38));

/**
 * @desc 转数组 ES6 reduce()
 * @param { number } num
 * @return { number }
 */
const addDigits3 = (num) => {
  while (num > 10) {
    num = num
      .toString()
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b));
  }

  return num;
};

console.log(addDigits3(38));

/**
 * @desc 数学 => 数根(不懂)
 * @param { number } num
 * @return { number }
 */
const addDigits4 = (num) => ((num - 1) % 9) + 1;

console.log(addDigits4(38));
