/**
 * 给定两个数组，编写一个函数来计算它们的交集
 * 1、输出结果中的每个元素一定是唯一的；
 * 2、不需考虑输出结果的顺序。
 */

/**
 * @desc 暴力解法 (嵌套 for 循环)
 * @param { number[] } arr1
 * @param { number[] } arr2
 * @return { number[] }
 */
const intersection = (arr1, arr2) => {
  let ret = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !ret.includes(arr1[i])) {
        ret.push(arr1[i]);
        break;
      }
    }
  }

  return ret;
};

console.log(intersection([1, 2, 6, 8, 8, 11], [8, 11]));

/**
 * @desc 哈希去重
 * @param { number[] } arr1
 * @param { number[] } arr2
 * @return { number[] }
 */
const intersection2 = (arr1, arr2) => {
  const map = new Map();

  return arr1.filter((item) => {
    if (!map.has(item) && arr2.includes(item)) {
      map.set(item);

      return arr2.includes(item);
    }
  });
};

console.log(intersection2([1, 2, 6, 8, 8, 11], [8, 11]));

/**
 * @desc ES6 Set() 去重
 * @param { number[] } arr1
 * @param { number[] } arr2
 * @return { number[] }
 */
const intersection3 = (arr1, arr2) => [...new Set(arr1.filter((item) => arr2.includes(item)))];

console.log(intersection3([1, 2, 6, 8, 8, 11], [8, 11]));

/**
 * @desc 排序 + 双指针
 * @param { number[] } arr1
 * @param { number[] } arr2
 * @return { number[] }
 */
const intersection4 = (arr1, arr2) => {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  const ret = new Set();
  let i = 0;
  let j = 0;

  // 循环有序数组
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // 如果 arr1[i] < arr2[j]，那么下一个可能相等的元素应该是 nums1[i + 1]，所以i++；
      i++;
    } else if (arr1[i] > arr2[j]) {
      // 如果 arr1[i] > arr2[j]，那么下一个可能相等的元素应该是 nums2[j + 1]，所以j++；
      j++;
    } else {
      // 相等则加入 Set,  利用 Set 的元素不可重复特性，重复元素将被忽略。
      ret.add(arr1[i]);
      i++;
      j++;
    }
  }

  return [...ret];
};

console.log(intersection4([1, 2, 6, 8, 8, 11], [8, 11]));

/**
 * @desc 二分查找
 * @param { number[] } arr1
 * @param { number[] } arr2
 * @return { number[] }
 */
const intersection5 = (arr1, arr2) => {
  arr2 = arr2.sort((a, b) => a - b);
  const ret = new Set();

  const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      mid = Math.floor(left + (right - left) / 2);

      if (arr[mid] === val) {
        return true;
      } else if (arr[mid] > val) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (binarySearch(arr2, arr1[i])) {
      ret.add(arr1[i]);
    }
  }

  return [...ret];
};

console.log(intersection5([1, 2, 6, 8, 8, 11], [8, 11]));
