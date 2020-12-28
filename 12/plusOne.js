/**
 *  加一 (力扣66题)
 *
 * 给定一个由 整数 组成的 非空数组所表示的非负整数，将其在该数的基础上加一。
 * 数组[1, 2, 3]，用数字表示则为 123，即对数字 123 做加一操作。
 * 数组每位都是单个数字，所以只能是0-9的个位数；
 * 数组第一个数必非 0；
 * 像[9, 9]，就需要做进位运算，输出就是[1, 0, 0]。
 */

const digits = [9, 9];

/**
 * @desc 倒序遍历
 *        1. 小于9直接加；
 *        2. 等于9，将当前位置数字设为0，进位加一；
 *        3. 边界处理，首位不能为0。
 * @param { number[] } digits
 * @return { number[] }
 */
const plusOne = (digits) => {
  const arr = [...digits];
  let i = arr.length - 1;

  while (i >= 0) {
    if (arr[i] < 9) {
      arr[i] = arr[i] + 1;
      break;
    }

    arr[i] = 0;
    if (i === 0) {
      arr.unshift(1);
    }
    i--;
  }

  return arr;
};

console.log(plusOne(digits));
