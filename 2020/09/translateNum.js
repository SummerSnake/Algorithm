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
 * @param { number } num
 * @return { number }
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

/**
 * @desc 动态规划
 * 1. 首先每单个数字一定能转换成字母，将个位数位置定义为i，则十位数位置为 i-1；
 * 2. 如果 i 处数字与 i-1 处数字能组成可转换成字母的数字，那么 i 处的组成方法就有两种；
 * 3. 如果 i 处数字与 i-1 处数字不能组成可转换成字母的数字，那么 i 处的组成方法只有一种；
 * 4. 如果 i-2 处数字为 0，那么 i-1 与 i 处的数字不能组成可转换成字母的数字，所以 +1 即可；
 * 5. 如果 i<=1，不存在 i-2，所以 +1 即可;
 * @param { number } num
 * @return { number }
 */
const translateNum2 = (num) => {
  let a = 1; // i 处组成方法
  let b = 1; // i-1 处组成方法
  let i = num % 10; // 当前数字 i
  let j = 0; // i+1 处数字

  while (num > 0) {
    num = Math.floor(num / 10); // 暴露出 i+1 处数字
    j = num % 10; // 取出 i+1 处数字
    const tmp = 10 * j + i; // i+1处数字 + i数字
    const x = tmp >= 10 && tmp <= 25 ? a + b : a;
    b = a;
    a = x; // 斐波那契数列，i-2 处等于 a+b 之和
    i = j; // 将 i 指针指向 i+1 处
  }

  return a;
};

console.log(translateNum2(num));
