/**
 * 至少有K个重复字符的最长子串 (力扣 395)
 *
 * 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。
 */

const s = 'ababbc';
const k = 2;

/**
 * @desc 暴力解法
 * @param { string } s
 * @param { number } k
 * @return { number }
 */
const longestSubstring = (s, k) => {
  if (!s || s.length < k) {
    return 0;
  }

  const len = s.length;
  let res = 0;

  // 1. 枚举所有的子串;
  for (let i = 0; i < len; i++) {
    const record = new Int16Array(26);

    for (let j = i; j < len; j++) {
      // 'a' 字符的 charCode 为 97
      record[s[j].charCodeAt() - 97]++;

      // 2. 检验子串是否有效(检验的条件：子串中每个字符出现的个数是否都大于k)
      let numUnique = 0; // 不同字符数
      let numUniqueLeastK = 0; // 大于等于k的字符数
      for (let item of record) {
        if (item > 0) {
          numUnique++;
        }
        if (item >= k) {
          numUniqueLeastK++;
        }
      }

      if (numUnique === numUniqueLeastK) {
        res = Math.max(res, j - i + 1);
      }
    }
  }

  return res;
};

longestSubstring(s, k);

/**
 * @desc 分治算法
 * @param { string } s
 * @param { number } k
 * @return { number }
 */
const longestSubstring2 = (s, k) => {
  const len = s.length;
  const map = new Map();
  let max = 0;

  // 1. 统计字符出现的次数
  for (let i = 0; i < len; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }

  // 2. 找出次数小于 k 的字符
  const dontFit = [];
  for (let [key, value] of map.entries()) {
    if (value < k) {
      dontFit.push(key);
    }
  }

  // 3. 如果不存在次数小于 k 的字符，说明字符串满足条件，直接返回
  if (dontFit.length === 0) {
    return len;
  }

  let i = 0;
  let j = 0;
  while (i < len) {
    // 4. 以不符合条件的字符为分界线，将字符串分割为两段，继续递归
    if (dontFit.includes(s[i])) {
      max = Math.max(max, longestSubstring(s.slice(j, i), k));
      j = i + 1;
    }

    i++;
  }

  // 5. 边界处理，返回结果
  return Math.max(max, longestSubstring(s.slice(j), k));
};

longestSubstring2(s, k);
