/**
 * 无重复字符的最长子串
 *
 * 给定一个字符串，要求找出其中不含有重复字符的 最长子串 的长度。
 */

const str = 'pwwkew';

/**
 * @desc ES6 Map()
 * @param { string } str
 * @return { number }
 */
const lengthOfLongestSubstring = (str) => {
  const map = new Map();
  let max = 0;

  // 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标
  for (let i = 0, j = 0; j < str.length; j++) {
    if (map.has(str[j])) {
      // 更新无重复子串开始下标 i 为相同字符的下一位置
      // 取最大值为避免相邻两个元素重复的情况，此时取后一个元素，即i
      i = Math.max(map.get(str[j]) + 1, i);
    }

    // 更新 max，j-i+1 为当前无重复子串的长度
    max = Math.max(max, j - i + 1);

    // 将字符存储到 map 中，key 为字符，value 为下标
    map.set(str[j], j);
  }

  return max;
};

console.log(lengthOfLongestSubstring(str));

/**
 * @desc 滑动窗口
 * @param { string } str
 * @return { number }
 */
const lengthOfLongestSubstring2 = (str) => {
  let arr = []; //  使用一个数组来维护滑动窗口
  let max = 0;

  // 遍历字符串
  for (let i = 0; i < str.length; i++) {
    const index = arr.indexOf(str[i]);
    // 判断字符是否在滑动窗口数组里，在则删除滑动窗口数组里相同字符及相同字符前的字符
    if (index !== -1) {
      arr.splice(0, index + 1);
    }

    // 将当前字符 push 进数组
    arr.push(str.charAt(i));

    // 然后将 max 更新为当前最长子串的长度
    max = Math.max(arr.length, max);
  }

  return max;
};

console.log(lengthOfLongestSubstring2(str));
