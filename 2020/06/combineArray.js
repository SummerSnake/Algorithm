/**
 * 已知以下两个数组
 * const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
 * const arr2 = ['A', 'B', 'C', 'D']
 * 将数组合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
 */

const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];

/**
 * @desc 正则校验法
 * @param { array } arr1 要合并的数组
 * @param { array } arr2 要合并的数组
 * @return { array } 合并完成的数组
 */
const combineArr = (arr1 = [], arr2 = []) => {
  const arr = [...arr1];
  let currIndex = 0;

  for (let i = 0; i < arr2.length; i += 1) {
    // 遍历arr2，将arr2当前元素设为正则表达式规则
    const pattern = RegExp(arr2[i]);

    while (currIndex < arr.length) {
      // 遍历arr1，校验arr1当前元素是否匹配正则规则，按照题目要求，从下标1处开始校验
      currIndex += 1;

      if (!pattern.test(arr[currIndex])) {
        arr.splice(currIndex, 0, arr2[i]);
        break;
      }
    }
  }

  return arr;
};

console.log(combineArr(arr1, arr2));

/**
 * @desc 字符串拼接排序法
 * @param { array } arr1 要合并的数组
 * @param { array } arr2 要合并的数组
 * @return { array } 合并完成的数组
 */
const combineArr2 = (arr1 = [], arr2 = []) => {
  const arr = [...arr1, ...arr2.map(item => item + 3)];

  return arr.sort().map(item => (item.includes('3') ? item.split('')[0] : item));
};

console.log(combineArr2(arr1, arr2));

/**
 * @desc Unicode 编码排序法
 * @param { array } arr1 要合并的数组
 * @param { array } arr2 要合并的数组
 * @return { array } 合并完成的数组
 */
const combineArr3 = (arr1 = [], arr2 = []) => {
  const arr = [...arr1, ...arr2];

  return arr.sort(
    (v2, v1) =>
      v2.codePointAt(0) - v1.codePointAt(0) ||
      v1.length - v2.length ||
      v2.codePointAt(1) - v1.codePointAt(1)
  );
};

console.log(combineArr3(arr1, arr2));

/**
 * @desc filter过滤首字母拼接法
 * @param { array } arr1 要合并的数组
 * @param { array } arr2 要合并的数组
 * @return { array } 合并完成的数组
 */
const combineArr4 = (arr1 = [], arr2 = []) => {
  return [].concat(...arr2.map(i => [...arr1.filter(j => j.startsWith(i)), i]));
};

console.log(combineArr4(arr1, arr2));
