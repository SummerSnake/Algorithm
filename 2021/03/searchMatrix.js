/**
 * 搜索二维矩阵(力扣74)
 *
 * 给定一个 m 行 n 列的矩阵 matrix ，判断矩阵中是否存在一个目标值 target。
 *  1. 每行中的整数从左到右按升序排列；
 *  2. 每行的第一个整数大于前一行的最后一个整数。
 */

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;

/**
 * @desc 寻找 target 所在行
 *         时间复杂度：O(m + n)
 *         空间复杂度：O(1)
 * @param { number[][] } matrix
 * @return { number[] }
 */
const searchMatrix = (matrix, target) => {
  const m = matrix.length - 1;
  let y = 0; // 行索引

  // y < m 防止索引超出矩阵长度；
  // target >= matrix[y + 1][0]，target 大于等下一行首个元素，说明 target 可能在下一行或后边的行；
  // 否则 target 则可能在当前行。
  while (y < m && target >= matrix[y + 1][0]) {
    y++;
  }

  return matrix[y].includes(target);
};

searchMatrix(matrix, target);

/**
 * @desc 二分查找
 *         时间复杂度：O(logm + logn)
 *         空间复杂度：O(1)
 * @param { number[][] } matrix
 * @return { number[] }
 */
const searchMatrix2 = (matrix, target) => {
  let left = 0;
  let mid = 0;
  let right = matrix.length - 1;

  // target 比矩阵首元素小，直接返回 false
  if (target < matrix[0][0]) {
    return false;
  }

  // 1. 首次二分查找行，如果 target 比当前行的首个元素大，则必然不存在于当前行；
  //    则循环结束 right 所在行即为 target 可能在的行。
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (target === matrix[mid][0]) {
      return true;
    }
    if (target > matrix[mid][0]) {
      left = mid + 1;
    }
    if (target < matrix[mid][0]) {
      right = mid - 1;
    }
  }

  // 比当前行首元素小，直接返回 false
  if (target < matrix[right][0]) {
    return false;
  }

  // 2. 第二次二分查找元素
  left = 1;
  row = matrix[right];
  right = row.length - 1;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (target === row[mid]) {
      return true;
    }
    if (target > row[mid]) {
      left = mid + 1;
    }
    if (target < row[mid]) {
      right = mid - 1;
    }
  }

  return false;
};

searchMatrix2(matrix, target);
