/**
 * 找出数组中重复的数字
 *
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 要求找出数组中任意一个重复的数字。
 */

const nums = [2, 3, 1, 0, 2, 5, 3];

/**
 * @desc 排序对比相邻元素
 * @param { number[] } nums
 * @return { number }
 */
const findRepeatNumber = (nums) => {
  const arr = [...nums];
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
};

console.log(findRepeatNumber(nums));

/**
 * @desc ES6 Set()
 * @param { number[] } nums
 * @return { number }
 */
const findRepeatNumber2 = (nums) => {
  const arr = [...nums];
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    } else {
      set.add(arr[i]);
    }
  }
};

console.log(findRepeatNumber2(nums));

/**
 * @desc 原地哈希
 *       原地哈希就是占位置, 是0就占位置0, 是1243就占位置1243,
 *       要去占位置的时候发现位置被占了, 说明被冒充(即重复)
 * @param { number[] } nums
 * @return { number }
 */
const findRepeatNumber3 = (nums) => {
  const arr = [...nums];

  for (let i = 0; i < arr.length; i++) {
    // 检测下标为i的元素是否放在了位置i上
    while ((num = nums[i]) !== i) {
      if (num === nums[num]) {
        return num;
      }

      [nums[i], nums[num]] = [nums[num], nums[i]];
    }
  }
};

console.log(findRepeatNumber3(nums));
