/**
 * 删除排序数组中的重复项
 *
 * 给定一个排序数组，要求在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * @desc 循环截取
 *       1. 数组是有序的，则只有相邻元素才有可能相等；
 *       2. 遍历数组，将相邻两个元素中的重复项删除。
 * @param { number[] } nums
 * @return { number }
 */
const removeDuplicatesFrom = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  const arr = [...nums];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.length;
};

console.log(removeDuplicatesFrom(nums));

/**
 * @desc 双指针
 *       1. 数组是有序的，则只有相邻元素才有可能相等；
 *       2. 定义指针 i， 将其指向数组的第一个元素，定义指针 j， 将其指向数组的第二个元素；
 *       3. 遍历数组， 指针 j 开始移动， 寻找与指针 i 处元素不相等的元素；
 *       4. 将指针 i 移动至 i+1 处， 将找到的不相等元素赋值到 i+1 处。
 * @param { number[] } nums
 * @return { number }
 */
const removeDuplicatesFrom2 = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  const arr = [...nums];

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] != arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log(removeDuplicatesFrom2(nums));
