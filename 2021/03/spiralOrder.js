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

/**
 * @desc 方向模拟
 *        1. 按照顺时针方向遍历，寻找转向时机。
 * @param { number[][] } matrix
 * @return { number[] }
 */
const spiralOrder2 = matrix => {
  const res = [];
  const m = matrix.length;
  const n = matrix[0].length;

  // 定义四个方向
  const dirs = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0] // up
  ];

  for (let x = 0, y = 0, d = 0, i = 0; i < m * n; i++) {
    res.push(matrix[x][y]);
    // 101 代表已访问过
    matrix[x][y] = 101;

    // 下一步要到达的位置
    let nx = x + dirs[d][0];
    let ny = y + dirs[d][1];

    // 如果下一步发生「溢出」或者已经访问过（说明四个方向已经走过一次）
    if (nx < 0 || nx >= m || ny < 0 || ny >= n || matrix[nx][ny] === 101) {
      d = (d + 1) % 4; // d 小于 4 则为它本身

      nx = x + dirs[d][0];
      ny = y + dirs[d][1];
    }

    x = nx;
    y = ny;
  }

  return res;
};

spiralOrder2(matrix);
