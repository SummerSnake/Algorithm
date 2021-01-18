/**
 * 搜索旋转排序数组 (力扣 33)
 *
 * 升序排列的整数数组 nums 在预先未知的某个点上进行了旋转；
 * 例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2]；
 * 要求在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1。
 */

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

/**
 * @desc 二分查找
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
const searchRotateArray = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 先根据 nums[mid] 与 nums[low] 的关系判断 mid 是在左段还是右段
    if (nums[low] <= nums[mid]) {
      // 再判断 target 是在 mid 的左边还是右边，从而调整左右边界 low 和 high
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

searchRotateArray(nums, target);

/**
 * @desc 递归
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
const searchRotateArray2 = (nums, target) => {
  let mid = 0;

  const recursion = (low, high) => {
    if (low > high) {
      return -1;
    }

    mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // 效率较低，将数组二分后，分别遍历两部分，最后整个数组所有元素都会遍历到；
    // Math.max() 如果数组中存在元素，则一边会获取到元素下标，另一边会返回 -1；
    return Math.max(recursion(low, mid - 1), recursion(mid + 1, high));
  };

  return recursion(0, nums.length - 1);
};

searchRotateArray2(nums, target);
