/**
 * 转置矩阵 (力扣 867)
 *
 * 给定一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 *
 * 示例：
 * 输入：matrix = [[1, 2, 3],[4, 5, 6]]
 * 输出：[[1, 4],[2, 5],[3, 6]]
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

/**
 * @desc 暴力解法
 * @param { number[][] } matrix
 * @return { number[][] }
 */
const transposeMatrix = (matrix) => {
  const len = matrix[0].length;
  const res = [];

  for (let i = 0; i < len; i++) {
    res[i] = [];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < len; j++) {
      res[j].push(matrix[i][j]);
    }
  }

  return res;
};

transposeMatrix(matrix);

/**
 * @desc 模拟
 *       1. 如果矩阵 matrix 为 m 行 n 列，则转置后的矩阵为 n 行 m 列；
 *       2. 原来矩阵中 matrix[i][j] 的位置，会交换到新矩阵的 res[j][i] 位置。
 * @param { number[][] } matrix
 * @return { number[][] }
 */
const transposeMatrix2 = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  const res = Array.from({ length: n }, () => []);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][i] = matrix[i][j];
    }
  }

  return res;
};

transposeMatrix2(matrix);
