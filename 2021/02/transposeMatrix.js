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

transpose(matrix);
