/**
 * 电话号码的字母组合 (力扣 17)
 *
 * 给定一个仅包含数字的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射 json (与电话按键相同)。
 */

const digits = '10086';
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
 * @desc BFS (广度优先搜索)
 * @param { string } digits
 * @return { string[] }
 */
const letterCombinations = (digits) => {
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
      const str = json[digits[i]];

      for (const item of str) {
        queue.push(char + item);
      }
    }
  }

  return queue;
};

console.log(letterCombinations(digits));
