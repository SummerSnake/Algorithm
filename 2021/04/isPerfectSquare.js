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
