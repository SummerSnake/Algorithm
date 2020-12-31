/**
 * 山脉数组的峰顶索引(山脉数组仅有一个峰顶，峰顶两边的值均小于峰顶值)
 * 即获取数组最大值的下标
 */

const A = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];

/**
 * @desc 库函数
 * @param { number[] } A
 * @return { number }
 */
const peakIndexInMountainArray = (A) => A.indexOf(Math.max(...A));

console.log(peakIndexInMountainArray(A));

/**
 * @desc 循环查找
 * @param { number[] } A
 * @return { number }
 */
const peakIndexInMountainArray2 = (A) => {
  for (let i = 0; i < A.length; i++) {
    // 峰顶值大于其右边元素
    if (A[i] > A[i + 1]) {
      return i;
    }
  }
};

console.log(peakIndexInMountainArray2(A));

/**
 * @desc 二分查找<1>
 *       1. 循环体内有3个分支；
 *       2. 在循环体中返回目标索引。
 * @param { number[] } A
 * @return { number }
 */
const peakIndexInMountainArray3 = (A) => {
  let left = 0;
  let mid = 0;
  let right = A.length;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) {
      return mid;
    } else if (A[mid] < A[mid - 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

console.log(peakIndexInMountainArray3(A));

/**
 * @desc 二分查找<2>
 *       1. 循环体内有2个分支；
 *       2. 在循环体外返回目标索引，在循环体内缩减搜索区间。
 * @param { number[] } A
 * @return { number }
 */
const peakIndexInMountainArray4 = (A) => {
  let left = 0;
  let mid = 0;
  let right = A.length;

  while (left < right) {
    mid = Math.floor(left + (right - left) / 2);

    if (A[mid] < A[mid + 1]) {
      // 缩减区间为[mid+1, right]
      left = mid + 1;
    } else {
      // 缩减区间为[left, mid]
      right = mid;
    }
  }

  return left;
};

console.log(peakIndexInMountainArray4(A));
