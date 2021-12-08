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

/**
 * @desc 滑动窗口
 * @param { string } s
 * @return { number }
 */
const longestValidParentheses2 = (s) => {
  // 向左右两边不断扩大滑动窗口
  const expand = (left, right) => {
    while (s[left - 1] === '(' && s[right + 1] === ')') {
      left--;
      right++;
    }

    return [left, right];
  };

  const map = new Map();
  let left = s.indexOf('()', 0); // 以第一个 '()' 为中心
  let right = 0;
  let max = 0;

  while (left > -1) {
    left = s.indexOf('()', right);
    right = left + 1;

    // 向左右两边不断扩大滑动窗口
    [left, right] = expand(left, right);

    // 当窗口扩大到最大时，如果当前窗口的左边界刚好挨着前一个窗口的右边界，
    // 则将这两个窗口合并，再以这个新合并的窗口为中心，向两侧扩大滑动窗口
    while (map.get(left - 1)) {
      [left, right] = expand(map.get(left - 1), right);
    }

    // 记录当前窗口的左右边界，key 是窗口右边界，value 是窗口左边界
    map.set(right, left);

    // 更新最大窗口
    max = Math.max(max, right - left + 1);
  }

  return max;
};

longestValidParentheses2(s);
