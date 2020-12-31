/**
 *  整数反转 (力扣7题)
 *
 * 给定一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 假设环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
 * 要求根据这个假设，如果反转后整数溢出那么就返回 0。
 */

const x = 1534236469;

/**
 * @desc 数学取余法
 *       溢出判断：
 *          <1> 当 ret > max / 10 || ret < -(max / 10)，且还有 digit 需要添加时，则一定溢出；
 *          <2> 当 ret === max / 10，还有 digit 需要添加，且 digit > 7 时，则一定溢出，7是 2^31 - 1 的个位数；
 *          <3> 当 ret === -(max / 10)，还有 digit 需要添加，且 digit < -8 时，则一定溢出，8是 -2^31 的个位数；
 * @param { number[] } height
 * @return { number }
 */
const reverseInt = (x) => {
  let num = x;
  const max = Math.pow(2, 31);
  let ret = 0;

  while (num !== 0) {
    // 正数向下取整，负数向上取整
    const digit = num > 0 ? Math.floor(num % 10) : Math.ceil(num % 10);

    // 溢出校验
    if (ret > max / 10 || (ret === max / 10 && digit > 7)) {
      return 0;
    }
    if (ret < -(max / 10) || (ret === -(max / 10) && digit < -8)) {
      return 0;
    }

    // 边界处理 (正数向下取整，负数向上取整)
    num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);

    // 计算结果
    ret = ret * 10 + digit;
  }

  return ret;
};

console.log(reverseInt(x));

/**
 * @desc 位运算
 *       1. ret * 10 + x % 10 取出末位 x % 10（负数结果还是负数，无需关心正负），拼接到 result 中；
 *       2. x / 10 去除末位，| 0 强制转换为32位有符号整数；
 *       3. 通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）；
 *       4. ret | 0 超过32位的整数转换结果不等于自身，可用作溢出判断。
 * @param { number[] } height
 * @return { number }
 */
const reverseInt2 = (x) => {
  let num = x;
  let ret = 0;

  while (num !== 0) {
    ret = ret * 10 + (num % 10);
    num = (num / 10) | 0;
  }

  return (ret | 0) === ret ? ret : 0;
};

console.log(reverseInt2(x));
