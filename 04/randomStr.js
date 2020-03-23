/**
 * @desc 随机生成指定长度的字符串。
 * @param { number } length 字符串的长度
 * ~ charAt() 方法可返回指定位置的字符。
 * ~ floor() 方法返回小于等于所传参数的最大整数。
 */
const randomStr = length => {
  let str = 'abcdefghijkmnopqrstuvwxyz9876543210';
  let result = '';
  let len = str.length;
  let i = 0;

  while (i < length) {
    result += str.charAt(Math.floor(Math.random() * len));
    i += 1;
  }

  return result;
};

console.log(randomStr(11));

/**
 * @desc 删除数组中的所有假值(false , null , 0 , NaN, undefined , "")。
 * @param { any[] } 给定数组
 */
const bouncer = arr => arr.filter(Boolean);

console.log(bouncer([7, 'ate', '', false, 9, null, NaN, undefined, 0]));

/**
 * @desc 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
 * @param { any[] } 给定数组
 * @param { number } 要删除元素的个数
 */
const slasher = (arr = [], howMany = 0) => {
  arr.splice(0, howMany);
  return arr;
};

console.log(slasher([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5));

/**
 * @desc 给定两个整数数组 nums 和 index
 *       1. 目标数组 target 最初为空；
 *       2. 按从左到右的顺序依次读取 nums[i] 和 index[i]，在 target 数组中的下标 index[i] 处插入值 nums[i] ；
 *       3. 重复上一步，直到在 nums 和 index 中都没有要读取的元素。
 * @param { number[] } nums 整数数组 nums
 * @param { number[] } index 整数数组 index
 * @return { number[] } 目标数组 target
 */

const createTargetArray = function(nums, index) {
  const len = nums.length > index.length ? nums.length : index.length;
  let i = 0;
  let target = [];

  while (i < len) {
    target.splice(index[i], 0, nums[i]);
    i += 1;
  }

  return target;
};

const nums = [1, 2, 3, 4, 0];
const index = [0, 1, 2, 3, 0];
console.log(createTargetArray(nums, index));
