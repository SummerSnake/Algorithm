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
  for (let i = 0; i < s.length; i++) {
    if (col === numCols) {
      flag = false;
    }
    if (flag === false && col === 1) {
      flag = true;
    }

    vector[col - 1].push(s[i]);
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

const r = converStrToN(s, numCols);
console.log(r);
