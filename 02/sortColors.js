/**
 * 荷兰旗问题
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，
 * 原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 */

const nums = [2, 0, 2, 1, 1, 0];

/**
 * @desc 单指针
 * @param { number[] } nums
 * @return { number[] }
 */
const sortColors = (nums) => {
  const arr = [...nums];
  const len = arr.length;

  let pointer = 0;
  // 第一次循环将 0 全部交换到数组的头部
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
      pointer++;
    }
  }

  // 第二次循环将 1 全部交换到 0 的后边
  for (let i = pointer; i < len; i++) {
    if (arr[i] === 1) {
      [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
      pointer++;
    }
  }

  return arr;
};

console.log(sortColors(nums));
