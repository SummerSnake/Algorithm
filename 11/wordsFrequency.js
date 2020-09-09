/**
 * 设计一个方法，找出任意指定单词在一本书中的出现频率。
 *
 * 1. WordsFrequency(book)构造函数，参数为字符串数组构成的一本书；
 * 2. get(word)查询指定单词在书中出现的频率。
 */

const book = ['i', 'have', 'an', 'apple', 'he', 'have', 'a', 'pen'];

// -------------   ES6 Map() -------------

/**
 * @desc 构造函数
 * @param { string[] } book
 */
const WordsFrequency = function (book) {
  this.map = new Map();

  for (let word of book) {
    this.map.set(word, (this.map.get(word) || 0) + 1);
  }
};

/**
 * @desc ES6 Map()
 * @param { string } word
 * @return { number }
 */
WordsFrequency.prototype.get = function (word) {
  return this.map.get(word) || 0;
};

const obj = new WordsFrequency(book);
book.forEach((word) => console.log(obj.get(word)));

// -------------   TrieTree -------------

/**
 * @desc TireTree
 */

// 创建 Trie树 节点
class TrieNode {
  constructor() {
    this.value = ''; // value 为单个字符
    this.numPass = 0; // 有多少个单词经过这节点
    this.numEnd = 0; // 有多少个单词在此结束
    this.edges = [];
    this.isEnd = false; // 是否是尾结点
  }
}

// TrieTree
class TrieTree {
  constructor() {
    this.root = new TrieNode(); // 初始根节点
  }

  /**
   * @desc 验证是否是个单个字符
   *
   * ^代表开始位置，$代表结束位置，i代表不区分大小写
   */
  static isValid(str) {
    return /^[a-z1-9]+$/i.test(str);
  }

  /**
   * 在ASCII码表的定义中48～57为0到9十个阿拉伯数字、65～90为26个大写英文字母、97～122号为26个小写英文字母
   */
  static getIndex(c) {
    // 减少“0”的charCode
    switch (c) {
      case c < 58: // 48-57
        return c - 48;
      case c < 91: // 65-90
        return c - 65 + 11;
      default:
        return c - 97 + 26 + 11; // > 97
    }
  }

  /**
   * @desc 插入字符串
   * @param { string } word 要插入的字符串
   * @return { boolean } 是否插入成功
   *
   * 插入后形成的树是以唯一字符为头结点的单链表
   */
  insert(word) {
    if (TrieTree.isValid(word)) {
      let cur = this.root;
      let c = null;

      for (let i = 0; i < word.length; i++) {
        c = word.charCodeAt(i);
        c = TrieTree.getIndex(c);
        let node = cur.edges[c];

        if (node) {
          node.numPass++;
        } else {
          // 在当前节点的边数组下标c处新建节点，此操作将初始化edges数组，长度为c
          node = cur.edges[c] = new TrieNode();
          node.value = word.charAt(i);
          node.numPass = 1; // 有N个字符串经过它
        }

        cur = node;
      }

      cur.isEnd = true; // 循环结束，当前节点即为最后一个节点
      cur.numEnd++;

      return true;
    } else {
      return false;
    }
  }

  /**
   * @desc 统计某字符串出现的次数(不为前缀)
   * @param { string } word 要统计的字符串
   * @return { number } 统计数量
   */
  get(word) {
    if (TrieTree.isValid(word)) {
      let cur = this.root;
      let c = null;

      for (var i = 0; i < word.length; i++) {
        c = word.charCodeAt(i);
        c = TrieTree.getIndex(c);

        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return 0;
        }
      }
      return cur.numEnd;
    } else {
      return 0;
    }
  }
}

const tree = new TrieTree();
book.forEach((word) => tree.insert(word));
book.forEach((word) => console.log(tree.get(word)));
