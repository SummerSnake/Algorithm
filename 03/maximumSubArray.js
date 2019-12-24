/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
// 暴力解法
function maxSubArray(nums) {
  const len = nums.length;
  let max = nums[0];
  let i = 0;

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

// 动态规划 -- 求解决策过程最优化的数学方法
function maxSubArray2(nums) {
  const len = nums.length;
  let max = nums[0];
  let temp = nums[0];
  let i = 1;

  while (i < len) {
    // 如果 tempSum>0 则对结果有增益效果，继而求和，否则将 tempSum 值替换为当前值
    temp = temp > 0 ? temp + nums[i] : nums[i];
    if (temp > max) {
      max = temp;
    }
    i += 1;
  }

  return max;
}

console.log(maxSubArray2(arr));

/**
 * 贪心算法
 *
 * 贪心算法（又称贪婪算法）是指，在对问题求解时，总是做出在当前看来是最好的选择。
 * 也就是说，不从整体最优上加以考虑，他所做出的是在某种意义上的局部最优解。
 */
function maxSubArray3(nums) {
  const len = nums.length;
  let max = nums[0];
  let temp = nums[0];
  let i = 1;

  while (i < len) {
    temp = Math.max(temp + nums[i], nums[i]);
    max = Math.max(max, temp);
    i += 1;
  }

  return max;
}

console.log(maxSubArray3(arr));
