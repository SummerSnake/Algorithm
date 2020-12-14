/**
 * 二维数组中的查找 (剑指 offer 04)
 *
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 要求完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 20;

/**
 * @desc 暴力解法
 * @param { number[] } matrix
 * @param { number } target
 * @return { number }
 */
const findNumInMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
      if (matrix[i].includes(target)) {
        return true;
      }
    }
  }

  return false;
};

console.log(findNumInMatrix(matrix, target));

/**
 * @desc 二分查找
 * @param { number[] } matrix
 * @param { number } target
 * @return { number }
 */
const findNumInMatrix2 = (matrix, target) => {
  if (matrix.length < 1) {
    return false;
  }

  const binarySearch = (arr, data) => {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (low <= high) {
      mid = low + ((high - low) >> 1);
      if (arr[mid] === data) {
        return true;
      }

      if (data < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return false;
  };

  for (let item of matrix) {
    if (target >= item[0]) {
      if (binarySearch(item, target)) {
        return true;
      }
    } else {
      // 双向递增，如果小于当前元素，则必然小于后边的元素，直接返回 false
      return false;
    }
  }

  return false;
};

console.log(findNumInMatrix2(matrix, target));

/**
 * @desc 二叉搜索树模拟
 *        1. 以矩阵右上角元素为起点，横轴为左子树，纵轴为右子树；
 *        2. 如果比当前元素大则往右边查找；
 *        3. 如果比当前元素小则往左边查找；
 * @param { number[] } matrix
 * @param { number } target
 * @return { number }
 */
const findNumInMatrix3 = (matrix, target) => {
  let i = 0;
  let j = matrix[0].length - 1;

  while (j >= 0 && i < matrix.length) {
    if (target === matrix[i][j]) {
      return true;
    }
    if (target < matrix[i][j]) {
      j--;
    }
    if (target > matrix[i][j]) {
      i++;
    }
  }

  return false;
};

console.log(findNumInMatrix3(matrix, target));

/**
 * @desc 数组扁平化，再查找 (flat() node.js 版本12以下不支持)
 * @param { number[] } matrix
 * @param { number } target
 * @return { number }
 */
const findNumInMatrix4 = (matrix, target) => matrix.flat(Infinity).includes(target);

console.log(findNumInMatrix4(matrix, target));
