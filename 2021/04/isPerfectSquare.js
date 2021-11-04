/**
 * 有效的完全平方数 (力扣 367)
 *
 * 给定一个 正整数 num ，编写一个函数，
 * 如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 */

/**
 * @desc 库函数 Math.sqrt()
 * @param { number } num
 * @return { boolean }
 */
const isPerfectSquare = (num) => {
  const x = Math.floor(Math.sqrt(num));

  return x * x === num;
};

isPerfectSquare(16);

/**
 * @desc 暴力解法
 * @param { number } num
 * @return { boolean }
 */
const isPerfectSquare2 = (num) => {
  let x = 1;
  square = 1;

  while (square <= num) {
    if (square === num) {
      return true;
    }

    x++;
    square = x * x;
  }

  return false;
};

isPerfectSquare2(16);

/**
 * @desc 二分查找
 * @param { number } num
 * @return { boolean }
 */
const isPerfectSquare3 = (num) => {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;

    const square = mid * mid;
    if (square < num) {
      left = mid + 1;
    } else if (square > num) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};

isPerfectSquare3(16);
