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

// console.log(longestPalindrome(s));

/**
 * @desc 动态规划
 * @param { string } s
 * @return { string }
 */
const longestPalindrome2 = (s) => {
  if (s.length < 2) {
    return s;
  }

  let res = '';
  let len = s.length;
  let dp = Array.from(new Array(len), () => new Array(len).fill(0));
  // 从字符串结尾向前遍历
  for (let i = len - 1; i >= 0; i--) {
    // 从字符串 i 后边开始依次向后查找
    for (let j = i; j < len; j++) {
      // dp[i][j]代表从 i => j 的子字符串；
      // s[i] === s[j]：说明当前中心可以继续扩张，进而有可能扩大回文串的长度；
      // j - i < 3：在 s[i] === s[j] 成立和 j - i < 3 的前提下，直接可以下结论，dp[i][j] = true；
      // dp[i + 1][j - 1]：[i + 1]、[j - 1]分别代表子字符串的首、尾，dp[i + 1][j - 1]即从中心扩张出来的回文串。
      dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);

      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }

  return res;
};

console.log(longestPalindrome2(s));
