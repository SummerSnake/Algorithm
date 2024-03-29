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
 * @return { boolean }
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

/**
 * @desc 栈(简化)
 * @param { string } s
 * @return { boolean }
 */
const isValidBrackets2 = (s = '') => {
  const len = s.length;
  if (len % 2 !== 0) {
    return false;
  }

  const stack = [];
  for (let char of s) {
    if (char === '(') {
      stack.push(')');
    } else if (char === '[') {
      stack.push(']');
    } else if (char === '{') {
      stack.push('}');
    } else if (stack.length < 1 || char !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

isValidBrackets2(s);

/**
 * @desc 字符串替换
 * @param { string } s
 * @return { boolean }
 */
const isValidBrackets3 = (s = '') => {
  while (s.indexOf('()') > -1 || s.indexOf('[]') > -1 || s.indexOf('{}') > -1) {
    if (s.indexOf('()') > -1) {
      s = s.replace('()', '');
    }
    if (s.indexOf('[]') > -1) {
      s = s.replace('[]', '');
    }
    if (s.indexOf('{}') > -1) {
      s = s.replace('{}', '');
    }
  }

  return s.length === 0;
};

isValidBrackets3(s);
