/**
 * 矩阵置零 (力扣 73)
 *
 * 给定一个 m x n 的矩阵；
 * 如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。
 */

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

/**
 * @desc 标记数组
 * @param { number[][] } matrix
 * @return { number[][] }
 */
const setZeroes = (matrix) => {
  const res = JSON.parse(JSON.stringify(matrix));
  const m = res.length;
  const n = res[0].length;

  // 存储 值为0元素 下标
  const indexArr = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (res[i][j] === 0) {
        indexArr.push([i, j]);
      }
    }
  }

  // 对 值为0 的元素所在行、列元素置 0
  for (let k = 0; k < indexArr.length; k++) {
    const [i, j] = indexArr[k];

    // 左
    let z = j - 1;
    while (z >= 0) {
      res[i][z] = 0;
      z--;
    }

    // 右
    z = j + 1;
    while (z < n) {
      res[i][z] = 0;
      z++;
    }

    // 上
    z = i - 1;
    while (z >= 0) {
      res[z][j] = 0;
      z--;
    }

    // 下
    z = i + 1;
    while (z < m) {
      res[z][j] = 0;
      z++;
    }
  }

  return res;
};

setZeroes(matrix);
