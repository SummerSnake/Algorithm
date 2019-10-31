/**
 * @desc 从一个字符串中，寻找到目标子串出现的位置
 */
/**
 * @desc 朴素（暴力）算法
 * @param { string } origin 初始字符串
 * @param { string } target 要查找的字符串
 */
// 原始字符串指针回退
const _indexOf = (origin = '', target = '') => {
  const originLen = origin.length;
  const targetLen = target.length;

  if (originLen === 0 || targetLen === 0 || originLen < targetLen) { // 非空判断
    return -1;
  }

  if (origin === target) { // 相等直接返回 0
    return 0;
  }

  let i = 0;
  let j = 0;

  while (i < originLen && j < targetLen) {
    if (origin[i] === target[j]) { // 如果相同则一一比较
      i += 1;
      j += 1;
    } else { // 如果不同，i指向上次匹配第一个字符的下一位，j清零
      i = i - j + 1;
      j = 0;
    }
  }

  // 如果 j 等于要查找的字符串长度，说明字符串已全部匹配到， i - targetLen 返回所在位置
  if (j > targetLen - 1) {
    return i - targetLen;
  } else {
    return -1;
  }
};
