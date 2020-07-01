/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 */

const num = 1250156147;

/**
 * @desc 递归
 *
 *
 * 岔出两个分支：
 *     1. 如果当前数字串在 10 ~ 25 之间 ，说明可以直译。
 *        翻译 1 个数，指针 走一步，递归调用，返回剩余数字的翻译方法数；
 *        翻译 2 个数，指针 走两步，递归调用，返回剩余数字的翻译方法数；
 *        二者相加，就是当前数字串的翻译总方法数。
 *     2. 如果当前数字串不在 10 ~ 25 之间，说明无法直译。
 *        翻译 1 个数，指针 走一步，递归调用 ，返回剩余子串的翻译方法数。
 */
const translateNum = (num) => {
  if (num < 10) {
    return 1;
  }

  const tmp = num % 100;
  if (tmp >= 10 && tmp <= 25) {
    return translateNum(Math.floor(num / 10)) + translateNum(Math.floor(num / 100));
  }

  return translateNum(Math.floor(num / 10));
};

console.log(translateNum(num));
