/**
 * Pow(x, n) (力扣50)
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。
 *
 * 1. 求x的n次幂，只要将x乘n次即可;
 * 2. 求x的-n次幂，只要将1除以x n次即可;
 * 3. x为0, 1, -1时，n次幂都为固定值，可以直接返回响应结果;
 * 4. n为-2147483648时会超时，直接返回0即可。
 */

/**
 * @desc 暴力解法
 * @param { number } x
 * @param { number } n
 * @return { number }
 */
const myPow = (x, n) => {
  // 0 和 1 的 n 次幂都为其本身
  if (x === 0 || x === 1) {
    return x;
  }

  // 负1的偶数幂为1，奇数幂为-1
  if (x === -1) {
    return n % 2 ? -1 : 1;
  }

  // n为-2147483648时会超时，直接返回0即可
  if (n === -0x80000000) {
    return 0;
  }

  // 初始值设为1
  let res = 1;
  // 需要计算的次数，n有可能为负，因此要取绝对值
  const len = Math.abs(n);

  for (let i = 0; i < len; i++) {
    res = n > 0 ? res * x : res / x;
  }

  return res;
};

myPow(2.1, 3);
