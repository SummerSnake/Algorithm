/**
 * 荷兰旗问题(颜色分类 力扣 75)
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

/**
 * @desc 双指针(两次循环)
 * @param { number[] } nums
 * @return { number[] }
 */
const sortColors2 = (nums) => {
  const arr = [...nums];
  const len = arr.length;

  let i = 0;
  let j = len - 1;
  // 先将 2 交换到数组尾部
  while (i < j) {
    if (arr[i] !== 2) {
      i++;
    }
    if (arr[j] === 2) {
      j--;
    }
    if (i < j && arr[i] === 2 && arr[j] < 2) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  i = 0;
  j = len - 1;
  // 再将 0 交换到数组头部
  while (i < j) {
    if (arr[i] === 0) {
      i++;
    }
    if (arr[j] !== 0) {
      j--;
    }
    if (i < j && arr[i] === 1 && arr[j] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  return arr;
};

console.log(sortColors2(nums));

/**
 * @desc 双指针(一次循环)
 * @param { number[] } nums
 * @return { number[] }
 */
const sortColors3 = (nums) => {
  const arr = [...nums];
  const len = arr.length;

  let i = 0;
  let j = 0;

  for (let k = 0; k < len; k++) {
    // 将 1 往前交换
    if (arr[k] === 1) {
      [arr[k], arr[j]] = [arr[j], arr[k]];
      j++;
    }

    // 将 0 往前交换
    if (arr[k] === 0) {
      [arr[k], arr[i]] = [arr[i], arr[k]];
      // i < j 说明把 0 后面排好的 1 又换出去了，需要再换回来
      if (i < j) {
        [arr[k], arr[j]] = [arr[j], arr[k]];
      }

      i++;
      j++;
    }
  }

  return arr;
};

console.log(sortColors3(nums));
