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

/**
 * @desc 双指针 + 从前往后
 *        1. 将 nums1 和 nums2 中的元素从小到大按顺序缓存到一个数组中；
 *        2. 将 nums1 中的元素按顺序替换为缓存数组中的元素。
 * @param { number[] } nums1
 * @param { number } m
 * @param { number[] } nums2
 * @param { number } n
 * @return { number[] }
 */
const mergeArray2 = (nums1, m, nums2, n) => {
  const arr = [...nums1];
  let i = 0;
  let j = 0;
  let tmp_nums1 = arr.slice(0, m);
  let tmp_nums2 = nums2.slice(0, n);
  let result = [];

  while (i < m && j < n) {
    if (tmp_nums1[i] < tmp_nums2[j]) {
      result.push(tmp_nums1[i]);
      i++;
    } else {
      result.push(tmp_nums2[j]);
      j++;
    }
  }

  // 合并剩余元素
  result = [...result, ...tmp_nums1.slice(i), ...tmp_nums2.slice(j)];

  // 替换 nums1 中的元素
  for (let i = 0; i < result.length; i++) {
    arr[i] = result[i];
  }

  return arr;
};

console.log(mergeArray2(nums1, m, nums2, n));
