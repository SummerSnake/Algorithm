/**
 * 有效的括号 (力扣 20)
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *     1. 左括号必须用相同类型的右括号闭合;
 *     2. 左括号必须以正确的顺序闭合。
 */
const s = '{[]}';

/**
 * @desc 栈
 * @param { string } s
 */
const isValidBrackets = (s = '') => {
  const len = s.length;
  if (len % 2 !== 0) {
    return false;
  }

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  const stack = [];
  for (let char of s) {
    if (pairs.has(char)) {
      const right = stack.pop();

      if (right !== pairs.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

isValidBrackets(s);
