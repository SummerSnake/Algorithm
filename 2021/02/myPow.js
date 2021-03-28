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

/**
 * @desc 快速幂
 *        1. 快速幂算法本质为分治算法；
 *        2. x => Pow(x, 2) => Pow(x, 4) => Pow(x, 8) => ... => Pow(x, 64)；
 *        3. 从 x 开始，每次直接把上一次的结果进行平方，计算 6 次就可以得到 Pow(x, 64)；
 * @param { number } x
 * @param { number } n
 * @return { number }
 */
const myPow2 = (x, n) => {
  let res = 1;

  for (let i = n; i !== 0; i /= 2) {
    i = n < 0 ? Math.ceil(i) : Math.floor(i);

    // 由于 i/2 在i为奇数时会造成损失，损失量刚好是上一次的x值，需要把这个值乘到res里面做弥补；
    // 同时最后一次 i/2 必然为1即奇数，所以最终得到的x和损失量相乘得到最终结果。
    if (i % 2 !== 0) {
      res *= x;
    }

    x *= x;
  }

  // 求x的n次幂，只要将x乘n次即可，求x的-n次幂，只要将1除以x n次即可。
  return n < 0 ? 1 / res : res;
};

myPow2(2.1, 3);
