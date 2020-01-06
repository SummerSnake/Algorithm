/**
 * 分割平衡字符串
 *
 * 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的；
 * 给出一个平衡字符串 str，将它分割成尽可能多的平衡字符串；
 * 返回可以通过分割得到的平衡字符串的最大数量。
 */

/**
 * @desc 循环存储对比算法
 * @param { string } str 要分割的字符串
 * @return { number } 分割完成后的最大数量
 */
const balancedStringSplit = str => {
  let res = 0;
  let R = 0;
  let L = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === "R") {
      R += 1;
    }
    if (str.charAt(i) === "L") {
      L += 1;
    }
    if (R === L) {
      res += 1;
    }
  }

  return res;
};

console.log(balancedStringSplit("RLRRLLRLRL"));

/**
 * @desc 贪心算法
 * @param { string } str 要分割的字符串
 * @return { number } 分割完成后的最大数量
 */
const balancedStringSplit2 = str => {
  let num = 0;
  let res = 0;

  for (let i = 0; i < str.length; i += 1) {
    num = str.charAt(i) === "L" ? num + 1 : num - 1;

    if (num == 0) {
      res += 1;
    }
  }

  return res;
};

console.log(balancedStringSplit2("RLRRLLRLRL"));
