/**
 * 一维数组的动态和
 * 给定一个数组 nums，返回一个新数组，数组中索引为i的元素，等于nums中索引小于等于i所有元素之和。
 */

const nums = [1, 2, 3, 4];

/**
 * @desc 循环求和
 * @param { number[] } nums
 * @return { number[] }
 */
const runningSum = (nums) => {
  let total = 0;
  let ret = [];

  for (let item of nums) {
    total += item;
    ret.push(total);
  }

  return ret;
};

console.log(runningSum(nums));

/**
 * @desc 动态规划
 * @param { number[] } nums
 * @return { number[] }
 */
const runningSum2 = (nums) => {
  let len = nums.length;
  let ret = new Int32Array(len);
  ret[0] = nums[0];
  let i = 1;

  // 每次求和赋值给相应位置，作为下一次循环当前元素之前所有元素之和
  while (i < len) {
    ret[i] = ret[i - 1] + nums[i];
    i++;
  }

  return ret;
};

console.log(runningSum2(nums));

/**
 * @desc ES6 reduce()
 * @param { number[] } nums
 * @return { number[] }
 */
const runningSum3 = (nums) => {
  nums.reduce((prev, curr, index) => {
    nums[index] = prev + curr;

    return nums[index];
  }, 0);

  return nums;
};

console.log(runningSum3(nums));
