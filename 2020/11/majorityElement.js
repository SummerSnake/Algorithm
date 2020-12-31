/**
 * 主要元素
 *
 * 数组中占比超过一半的元素称之为主要元素。
 * 给定一个整数数组，找到它的主要元素。
 * 若没有，返回-1。
 */

const nums = [1, 2, 5, 9, 5, 9, 5, 5, 5];

/**
 * @desc ES6 Map()
 * @param { number[] } nums
 * @return { number }
 */
const majorityElement = (nums) => {
  const map = new Map();
  const len = nums.length / 2;

  for (let item of nums) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);

    if (map.get(item) > len) {
      return item;
    }
  }

  return -1;
};

console.log(majorityElement(nums));

/**
 * @desc 摩尔投票算法
 *       摩尔投票算法是一种使用线性时间和常数空间查找大部分元素序列的算法。
 *       最简单的形式就是，查找输入中重复出现超过一半以上(n/2)的元素。
 *
 *       摩尔投票算法是基于这个事实：
 *       1. 每次从序列里选择两个不相同的数字删除掉（或称为“抵消”）；
 *       2. 最后剩下一个数字或几个相同的数字，就是出现次数大于总数一半的那个。
 * @param { number[] } nums
 * @return { number }
 */
const majorityElement2 = (nums) => {
  let major = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (major !== nums[i]) {
      count--;
    }

    if (count === 0) {
      major = nums[i];
    }

    if (nums[i] === major) {
      count++;
    }
  }

  return count > 0 ? major : -1;
};

console.log(majorityElement2(nums));
