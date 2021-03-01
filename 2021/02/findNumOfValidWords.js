/**
 * 猜字谜 (力扣 1178)
 *
 * 字谜的谜面 puzzle 按字符串形式给出，如果一个单词 word 符合下面两个条件，那么它就可以算作谜底：
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

const words = ['apple', 'pleas', 'please'];
const puzzles = ['aelwxyz', 'aelpxyz', 'aelpsxy', 'saelpxy', 'xaelpsy'];

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

/**
 * @desc TrieTree(字典树)
 * @param { string[] } words
 * @param { string[] } puzzles
 * @return { number[] }
 */
const findNumOfValidWords2 = (words, puzzles) => {
  /**
   * @desc TrieTree 节点 构造函数
   */
  function TrieNode() {
    this.frequency = 0;
    this.children = new Array(26);
  }

  /**
   * @desc TrieTree 添加节点 函数
   * @param { TrieNode } root
   * @param { string } word
   */
  function add(root, word = '') {
    let curr = root;

    for (let i = 0; i < word.length; i++) {
      const charIndex = word.charCodeAt(i) - 97;

      if (typeof curr.children[charIndex] === 'undefined') {
        curr.children[charIndex] = new TrieNode();
      }

      curr = curr.children[charIndex];
    }

    curr.frequency++;
  }

  /**
   * @desc 枚举 puzzle 的所有子集并统计答案
   * @param { string } puzzle
   * @param { string } initials 谜面 puzzle 的首字母
   * @param { TrieNode } curr
   * @param { number } pos 当前字母位置
   */
  function find(puzzle = '', initials = '', curr, pos = 0) {
    // 搜索到空节点，不合法，返回 0
    if (typeof curr === 'undefined') {
      return 0;
    }
    // 整个 puzzle 搜索完毕，返回谜底的数量
    if (pos === puzzle.length) {
      return curr.frequency;
    }

    // 选择第 pos 个字母
    let res = find(puzzle, initials, curr.children[puzzle.charCodeAt(pos) - 97], pos + 1);

    // 当 puzzle[pos] 不为首字母时，忽略此字母
    if (puzzle[pos] !== initials) {
      res += find(puzzle, initials, curr, pos + 1);
    }

    return res;
  }

  // 构造 TrieTree
  const root = new TrieNode();
  for (let word of words) {
    // 将 word 中的字母排序并去重
    const str = [...new Set([...word])].sort().join('');

    add(root, str);
  }

  // 遍历求解
  const ans = [];
  for (let puzzle of puzzles) {
    const initials = puzzle[0];
    // 将 puzzle 中的字母排序
    const str = [...puzzle].sort().join('');

    ans.push(find(str, initials, root, 0));
  }

  return ans;
};

findNumOfValidWords2(words, puzzles);
