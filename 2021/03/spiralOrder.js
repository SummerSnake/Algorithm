/**
 * 顺时针打印矩阵(力扣54)
 *
 * 给定一个 m 行 n 列的矩阵 matrix ，要求按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

/**
 * @desc 形状模拟
 *        1. 使用「左上角」(x1, y1) &&「右下角」(x2, y2) 来确定最外层「圈」；
 *        2. 令「左上角」&「右下角」往里收，得出第二圈；
 * @param { number[][] } matrix
 * @return { number[] }
 */
const spiralOrder = matrix => {
  const res = [];
  const m = matrix.length - 1;
  const n = matrix[0].length - 1;

  // 遍历 以 (x1, y1) 作为左上角，(x2, y2) 作为右下角形成的「圈」
  const circle = (x1, y1, x2, y2) => {
    if (x2 < x1 || y2 < y1) {
      return;
    }

    // 只有一行时，按行遍历
    if (x1 === x2) {
      for (let i = y1; i <= y2; i++) {
        res.push(matrix[x1][i]);
      }

      return;
    }

    // 只有一列时，按列遍历
    if (y1 === y2) {
      for (let i = x1; i <= x2; i++) {
        res.push(matrix[i][y2]);
      }

      return;
    }

    // 遍历当前圈
    for (let i = y1; i < y2; i++) {
      res.push(matrix[x1][i]);
    }
    for (let i = x1; i < x2; i++) {
      res.push(matrix[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      res.push(matrix[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      res.push(matrix[i][y1]);
    }

    // 往里收一圈，继续遍历
    circle(x1 + 1, y1 + 1, x2 - 1, y2 - 1);
  };

  circle(0, 0, m, n);

  return res;
};

spiralOrder(matrix);
