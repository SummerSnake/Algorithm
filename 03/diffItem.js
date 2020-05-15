/**
 * @desc 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。
 *       换言之，返回两个数组的差异。
 * @param { array } arr1 要比较的数组
 * @param { array } arr2 要比较的数组
 * @return { array } 包含所有独有元素的数组
 */
const diff = (arr1 = [], arr2 = []) => {
  let arr3 = [...arr1, ...arr2];

  return arr3.filter((item) => !arr1.includes(item) || !arr2.includes(item));
};

let arr1 = [1, 2, 3, 5, 6];
let arr2 = [1, 2, 3, 4, 5];
console.log(diff(arr1, arr2));

/**
 * @desc 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
 * @param { string } str 原始字符串
 * @param { string } nowWord 要替换的字符串
 * @param { string } newWord 替换指定字符串的新字符串
 * @return { string } 替换完成的新字符串
 */
const replaceWord = (str = '', nowWord = '', newWord = '') => {
  // 判断 nowWord 字符串首字母是否大写，若是，则将 newWord 字符串首字母也替换为大写；
  if (nowWord.charAt(0) < 'a') {
    let firstChar = newWord.charAt(0);

    newWord = newWord.replace(firstChar, firstChar.toUpperCase());
  }

  return str.replace(nowWord, newWord);
};

console.log(replaceWord('Let us go to the store.', 'store', 'mall'));
console.log(replaceWord('His name is Tom.', 'Tom', 'john'));

/**
 * @desc 已知如下数组：
 *       let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 *       编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 * @param { array } arr 要格式化的数组
 * @return { array } 格式化完成的数组
 */
const formatArr = (arr = []) => {
  if (Array.isArray(arr) && arr.length < 1) {
    return arr;
  }
  // flat() node.js 不支持
  // return Array.from(new Set(arr.flat(Infinity).sort((a, b) => a - b)));
  return Array.from(
    new Set(
      arr
        .join()
        .split(',')
        .map(Number)
        .sort((a, b) => a - b)
    )
  );
};

let initArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
console.log(formatArr(initArr));

/**
 * @desc 已知如下对象：
 *       let obj = {1:222, 2:123, 5:888}，
 *       请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]
 * @param { object } obj 要格式化的对象
 * @return { array } 格式化完成的数组
 */
const formatObj = (obj) => {
  if (!obj) {
    return null;
  }

  return Array.from({ length: 12 }).map((_, index) => obj[index + 1] || null);
};

let obj = { 1: 222, 2: 123, 5: 888 };
console.log(formatObj(obj));

/**
 * @desc 给定一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
 *       对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。
 *       允许有多个孩子同时拥有 最多 的糖果数目。
 * @param { number[] } candies
 * @param { number } extraCandies
 * @return { boolean[] }
 */
const kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);

  return candies.map((candie) => !(candie + extraCandies < max));
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
