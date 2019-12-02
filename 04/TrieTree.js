/**
 * Trie Tree 单词查找树
 *
 * 典型应用是用于统计和排序大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。
 * 它的优点是：最大限度地减少无谓的字符串比较，查询效率比哈希表高。
 *
 *  trie是通过”边“来储存字符的一种树状结构，所谓边就是节点与节点间的连接。trie每条边只能存放一个字符。
 *
 * 1. 根节点不包含字符，除根节点外每一个节点都只包含一个字符。
 * 2. 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串。
 * 3. 每个节点的所有子节点包含的字符都不相同。
 */

/**
 * @desc 创建 Trie树 节点
 */
class TrieNode {
  constructor() {
    this.value = ''; // value 为单个字符
    this.numPass = 0; // 有多少个单词经过这节点
    this.numEnd = 0; // 有多少个单词在此结束
    this.edges = [];
    this.isEnd = false; // 是否是尾结点
  }
}

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
  static getIndex(c) { // 减少“0”的charCode
    switch (c) {
      case c < 58: // 48-57
        return c - 48;
      case c < 91: // 65-90
        return c - 65 + 11;
      default: // > 97
        return c - 97 + 26 + 11;
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
          node = (cur.edges[c] = new TrieNode());
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
   * @desc 在字典树中查找是否存在某字符串为前缀开头的字符串(包括前缀字符串本身)
   * @param { string } word 要查找的字符串
   * @return { boolean } 是否查询成功
   */
  isContainPrefix(word) {
    if (TrieTree.isValid(word)) {
      let cur = this.root;
      let c = null;

      for (let i = 0; i < word.length; i += 1) {
        c = word.charCodeAt(i);
        c = TrieTree.getIndex(c);

        if (cur.edges[c]) { // 如果树中存在当前字符，则将当前字符所在的边指向的节点设为当前元素，进行下一次循环
          cur = cur.edges[c];
        } else {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }

  /**
   * @desc 在字典树中查找是否存在某字符串(不为前缀，精确匹配)
   * @param { string } word 要查找的字符串
   * @return { boolean } 是否存在
   */
  isContainWord(word) {
    if (TrieTree.isValid(word)) {
      let cur = this.root;
      let c = null;

      for (let i = 0; i < word.length; i += 1) {
        c = word.charCodeAt(i);
        c = TrieTree.getIndex(c);

        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return false;
        }
      }

      return cur.isEnd;
    } else {
      return false;
    }
  }

  /**
   * @desc 统计以指定字符串为前缀的字符串数量
   * @param { string } word 要统计的字符串
   * @return { number } 统计数量
   */
  countPrefix(word) {
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

      return cur.numPass;
    } else {
      return 0;
    }
  }

  /**
   * @desc 统计某字符串出现的次数(不为前缀)
   * @param { string } word 要统计的字符串
   * @return { number } 统计数量
   */
  countWord(word) {
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

const TT = new TrieTree();
TT.insert('word');
TT.insert('Hello');
TT.insert('Haha');
TT.insert('Heha');
console.log(TT.isContainPrefix('Ha'));
console.log(TT.isContainWord('Hello'));
console.log(TT.countPrefix('He'));
console.log(TT.countWord('Hello'));
console.log(TT);
