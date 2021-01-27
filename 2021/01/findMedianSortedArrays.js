/**
 * 寻找两个正序数组的中位数 (力扣 4)
 *
 * 给定两个正序（从小到大）数组 nums1 和 nums2；
 * 要求找出并返回这两个正序数组的中位数。
 */

const nums1 = [1, 2];
const nums2 = [3, 4];

/**
 * @desc 先合并再排序
 * @param { number[] } nums1
 * @param { number[] } nums2
 * @return { number }
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);

  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
};

findMedianSortedArrays(nums1, nums2);
