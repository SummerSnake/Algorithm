/**
 * 猜字谜 (力扣 1178)
 *
 * 字谜的迷面 puzzle 按字符串形式给出，如果一个单词 word 符合下面两个条件，那么它就可以算作谜底：
 * 1. 单词 word 中包含谜面 puzzle 的第一个字母；
 * 2. 单词 word 中的每一个字母都可以在谜面 puzzle 中找到。
 *
 * 示例：
 *
 * 输入：
 * words = ["aaaa","asas","able","ability","actt","actor","access"],
 * puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
 *
 * 输出：[1, 1, 3, 2, 4, 0]
 *
 * 解释：
 * 1 个单词可以作为 "aboveyz" 的谜底 : "aaaa"
 * 1 个单词可以作为 "abrodyz" 的谜底 : "aaaa"
 * 3 个单词可以作为 "abslute" 的谜底 : "aaaa", "asas", "able"
 * 2 个单词可以作为 "absoryz" 的谜底 : "aaaa", "asas"
 * 4 个单词可以作为 "actresz" 的谜底 : "aaaa", "asas", "actt", "access"
 * 0 没有单词可以作为 "gaswxyz" 的谜底，因为列表中的单词都不含字母 'g'。
 */

const words = ['aaaa', 'asas', 'able', 'ability', 'actt', 'actor', 'access'];
const puzzles = ['aboveyz', 'abrodyz', 'abslute', 'absoryz', 'actresz', 'gaswxyz'];

/**
 * @desc 暴力解法
 * @param { string[] } words
 * @param { string[] } puzzles
 * @return { number[] }
 */
const findNumOfValidWords = (words, puzzles) => {
  const res = new Int32Array(puzzles.length);

  const check = (puzzle = '', word = '') => {
    for (let i = 0; i < word.length; i++) {
      if (puzzle.indexOf(word[i]) < 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < puzzles.length; i++) {
    const char = puzzles[i][0];

    for (let j = 0; j < words.length; j++) {
      if (words[j].indexOf(char) > -1) {
        if (check(puzzles[i], words[j])) {
          res[i]++;
        }
      }
    }
  }

  return res;
};

findNumOfValidWords(words, puzzles);
