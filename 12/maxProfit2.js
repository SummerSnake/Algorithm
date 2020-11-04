/**
 * 买卖股票的最佳时机 II
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算所能获取的最大利润。可以尽可能地完成更多的交易（多次买卖一支股票）。
 *
 * 注意：不能同时参与多笔交易（必须在再次购买前出售掉之前的股票）
 *
 * 解题思路(股票买卖策略)：
 *     1. 单独交易日： 设今天价格 P1，明天价格 P2，则今天买入、明天卖出可赚取收益(P2 - P1)，负值代表亏损；
 *     2. 连续上涨交易日：设各交易日价格为 P1,P2,...,Pn，则第一天买入最后一天卖出收益最大，即 Pn-P1，等价于
 *        每天都买卖，即 Pn-P1 = (P2-P1) + (P3-P2) + ... + (Pn-Pn-1)；
 *     3. 连续下降交易日：股票不卖就等于不亏，不管怎么跌没卖就永远不亏。
 */

const prices = [7, 1, 5, 3, 6, 4];

/**
 * @desc 暴力解法 (枚举每一种买入和卖出的可能，最后得到最大值。)
 * @param { number[] } prices
 * @return { number }
 */
const maxProfit = (prices) => {
  /**
   * @desc 计算收益
   * @param { number } start 起始下标
   * @return { number }
   */
  const calc = (start) => {
    if (start >= prices.length) {
      return 0;
    }

    let max = 0;
    for (let i = start; i < prices.length; i++) {
      let maxProfit = 0;

      for (let j = i + 1; j < prices.length; j++) {
        // 起始元素小于当前元素
        if (prices[i] < prices[j]) {
          // 以起始元素为买入时间，当前元素为卖出时间，把所有可能的买卖组合都枚举一遍，比如1和5，3和6，计算总收益
          let profit = calc(j + 1) + prices[j] - prices[i];

          if (profit > maxProfit) {
            maxProfit = profit;
          }
        }
      }

      if (maxProfit > max) {
        max = maxProfit;
      }
    }

    return max;
  };

  return calc(0);
};

console.log(maxProfit(prices));

/**
 * @desc 动态规划 (矩阵)
 *        矩阵即二维数组，两个维度分别是 天数(0, 1, ..., n-1) 和 是否持有股票(0 表不持有，1 表持有)；
 *         1. 今天状态为未持有：
 *            <1> 昨天未持有股票，今天不做任何操作；
 *            <2> 昨天持有股票，今天卖出股票，获得利润；
 *            <3> 转移方程：dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])。
 *         2. 今天状态为持有：
 *            <1> 昨天持有股票，今天不做任何操作；
 *            <2> 昨天未持有股票，今天买入股票，支出现金；
 *            <3> 转移方程：dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])。
 *        边界状态：
 *          第 i 天的状态由第 i-1 天状态推导而来，当 i=0 时；
 *           <1> dp[0][0] = 0        # 第一天未持有股票，说明今天不做任何操作，获利为0；
 *           <2> dp[0][1] = -prices[0]   # 第一天持有股票，说明今天买入股票，支出现金。
 * @param { number[] } prices
 * @return { number }
 */
const maxProfit2 = (prices) => {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }

  // 0：持有现金  1：持有股票    状态转移：0 → 1 → 0 → 1 → 0
  // const dp = new Array(len).fill(new Array(2));
  // Array.from 可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组，
  // 传入的参数会覆盖第一个参数的值。
  const dp = Array.from(new Array(len), () => new Array(2));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[len - 1][0];
};

console.log(maxProfit2(prices));

/**
 * @desc 动态规划 (优化)
 *        由于当前行只参考上一行，每一行就 2 个值，因此可以考虑使用「滚动变量」(「滚动数组」技巧)。
 * @param { number[] } prices
 * @return { number }
 */
const maxProfit3 = (prices) => {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }

  // cash：持有现金  hold：持有股票    状态转移：cash → hold → cash → hold → cash
  let cash = 0;
  let hold = -prices[0];

  let preCash = cash;
  let preHold = hold;

  for (let i = 1; i < len; i++) {
    cash = Math.max(preCash, preHold + prices[i]);
    hold = Math.max(preHold, preCash - prices[i]);

    preCash = cash;
    preHold = hold;
  }

  return cash;
};

console.log(maxProfit3(prices));
