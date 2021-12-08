/**
 * 最长有效括号 (力扣 32)
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 */

const s = '())((())';

/**
 * @desc 栈
 * @param { string } s
 * @return { number }
 */
const longestValidParentheses = (s) => {
  let max = 0;
  // -1 占位，满足 始终保持栈底元素为当前已经遍历过的元素中「最后一个没有被匹配的右括号的下标」
  const stack = [-1];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 左括号下标入栈
    if (char === '(') {
      stack.push(i);
      continue;
    }

    // 当前为右括号，栈顶左括号出栈
    stack.pop();
    if (stack.length > 0) {
      // 计算长度，当前括号下标减去与之相匹配元素下标
      const len = i - stack[stack.length - 1];
      max = Math.max(max, len);
      continue;
    }

    // 始终保持栈底元素为当前已经遍历过的元素中「最后一个没有被匹配的右括号的下标」
    stack.push(i);
  }

  return max;
};

longestValidParentheses(s);
