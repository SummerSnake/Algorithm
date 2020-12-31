/**
 * 搜索插入位置 (力扣 35)
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引；
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置；
 * 数组中无重复元素。
 */

const nums = [1, 3, 5, 6];
const target = 9;

/**
 * @desc 暴力解法
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }

  // 处理循环结束未匹配到 target 的情况
  return nums.length;
};

console.log(searchInsert(nums, target));

/**
 * @desc 二分查找
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
const searchInsert2 = (nums, target) => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (low <= high) {
    // >> 位运算右移 正数右移1位向下取整，负数右移1位向零取整，
    mid = low + ((high - low) >> 1);

    if (target === nums[mid]) {
      return mid;
    }

    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

console.log(searchInsert2(nums, target));
