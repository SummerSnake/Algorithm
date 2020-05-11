/**
 * 数组的相对排序
 *
 * 给定两个数组，arr1 和 arr2。
 * 1. arr2 中的元素各不相同；
 * 2. arr2 中的每个元素都出现在 arr1 中；
 *
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。
 * 未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 */

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];

/**
 * @desc 嵌套 for 循环，交换元素位置
 * @param { number[] } arr1
 * @param { number[] } arr2
 * @return { number[] }
 */
const relativeSortArray = (arr1, arr2) => {
  // 当前index，遍历结束后为相对排序后 arr1 相对于 arr2 最后一个元素 index
  let lastIndex = 0;

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        // 交换位置
        [arr1[lastIndex], arr1[j]] = [arr1[j], arr1[lastIndex]];
        lastIndex++;
      }
    }
  }

  // 相对排序完成后截取剩余部分并进行排序
  let arr = arr1.slice(lastIndex).sort((a, b) => a - b);

  return [...arr1.splice(0, lastIndex), ...arr];
};

console.log(relativeSortArray(arr1, arr2));
