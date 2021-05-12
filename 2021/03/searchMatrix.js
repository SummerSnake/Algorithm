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
