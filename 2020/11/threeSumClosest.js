/**
 * 最接近的三数之和 (力扣16题)
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
 * 找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在唯一答案。
 */

const arr = [-1, 2, 1, -4];
const target = 1;

/**
 * @desc 排序 + 双指针 (时间复杂度：O(n2)，n 为数组长度)
 *       1. 首先对数组进行排序，排序后固定一个数 nums[i];
 *       2. 再使用左右指针指向 nums[i]后面的两端，数字分别为 nums[L] 和 nums[R];
 *       3. 计算三个数的和 sum， 判断 sum 与目标 target 的距离，如果更近则更新结果 ans;
 *       4. 同时判断 sum 与 target 的大小关系，因为数组有序：
 *            <1> 如果 sum > target 则 R--;
 *            <2> 如果 sum < target 则 L++;
 *            <3> 如果 sum === target 则说明距离为 0 直接返回结果。
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
const threeSumClosest = (nums, target) => {
  const len = nums.length;
  // 排序
  nums.sort((a, b) => a - b);

  let ans = nums[0] + nums[1] + nums[2];

  // 循环遍历数组
  for (let i = 0; i < len; i++) {
    let L = i + 1; // 左指针
    let R = len - 1; // 右指针

    while (L < R) {
      // 计算三数之和
      const sum = nums[i] + nums[L] + nums[R];

      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }

      if (sum > target) {
        R--;
      } else if (sum < target) {
        L++;
      } else {
        return ans;
      }
    }
  }

  return ans;
};

console.log(threeSumClosest(arr, target));

/**
 * @desc 暴力解法 (三层 for 循环)
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
const threeSumClosest2 = (nums, target) => {
  let ret;

  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2];
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (typeof ret === 'undefined' || Math.abs(target - sum) < Math.abs(target - ret)) {
          ret = sum;
        }
      }
    }
  }

  return ret;
};

console.log(threeSumClosest2(arr, target));
