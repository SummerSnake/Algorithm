/**
 * 给定一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。
 * 要求将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。
 */

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

/**
 * @desc 双指针
 * @param { number[] } nums
 * @param { number } n
 * @return { number[] }
 */
const shuffleArray = (nums, n) => {
  const ret = [];

  for (let i = 0; i < n; i++) {
    ret.push(nums[i], nums[i + n]);
  }

  return ret;
};

console.log(shuffleArray(nums, n));

/**
 * @desc 循环截取
 * @param { number[] } nums
 * @param { number } n
 * @return { number[] }
 */
const shuffleArray2 = (nums, n) => {
  for (let i = 0; i < n; i++) {
    nums.splice(2 * i + 1, 0, nums[n + i]);
    nums.splice(n + 1 + i, 1);
  }

  return nums;
};

console.log(shuffleArray(nums, n));
