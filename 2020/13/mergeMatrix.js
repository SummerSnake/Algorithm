/**
 * 合并区间 (力扣 56)
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 *
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]
 *
 * intervals[i][0] <= intervals[i][1]
 */

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

/**
 * @desc 排序 + 双指针
 * @param { number[][] } intervals
 * @return { number[][] }
 */
const mergeMatrix = (intervals) => {
  if (intervals.length < 2) {
    return intervals;
  }

  // 因为子数组都是有序的，故只需比较各自首项即可实现排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 将第一个子数组存入结果数组
  let res = [intervals[0]];

  // 将 结果数组最后一个子数组 与 原数组的所有子数组 逐个对比，寻找重叠区间
  for (let i = 1; i < intervals.length; i++) {
    // 由于子数组是有序的，如果第一个数组的第二个元素 >= 第二个数组的第一个元素，则两个数组重叠
    if (res[res.length - 1][1] >= intervals[i][0]) {
      // 将 第一个数组的第二个元素 替换为 两个数组第二个中的较大值
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
    } else {
      // 无重叠则直接存入结果数组
      res.push(intervals[i]);
    }
  }

  return res;
};

console.log(mergeMatrix(intervals));
