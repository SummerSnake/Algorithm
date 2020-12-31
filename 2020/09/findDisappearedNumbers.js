/**
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 */

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

/**
 * @desc 循环查找
 *       已知数组中元素范围为1-n，那么从1遍历至n，依次查找元素是否存在，不存在的放入新数组
 * @param { number[] } nums
 * @return { number[] }
 */
const findDisappearedNumbers = (nums) => {
  const ret = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      ret.push(i);
    }
  }

  return ret;
};

console.log(findDisappearedNumbers(nums));

/**
 * @desc HashMap 对比
 * @param { number[] } nums
 * @return { number[] }
 */
const findDisappearedNumbers2 = (nums) => {
  const ret = [];
  const map = {};
  nums.forEach((num) => (map[num] = true));

  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      ret.push(i);
    }
  }

  return ret;
};

console.log(findDisappearedNumbers2(nums));

/**
 * @desc 原地 HashMap
 * @param { number[] } nums
 * @return { number[] }
 */
const findDisappearedNumbers3 = (nums) => {
  const ret = [];

  nums.forEach((num) => {
    // 将下标为 abs(num) - 1 的元素变成负数
    const absNum = Math.abs(num);
    if (nums[absNum - 1] > 0) {
      nums[absNum - 1] *= -1;
    }
  });

  for (let i = 1; i <= nums.length; i++) {
    // 如果下标 i-1 的元素是正数，说明整数 i 没出现过（要不然前面循环就变成负数了）
    if (nums[i - 1] > 0) {
      ret.push(i);
    }
  }

  return ret;
};

console.log(findDisappearedNumbers3(nums));
