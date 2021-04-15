/**
 * 打家劫舍 (力扣 198)
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。
 * 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 */

/**
 * @desc 动态规划(状态转移方程)
 * @param { number[] } nums
 * @return { number }
 */
const burlary = (nums) => {
  const len = nums.length;

  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return nums[0];
  }

  // dp[i][0]：区间 [0, i] 里偷窃，并且下标为 i 的这一天不偷窃到的最高金额
  // dp[i][1]：区间 [0, i] 里偷窃，并且下标为 i 的这一天偷窃到的最高金额
  const dp = Array.from(new Array(len), () => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = nums[0];

  for (let i = 1; i < len; i++) {
    // 今天不偷窃：昨天可能偷窃，也可能没有偷窃，取二者较大值
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    // 今天偷窃：只需要从昨天不偷窃转移而来，加上今天的金额
    dp[i][1] = dp[i - 1][0] + nums[i];
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};

burlary([2, 1, 1, 2]);

/**
 * @desc 动态规划(空间优化)
 * @param { number[] } nums
 * @return { number }
 */
const burlary2 = (nums) => {
  let prev = 0;
  let curr = 0;

  // 每次循环，计算“偷到当前房子为止的最大金额”
  for (let item of nums) {
    // dp[i] = Math.max(dp[i - 1], dp[i - 2] + num)
    let tmp = Math.max(curr, prev + item);
    prev = curr;
    curr = tmp;
  }

  return curr;
};

burlary2([2, 1, 1, 2]);
