/**
 * 两数之和 II - 输入有序数组 (力扣 167)
 *
 * 给定一个已按照 升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 返回的下标值从 1 开始。
 */

const numbers = [2, 7, 11, 15];
const target = 9;

/**
 * @desc 双指针
 * @param { number[] } numbers
 * @param { number } target
 * @return { number[] }
 */
const twoSum = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];

    if (sum === target) {
      return [i + 1, j + 1];
    }
    if (sum > target) {
      j--;
    }
    if (sum < target) {
      i++;
    }
  }

  return [];
};

twoSum(numbers, target);

/**
 * @desc 哈希表
 * @param { number[] } numbers
 * @param { number } target
 * @return { number[] }
 */
const twoSum2 = (numbers, target) => {
  const map = new Map();
  let len = numbers.length;

  for (let i = 0; i < len; i++) {
    let complement = target - numbers[i];

    if (map.has(complement)) {
      return [map.get(complement) + 1, i + 1];
    }

    map.set(numbers[i], i);
  }

  return [];
};

twoSum2(numbers, target);
