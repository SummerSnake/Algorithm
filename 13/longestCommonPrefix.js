/**
 * 最长公共前缀 (力扣 14)
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

const strs = ['flower', 'flow', 'flight'];

/**
 * @desc 横向扫描
 *        1. 依次遍历字符串数组中的每个字符串；
 *        2. 对于每个遍历到的字符串，更新最长公共前缀；
 *        3. 当遍历完所有的字符串以后，即可得到字符串数组中的最长公共前缀。
 * @param { string[] } strs
 * @return { string }
 */
const longestCommonPrefix = (strs) => {
  let res = strs[0] || '';

  for (let i = 1; i < strs.length; i++) {
    let prefixLen = 0;

    for (let j = 0; j < strs[0].length; j++) {
      if (strs[0][j] === strs[i][j]) {
        prefixLen++;
      } else {
        break;
      }
    }

    if (prefixLen < res.length) {
      res = strs[i].substring(0, prefixLen);
    }
  }

  return res;
};

console.log(longestCommonPrefix(strs));

/**
 * @desc 纵向扫描
 *        1. 以第一个字符串为基准，从前往后遍历剩余所有字符串的每一列，比较相同列上的字符是否相同；
 *        2. 如果相同则继续对下一列进行比较；
 *        3. 如果不相同则当前列不再属于公共前缀，当前列之前的部分为最长公共前缀。
 * @param { string[] } strs
 * @return { string }
 */
const longestCommonPrefix2 = (strs) => {
  let res = strs[0] || '';

  for (let i = 0; i < res.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      // i === strs[j].length 则第一个字符串即为最长公共前缀；
      // strs[j][i] !== baseStr[i] 则当前列之前的部分为最长公共前缀。
      if (i === strs[j].length || strs[j][i] !== res[i]) {
        return res.substring(0, i);
      }
    }
  }

  return res;
};

console.log(longestCommonPrefix2(strs));
