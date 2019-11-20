/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
// 暴力解法
function maxSubArray(nums) {
  let max = nums[0];
  let i = 0;
  let len = nums.length;

  while (i < len) {
    let cur = 0;
    let j = i;

    while (j < len) {
      cur += nums[j];
      if (cur > max) {
        max = cur;
      }
      j += 1;
    }
    i += 1;
  }

  return max;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr));

// 动态规划
function maxSubArray2(nums) {
  let maxSum = nums[0];
  let tempSum = nums[0];
  let i = 1;
  let len = nums.length;

  while (i < len) {
    // 如果 tempSum>0 则对结果有增益效果，继而求和，否则将 tempSum 值替换为当前值
    tempSum = tempSum > 0 ? tempSum + nums[i] : nums[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    i += 1;
  }

  return maxSum;
}

console.log(maxSubArray2(arr));
