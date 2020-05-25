/**
 * 给定一个正整数数组 arr ，要求将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
 */

const arr = [17, 18, 5, 4, 6, 1];

/**
 * @desc 双循环保存最大值
 * @param { number[] } arr
 * @return { number[] }
 */
const replaceElements = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i + 1];

    for (let j = i + 2; j < arr.length - 1; j++) {
      if (arr[j] > temp) {
        temp = arr[j];
      }
    }

    arr[i] = temp;
  }

  arr[arr.length - 1] = -1;

  return arr;
};

// console.log(replaceElements(arr));

/**
 * @desc 动态规划(逆序遍历)
 * @param { number[] } arr
 * @return { number[] }
 */
const replaceElements2 = (arr) => {
  let max = -1;
  let ret = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    ret[i] = max;
    max = arr[i] > max ? arr[i] : max;
  }

  return ret;
};

console.log(replaceElements2(arr));

/**
 * @desc slice 截取数组获取最大值
 * @param { number[] } arr
 * @return { number[] }
 */
const replaceElements3 = (arr) =>
  arr.map((item, index) => (index === arr.length - 1 ? -1 : Math.max(...arr.slice(index + 1))));

console.log(replaceElements3(arr));
