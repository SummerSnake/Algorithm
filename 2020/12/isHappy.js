/**
 * 快乐数 (力扣 202)
 *
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，
 * 也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 *
 * 如果 n 是快乐数就返回 True ；不是，则返回 False 。
 *
 * 解题过程中，可能出现以下两种可能：
 *    1. 最终会得到 1。
 *    2. 最终会进入循环。
 */

const n = 19;

/**
 * @desc ES6 Set()
 * @param { number } n
 * @return { boolean }
 */
const isHappy = (n) => {
  const set = new Set();
  let sum = 0;

  while (n !== 1 && !set.has(n)) {
    set.add(n);
    sum = 0;

    while (n > 0) {
      const digit = n % 10;
      n = Math.floor(n / 10);
      sum += Math.pow(digit, 2);
    }

    n = sum;
  }

  return n === 1;
};

console.log(isHappy(n));

/**
 * @desc 快慢指针
 * @param { number } n
 * @return { boolean }
 */
const isHappy2 = (n) => {
  // 求平方和
  const squareSum = (num) => {
    let sum = 0;

    while (num > 0) {
      const digit = num % 10;
      num = Math.floor(num / 10);
      sum += Math.pow(digit, 2);
    }

    return sum;
  };

  // 慢指针指向 n，快指针指向 n 的平方和
  let slow = n;
  let fast = squareSum(n);
  // 慢指针走一步，快指针走两次，直到两指针相遇
  while (slow !== fast) {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
  }

  return slow === 1;
};

console.log(isHappy2(n));
