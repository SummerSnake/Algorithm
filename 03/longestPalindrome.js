/**
 * 最长回文子串 (力扣 5)
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */

const s = 'babad';

/**
 * @desc 暴力解法
 * @param { string } s
 * @return { string }
 */
const longestPalindrome = (s) => {
  if (s.length < 2) {
    return s;
  }

  let res = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i >= res.length) {
          let str = s.substring(i, j + 1);

          if (str === str.split('').reverse().join('')) {
            res = str;
          }
        }
      }
    }
  }

  return res;
};

console.log(longestPalindrome(s));
