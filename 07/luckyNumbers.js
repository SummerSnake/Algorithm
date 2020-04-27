/**
 * 矩阵中的幸运数
 *
 * 给定一个 m * n 的矩阵，矩阵中的数字各不相同。要求按任意顺序返回矩阵中的所有幸运数。
 *
 * 幸运数是指矩阵中满足同时下列两个条件的元素：
 * 1、在同一行的所有元素中最小；
 * 2、在同一列的所有元素中最大。
 */

/**
 * @desc 统计各行最小和各列最大
 * @param { number[][] } 矩阵
 * @return { number[] } 幸运数
 */
const luckyNumbers = (matrix) => {
  // 获取每行的最小值
  let mins = matrix.map((row) => Math.min(...row));
  // 获取每列的最大值
  let maxs = matrix[0].map((item, col_index) =>
    // 以 matrix[0] 当前 index 匹配其他子数组当前值
    Math.max(...matrix.map((row) => row[col_index]))
  );

  // 返回最大值数组与最小值数组中重合元素
  return maxs.filter((item) => mins.includes(item));
};

const matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];

console.log(luckyNumbers(matrix));
