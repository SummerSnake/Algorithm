/**
 * 最大间距 (力扣 164)
 *
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 如果数组元素个数小于 2，则返回 0。
 */

const nums = [7, 1, 5, 3, 6, 4];

/**
 * @desc 冒泡排序 + 双指针
 * @param { number[] } nums
 * @return { number }
 */
const maximumGap = (nums) => {
  const arr = [...nums];
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  let res = 0;
  let i = 0;
  let j = 1;
  while (j < len) {
    res = Math.max(res, arr[j] - arr[i]);
    i++;
    j++;
  }

  return res;
};

console.log(maximumGap(nums));
