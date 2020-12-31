/**
 * 上升下降字符串
 *
 * 给定一个字符串 s ，根据下面的算法重新构造字符串：
 * 1. 从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
 * 2. 从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
 * 3. 重复步骤 2 ，直到你没法从 s 中选择字符。
 * 4. 从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
 * 5. 从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
 * 6. 重复步骤 5 ，直到你没法从 s 中选择字符。
 * 7. 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。
 * 在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。
 * 要求返回将 s 中字符重新排序后的 结果字符串 。
 */

/**
 * @desc 字符顺序正反遍历
 * @param { string } s
 * @return { string }
 */
const sortString = (s) => {
  let ret = '';
  let arr = s.split('');

  while (arr.length > 0) {
    arr.sort().reverse();
    ret += arr.pop();

    // 步骤 1-3
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] > ret[ret.length - 1]) {
        ret += arr[i];
        arr.splice(arr.lastIndexOf(arr[i]), 1);
      }
    }

    // 步骤 4-6
    if (arr.length > 0) {
      arr.reverse();
      ret += arr.pop();

      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < ret[ret.length - 1]) {
          ret += arr[i];
          arr.splice(arr.lastIndexOf(arr[i]), 1);
        }
      }
    }
  }

  return ret;
};

console.log(sortString('summersnake'));

/**
 * @desc 桶计数
 * @param { string } s
 * @return { string }
 */
const sortString2 = (s) => {
  let ret = '';
  let total = s.length;
  const bucket = new Int16Array(26); // 创建存储26个小写字母的桶

  // 小写字母 ASCII码 为 97~122
  for (const char of s) {
    // 统计每个字母出现的次数
    bucket[char.charCodeAt(0) - 97]++;
  }

  while (total) {
    // 正序取最小
    for (let i = 0; i < 26; i++) {
      if (bucket[i]) {
        // fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
        ret += String.fromCharCode(i + 97);
        total--;
        bucket[i]--;
      }
    }

    // 倒序取最大
    for (let i = 25; i >= 0; i--) {
      if (bucket[i]) {
        ret += String.fromCharCode(i + 97);
        total--;
        bucket[i]--;
      }
    }
  }

  return ret;
};

console.log(sortString2('summersnake'));
