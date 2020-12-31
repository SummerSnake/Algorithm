/**
 * 电话号码的字母组合 (力扣 17)
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射 json (与电话按键相同)。
 */

const digits = '78';
const json = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

/**
 * @desc DFS (深度优先搜索)
 * @param { string } digits
 * @return { string[] }
 */
const letterCombinations = (digits) => {
  if (!digits || !digits.length) {
    return [];
  }

  const res = [];
  const dfs = (currStr, i) => {
    if (i >= digits.length) {
      res.push(currStr);
      return;
    }

    letters = json[digits[i]];
    for (let item of letters) {
      dfs(currStr + item, i + 1);
    }
  };

  dfs('', 0);

  return res;
};

console.log(letterCombinations(digits));

/**
 * @desc BFS (广度优先搜索)
 * @param { string } digits
 * @return { string[] }
 */
const letterCombinations2 = (digits) => {
  if (!digits || !digits.length) {
    return [];
  }

  const queue = [''];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === '0' || digits[i] === '1') {
      continue;
    }

    const len = queue.length;

    for (let j = 0; j < len; j++) {
      const char = queue.shift();
      const letters = json[digits[i]];

      for (const item of letters) {
        queue.push(char + item);
      }
    }
  }

  return queue;
};

console.log(letterCombinations2(digits));
