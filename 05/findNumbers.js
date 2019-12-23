/**
 * @desc 给定一个整数数组 nums，返回其中位数为 偶数 的数字的个数。
 */

/**
 * 遍历 + 转字符串
 */
const findNumbers = nums => {
  if (nums.length < 1) {
    return 0;
  }
  const len = nums.length;
  let total = 0;

  for (let i = 0; i < len; i += 1) {
    if (nums[i].toString().length % 2 === 0) {
      total += 1;
    }
  }

  return total;
};

console.log(findNumbers([555, 901, 482, 1771]));

/**
 * 数字循环除10，统计等于0的时候除10的次数，偶数次则该数为偶数位。
 */
const findNumbers2 = nums => {
  if (nums.length < 1) {
    return 0;
  }
  const len = nums.length;
  let total = 0;

  for (let i = 0; i < len; i += 1) {
    let num = nums[i];
    let countTen = 0;

    while (num !== 0) {
      num = Math.floor(num / 10);
      countTen += 1;
    }
    //如果除10的次数是偶数次，则该数为偶数位数
    if (countTen % 2 === 0) {
      total += 1;
    }
  }

  return total;
};

console.log(findNumbers2([555, 901, 482, 1771]));
