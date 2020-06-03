/**
 * 重复 N 次的元素
 * 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
 * 返回重复了 N 次的那个元素。
 *
 * 1. 如果某个元素重复出现 2 次即为所查找的元素
 */

const arr = [5, 1, 5, 2, 5, 3, 5, 4];

/**
 * @desc ES6 Map()
 * @param { number[] } A
 * @return { number }
 */
const repeatedNTimes = (A) => {
  const map = new Map();

  for (let item of A) {
    if (map.has(item)) {
      return item;
    } else {
      map.set(item);
    }
  }
};

console.log(repeatedNTimes(arr));

/**
 * @desc 有一个数重复 N 次，而且所有数的个数为2N，也就是说，要查找的这个数占了一半；
 *       那么 在所有长度为4的子序列中一定会出现连续的四个数，其中有两个数相等，也就是所要求的数。
 *       找出第一个存在重复元素的子序列;
 * @param { number[] } A
 * @return { number }
 */
const repeatedNTimes2 = (A) => {
  // 循环三次，重复元素的最近距离不会超过3
  for (let i = 1; i <= 3; i++) {
    // 循环数组，-i 减少非必要循环次数
    for (let j = 0; j < A.length - i; j++) {
      // 每次对两个距离为 i 的元素进行比较
      if (A[j] === A[j + i]) {
        return A[j];
      }
    }
  }
};

console.log(repeatedNTimes2(arr));
