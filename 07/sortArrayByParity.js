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

// console.log(sortArrayByParity(A));

/**
 * @desc 双指针
 *       遍历数组，当发现偶数部分下标对应的值不是偶数时，不断增加指向奇数部分的指针，
 *       直到找到一个偶数，然后交换指针 i，j 所指的数。
 * @param { number[] } A
 * @return { number[] }
 */
const sortArrayByParity2 = (A) => {
  let j = 1;

  // 通过偶数下标来遍历
  for (let i = 0; i < A.length; i += 2) {
    // 如果为奇数，就用指针j找到一个奇数下标的值为偶数来交换
    if (A[i] % 2 === 1) {
      while (A[j] % 2 === 1) {
        j += 2;
        [A[i], A[j]] = [A[j], A[i]];
      }
    }
  }

  return A;
};
