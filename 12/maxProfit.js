/**
 * 买卖股票的最佳时机
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算所能获取的最大利润。
 *
 * 注意：不能在买入股票前卖出股票。
 */

const prices = [7, 1, 5, 3, 6, 4];

/**
 * @desc 暴力解法 (嵌套 for 循环)
 * @param { number[] } prices
 * @return { number }
 */
const maxProfit = (prices) => {
  let max = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        max = Math.max(max, prices[j] - prices[i]);
      }
    }
  }

  return max;
};

console.log(maxProfit(prices));

/**
 * @desc 动态规划
 * @param { number[] } prices
 * @return { number }
 */
const maxProfit2 = (prices) => {
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;
  let i = 0;

  // 遍历数组，计算每次 到当天为止 的最小股票价格和最大利润
  while (i < prices.length) {
    // 如果当前元素小于 min，更新min的值，prices[i] - min = 0，所以直接 continue 跳出本次循环
    if (prices[i] < min) {
      min = prices[i];
      continue;
    }

    profit = Math.max(profit, prices[i] - min);
    i++;
  }

  return profit;
};

console.log(maxProfit2(prices));
