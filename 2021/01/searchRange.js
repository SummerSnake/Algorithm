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

/**
 * @desc 二分查找
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
const searchRange2 = (nums, target) => {
  // 查找第一个位置
  const firstIndex = () => {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while (left <= right) {
      mid = Math.floor(left + (right - left) / 2);

      // 找到相等的继续往左查找
      if (target === nums[mid]) {
        right = mid - 1;
      }
      if (target > nums[mid]) {
        left = mid + 1;
      }
      if (target < nums[mid]) {
        right = mid - 1;
      }
    }

    // 防止 left 越界 (查找不到 target 时，left = mid + 1)
    if (left <= nums.length && nums[left] === target) {
      return left;
    }

    return -1;
  };

  const firstIdx = firstIndex();
  // 查找不到 target，直接返回
  if (firstIdx === -1) {
    return [-1, -1];
  }

  // 查找第二个位置，以第一个位置为左边界，无需从0开始。
  const secondIndex = (firstIdx) => {
    let left = firstIdx;
    let right = nums.length - 1;
    let mid = 0;

    while (left <= right) {
      mid = Math.floor(left + (right - left) / 2);

      // 找到相等的继续往右查找
      if (target === nums[mid]) {
        left = mid + 1;
      }
      if (target > nums[mid]) {
        left = mid + 1;
      }
      if (target < nums[mid]) {
        right = mid - 1;
      }
    }

    return right;
  };

  return [firstIdx, secondIndex(firstIdx)];
};

searchRange2(nums, target);
