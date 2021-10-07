/**
 * 字符串中的单词数 (力扣 434)
 *
 * 对于「单词」的定义为「连续的不是空格的字符」。
 */

const str = 'Hello, my name is John';

/**
 * @desc 模拟
 *
 * 计算字符串中单词的数量，就等同于计数单词的第一个下标的个数。
 * 因此，我们只需要遍历整个字符串，统计每个单词的第一个下标的数目即可。
 *
 * 满足单词的第一个下标有以下两个条件：
 *    1. 该下标对应的字符不为空格；
 *    2. 该下标为初始下标或者该下标的前下标对应的字符为空格。
 *
 * @param { string } s
 * @return { number }
 */
const countSegments = (s) => {
  let segmentCount = 0;

  for (let i = 0; i < s.length; i++) {
    if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
      segmentCount++;
    }
  }

  return segmentCount;
};

countSegments(str);

/**
 * @desc split()
 * @param { string } s
 * @return { number }
 */
const countSegments2 = (s) => s.trim().split(' ').length;

countSegments2(str);
