/**
 * @desc 和为零的N个唯一整数
 *       给定一个整数 n，要求返回任意一个由 n 个各不相同的整数组成的数组，并且这 n 个数相加和为 0。
 * 1、数组长度为 n, 1 <= n <= 1000;
 * 2、不能有重复的数字;
 * 3、所有数字相加和为0。
 */

/**
 * @desc 对称输出(一正一负，奇数中间填充 0)
 * @param { number } n 整数个数，数组长度
 * @return { number[] }
 */
const sumZero = (n) => {
  // Int16Array  ES2017 新增(代表二进制补码16位有符号整数形式的字节的数组, 初始化内容为 0)
  const arr = new Int16Array(n); // [0,0,0,0,0]

  for (let i = 1; i <= Math.floor(n / 2); i += 1) {
    arr[n - i] = i;
    arr[i - 1] = -i;
  }

  return arr;
};

console.log(sumZero(5));

/**
 * @desc n 的取值范围是 [1,1000]，全部加在一起求和是 500500，是一个安全的 int32 整数。
 *       直接添加 n - 1 个连续的数字，然后把它们求和的负数放进去即可。
 * @param { number } n 整数个数，数组长度
 * @return { number[] }
 */
const sumZero2 = (n) => {
  // Int32Array  ES2017 新增(代表二进制补码32位有符号整数形式的字节的数组, 初始化内容为 0)
  const arr = new Int32Array(n);

  for (let i = 1; i < n; i += 1) {
    arr[i] = i;
  }
  arr[0] = -(((1 + n) * n) / 2 - n);

  return arr;
};

console.log(sumZero2(5));

/**
 * @desc 数学规律
 * @param { number } n 整数个数，数组长度
 * @return { number[] }
 */
const sumZero3 = (n) => {
  // Int16Array  ES2017 新增(代表二进制补码16位有符号整数形式的字节的数组, 初始化内容为 0)
  const arr = new Int16Array(n);

  for (let i = 0; i < n; ++i) {
    arr[i] = i * 2 - n + 1;
  }

  return arr;
};

console.log(sumZero3(5));
