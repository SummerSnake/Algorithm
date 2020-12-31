/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 */

const nums = [0, 1, 0, 3, 12];

/**
 * @desc 非0项直接覆盖到数组前头
 * @param { number[] } nums
 * @return { number[] }
 */
const moveZeroes = (nums) => {
  const arr = [...nums];
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i] = arr[j];
      i++;
    }
  }

  for (let k = i; k < arr.length; k++) {
    arr[k] = 0;
  }

  return arr;
};

console.log(moveZeroes(nums));

/**
 * @desc 双指针
 * @param { number[] } nums
 * @return { number[] }
 */
const moveZeroes2 = (nums) => {
  const arr = [...nums];
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    // 忽略第一个元素，非零项往前交换
    if (i !== j) {
      if (arr[i] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++;
      }
    }

    i++;
  }

  return arr;
};

console.log(moveZeroes2(nums));
