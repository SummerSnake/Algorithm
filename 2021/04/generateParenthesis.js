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
