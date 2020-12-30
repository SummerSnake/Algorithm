/**
 *  合并两个有序数组 (力扣88题)
 *
 * 给定两个有序整数数组 nums1 和 nums2，要求将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *
 * 1. 初始化 nums1 和 nums2 的元素数量分别为 m 和 n；
 * 2. 可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 */

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

/**
 * @desc 先合并再排序
 * @param { number[] } nums1
 * @param { number } m
 * @param { number[] } nums2
 * @param { number } n
 * @return { number[] }
 */
const mergeArray = (nums1, m, nums2, n) => {
  let arr = [...nums1];
  let i = 0;

  while (i < n) {
    arr[i + m] = nums2[i];
    i++;
  }

  arr.sort((a, b) => a - b);
  return arr;
};

console.log(mergeArray(nums1, m, nums2, n));
