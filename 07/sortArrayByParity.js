/**
 * 按奇偶排序数组
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 */
const A = [4, 2, 5, 7];

/**
 * @desc 两次遍历
 *       遍历一遍数组把所有的偶数放进 ans[0]，ans[2]，ans[4]，依次类推。
 *       再遍历一遍数组把所有的奇数依次放进 ans[1]，ans[3]，ans[5]，依次类推。\
 * @param { number[] } A
 * @return { number[] }
 */
const sortArrayByParity = (A) => {
  const ret = [];

  let index = 0;
  for (let item of A) {
    if (item % 2 === 0) {
      ret[index] = item;
      index += 2;
    }
  }

  index = 1;
  for (let item of A) {
    if (item % 2 === 1) {
      ret[index] = item;
      index += 2;
    }
  }

  return ret;
};

console.log(sortArrayByParity(A));
