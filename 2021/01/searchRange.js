/**
 * 在排序数组中查找元素的第一个和最后一个位置 (力扣 34)
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target；
 * 要求找出给定目标值在数组中的开始位置和结束位置；
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 */

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

/**
 * @desc 双指针
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
const searchRange = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] === target && nums[j] === target) {
      return [i, j];
    }

    if (nums[i] !== target) {
      i++;
    }

    if (nums[j] !== target) {
      j--;
    }
  }

  return [-1, -1];
};

searchRange(nums, target);
