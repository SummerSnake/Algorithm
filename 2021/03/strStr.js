/**
 * 实现 strStr()  (力扣 28)
 *
 * 给定两个字符串 haystack 和 needle ；
 * 要求在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）；
 * 如果不存在，则返回  -1；
 * 当 needle 是空字符串时返回 0 ；
 */

const haystack = 'hello';
const needle = 'll';

/**
 * @desc 查找首字符，截取对比
 * @param { string } haystack
 * @param { string } needle
 * @return { number }
 */
const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }

  const len = needle.length;
  const firstChar = needle[0];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === firstChar) {
      const str = haystack.substring(i, i + len);

      if (str === needle) {
        return i;
      }
    }
  }

  return -1;
};

strStr(haystack, needle);

/**
 * @desc KMP 算法
 * @param { string } haystack
 * @param { string } needle
 * @return { number }
 */
const strStr2 = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }

  const n = haystack.length;
  const m = needle.length;
  const pi = new Int32Array(m); // 相等的真前后缀长度数组

  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (needle[i] === needle[j]) {
      j++;
    }
    pi[i] = j;
  }

  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (haystack[i] == needle[j]) {
      j++;
    }
    if (j === m) {
      return i - m + 1;
    }
  }

  return -1;
};

strStr2(haystack, needle);
