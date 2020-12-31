/**
 * 判定字符是否唯一
 * 实现一个算法，确定一个字符串的所有字符是否全都不同。
 */

const str = 'SummerSnake';

/**
 * @desc ES6 Map()
 * @param { string } str
 * @return { boolean }
 */
const isUnique = (str) => {
  const map = new Map();

  for (let item of str) {
    if (map.has(item)) {
      return false;
    } else {
      map.set(item, 1);
    }
  }

  return true;
};

console.log(isUnique(str));

/**
 * @desc ES6 Set()
 * @param { string } str
 * @return { boolean }
 */
const isUnique2 = (str) => new Set(str).size === str.length;

console.log(isUnique2(str));

/**
 * @desc 首尾双指针
 * @param { string } str
 * @return { boolean }
 */
const isUnique3 = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }

  return true;
};

console.log(isUnique3(str));

/**
 * @desc 排序对比相邻元素
 * @param { string } str
 * @return { boolean }
 */
const isUnique4 = (str) => {
  const arr = str.split('').sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  return true;
};

console.log(isUnique4(str));
