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
 * @desc 暴力解法 (嵌套 for 循环)
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
          // 以起始元素为买入时间，当前元素为卖出时间，把所有可能的买卖组合都穷举一遍，比如1和5，3和6，计算总收益
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
