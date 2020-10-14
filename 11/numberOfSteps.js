/**
 * 将数字变成 0 的操作次数
 *
 * 给定一个非负整数 num ，要求返回将它变成 0 所需要的步数。
 * 如果当前数字是偶数，则把它除以 2 ；否则，减去 1 。
 */

const num = 14;

/**
 * @desc 递归
 * @param { number } num
 * @return { number }
 */
const numberOfSteps = (num) => {
  if (!num) {
    return 0;
  }

  if (num % 2 > 0) {
    return 1 + numberOfSteps(num - 1);
  } else {
    return 1 + numberOfSteps(num / 2);
  }
};

console.log(numberOfSteps(num));

/**
 * @desc 循环
 * @param { number } num
 * @return { number }
 */
const numberOfSteps2 = (num) => {
  let ret = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }

    ret += 1;
  }

  return ret;
};

console.log(numberOfSteps2(num));

/**
 * @desc 位运算
 *       >> 位运算符：如果是偶数等于除于了2，如果是奇数则是除于了2又减去了1
 * @param { number } num
 * @return { number }
 */
const numberOfSteps3 = (num) => (num > 1 ? 1 + (num % 2) + numberOfSteps(num >> 1) : num);

console.log(numberOfSteps3(num));
