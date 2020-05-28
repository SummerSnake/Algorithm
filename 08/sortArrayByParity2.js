/**
 * 按奇偶排序数组
 * 给定一个非负整数数组 A。
 * 返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
 */
const A = [4, 2, 5, 7];

/**
 * @desc 偶数添加至头部，奇数添加至尾部
 * @param { number[] } A
 * @return { number[] }
 */
const sortArrayByParity = (A) => {
  let ret = [];

  for (let item of A) {
    if (item % 2 === 0) {
      ret.unshift(item);
    } else {
      ret.push(item);
    }
  }

  return ret;
};

// console.log(sortArrayByParity(A));

/**
 * @desc 排序(取模运算后偶数为0，奇数为1。若返回值>=1，则表示a在排序后的序列中出现在 b 之后，反之...)
 * @param { number[] } A
 * @return { number[] }
 */
const sortArrayByParity2 = (A) => A.sort((a, b) => (a % 2) - (b % 2));

// console.log(sortArrayByParity2(A));

/**
 * @desc ES5 filter()
 * @param { number[] } A
 * @return { number[] }
 */
const sortArrayByParity3 = (A) => [
  ...A.filter((t) => t % 2 === 0),
  ...A.filter((t) => t % 2 === 1),
];

// console.log(sortArrayByParity3(A));

/**
 * @desc 双指针(头指针从前往后遍历，尾指针从后往前遍历)
 * @param { number[] } A
 * @return { number[] }
 */
const sortArrayByParity4 = (A) => {
  let i = 0;
  let j = A.length - 1;

  while (i < j) {
    // 头指针为奇数，尾指针为偶数，位置互换
    if (A[i] % 2 > A[j] % 2) {
      [A[i], A[j]] = [A[j], A[i]];
    }
    // 头指针为偶数，递增
    if (A[i] % 2 === 0) {
      i++;
    }
    // 尾指针为奇数，递减
    if (A[j] % 2 === 1) {
      j--;
    }
  }

  return A;
};

console.log(sortArrayByParity4(A));
