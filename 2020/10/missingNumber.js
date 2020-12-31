/**
 * 消失的数字
 * 数组nums包含从0到n的所有整数，但其中缺了一个。要求找出那个缺失的整数
 */

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

/**
 * @desc 排序循环对比
 * @param { number[] } nums
 * @return { number }
 */
const missingNumber = (nums) => {
  const arr = [...nums];
  arr.sort((a, b) => a - b);

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }
};

console.log(missingNumber(nums));

/**
 * @desc 等差数列求和
 *       原本有 n+1 个连续的数， 现在少了其中一个也就是只有n个；
 *       则不缺元素时的总和即为 数组中所有下标相加的和加上数组长度
 *       只要把不缺元素时的总和减去现有的总和得到的差值就是缺失的数。
 * @param { number[] } nums
 * @return { number }
 */
const missingNumber2 = (nums) => {
  let sum = nums.length; // 记录不缺元素时的总和(初始为数组长度)

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i]; // 减去现有的总和
    sum += i; // 逐次加上下标
  }

  return sum;
};

console.log(missingNumber2(nums));

/**
 * @desc 位运算
 *       对同一个值异或两次，那么结果等于它本身；
 *       对res从0-nums.length进行异或，同时对nums数组中的值进行异或，出现重复的会消失；
 *       最后res的值是只出现一次的数字，也就是nums数组中缺失的那个数字。
 * @param { number[] } nums
 * @return { number }
 */
const missingNumber3 = (nums) => {
  let res = 0;

  for (let i = 0; i < nums.length; ++i) {
    res ^= i;
    res ^= nums[i];
  }

  res ^= nums.length;

  return res;
};

console.log(missingNumber3(nums));
