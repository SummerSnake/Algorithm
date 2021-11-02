/**
 * 括号生成 (力扣 22)
 *
 * 数字 n 代表生成括号的对数，要求设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 */

/**
 * @desc 回溯
 * @param { number } n
 * @return { string[] }
 */
const generateParenthesis = (n) => {
  const res = [];

  // left, right 是左右括号所剩的数量，str 是当前构建的字符串
  const dfs = (left, right, str) => {
    if (str.length == 2 * n) {
      res.push(str); // 字符串构建完成，加入解集
      return; // 结束当前递归分支
    }

    // 只要左括号有剩，就可以选它
    if (left > 0) {
      dfs(left - 1, right, str + '(');
    }

    // 右括号比左括号剩的多，才能选右括号
    if (left < right) {
      dfs(left, right - 1, str + ')');
    }
  };

  dfs(n, n, ''); // 递归的入口，剩余数量都是n，初始字符串是空串
  return res;
};

generateParenthesis(3);

/**
 * @desc 广度优先遍历
 * @param { number } n
 * @return { string[] }
 */
const generateParenthesis2 = (n) => {
  const res = [];
  // val 为已生成的括号，left 为左括号的数量，right 为右括号的数量
  const queue = [{ val: '', left: n, right: n }];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();

      // 只要左括号有剩，就可以选它
      if (node.left > 0) {
        queue.push({ val: `${node.val}(`, left: node.left - 1, right: node.right });
      }

      // 右括号比左括号剩的多，才能选右括号
      if (node.left < node.right) {
        const newNode = { val: `${node.val})`, left: node.left, right: node.right - 1 };

        // 由于最后一个括号一定是右括号，如果当前右括号的数量已经到达 0
        // 代表括号已经生成完毕，直接将当前节点的值存入 res 即可
        if (newNode.right === 0) {
          res.push(newNode.val);
          continue;
        }

        queue.push(newNode);
      }
    }
  }

  return res;
};

generateParenthesis2(4);

/**
 * @desc 动态规划
 * @param { number } n
 * @return { string[] }
 */
const generateParenthesis3 = (n) => {
  // n === 1 时，只有一个结果 '()'
  const dp = [['()']];

  for (let i = 1; i < n; i++) {
    dp[i] = [];
    const prev = dp[i - 1];
    // 当前能生成的括号组合都是基于 i - 1 生成的结果
    for (let j = 0; j < prev.length; j++) {
      const v = prev[j];
      // 每个 i - 1 的结果都有三种组合方式（需去重处理）
      dp[i].push(...new Set([`(${v})`, `${v}()`, `()${v}`]));
    }
  }

  return dp[n - 1];
};

generateParenthesis3(4);
