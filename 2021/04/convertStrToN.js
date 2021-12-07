/**
 * N 字形变换 (力扣 6)
 *
 * 将一个给定字符串 s 根据给定的行数 numCols ，以从上往下、从左到右进行 N 字形排列。
 */

const s = 'PAYPALISHIRING';
const numCols = 4;

/**
 * @desc 矩阵存储，flag 转向
 * @param { string } s
 * @param { number } numCols 每列字符的个数
 * @return { string }
 */
const converStrToN = (s, numCols) => {
  if (numCols <= 1) {
    return s;
  }

  const vector = Array.from({ length: numCols }, () => []);

  let col = 1;
  let flag = true;
  for (let char of s) {
    if (col === numCols) {
      flag = false;
    }
    if (flag === false && col === 1) {
      flag = true;
    }

    vector[col - 1].push(char);
    col = col < numCols && flag ? (col += 1) : (col -= 1);
  }

  let res = '';
  for (let item of vector) {
    if (Array.isArray(item) && item.length > 0) {
      res = `${res}${item.join('')}`;
    }
  }

  return res;
};

converStrToN(s, numCols);

/**
 * @desc 字符串数组存储，flag 转向
 * @param { string } s
 * @param { number } numCols 每列字符的个数
 * @return { string }
 */
const converStrToN2 = (s, numCols) => {
  if (numCols <= 1) {
    return s;
  }

  const cols = Array.from({ length: numCols }, () => '');

  let col = 0;
  let flag = -1;
  for (let char of s) {
    cols[col] += char;

    if (col === 0 || col === numCols - 1) {
      flag = -flag;
    }

    col += flag;
  }

  let res = '';
  for (let item of cols) {
    res = `${res}${item}`;
  }

  return res;
};

converStrToN2(s, numCols);
