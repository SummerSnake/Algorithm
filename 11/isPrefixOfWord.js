/**
 * 检查单词是否为句中其他单词的前缀
 *
 * 给定一个字符串 sentence 作为句子，并指定检索词为 searchWord ，其中句子由若干用 单个空格 分隔的单词组成。
 * 要求检查检索词 searchWord 是否为句子 sentence 中任意单词的前缀。
 *
 * 1. 如果 searchWord 是某一个单词的前缀，则返回句子 sentence 中该单词所对应的下标（下标从 1 开始）。
 * 2. 如果 searchWord 是多个单词的前缀，则返回匹配的第一个单词的下标（最小下标）。
 * 3. 如果 searchWord 不是任何单词的前缀，则返回 -1 。
 */

const sentence = 'i love eating burger';
const searchWord = 'burg';

/**
 * @desc 如果是字符前缀，indexOf 一定等于0
 *       "abc".indexOf("ab"); // 0
 *       "aab".indexOf("ab"); // 1
 * @param { string } sentence
 * @param { string } searchWord
 * @return { number }
 */
const isPrefixOfWord = (sentence, searchWord) => {
  // findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
  // 如果没有符合条件的元素返回 -1

  let index = sentence.split(' ').findIndex((item) => item.indexOf(searchWord) === 0);

  return index > -1 ? index + 1 : index;
};

console.log(isPrefixOfWord(sentence, searchWord));

/**
 * @desc 使用 ES6 的 startsWith
 *       此API返回一个布尔值，用于判断参数字符串是否在原字符串的头部，接受2个参数，可指定检索起点下标。
 *       'SummerSnake'.startsWith('Snake', 6); // true
 * @param { string } sentence
 * @param { string } searchWord
 * @return { number }
 */
const isPrefixOfWord2 = (sentence, searchWord) => {
  // findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
  // 如果没有符合条件的元素返回 -1

  let index = sentence.split(' ').findIndex((item) => item.indexOf(searchWord) === 0);

  return index > -1 ? index + 1 : index;
};

console.log(isPrefixOfWord2(sentence, searchWord));
