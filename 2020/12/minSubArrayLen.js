/**
 * 长度最小的子数组 (力扣 209)
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0。
 */

const nums = [10, 2, 3];
const s = 6;

/**
 * @desc 暴力解法
 * @param { number } s
 * @param { number[] } nums
 * @return { number }
 */
const minSubArrayLen = (s, nums) => {
  let ret = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];

    if (sum >= s) {
      return 1;
    }

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];

      if (sum >= s) {
        // j - i 为当前下标 - 开始下标， j - i + 1为元素个数
        ret = Math.min(ret, j - i + 1);
        break;
      }
    }
  }

  return ret === Infinity ? 0 : ret;
};

console.log(minSubArrayLen(s, nums));

/**
 * @desc 双指针
 * @param { number } s
 * @param { number[] } nums
 * @return { number }
 */
const minSubArrayLen2 = (s, nums) => {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }

  let ret = Infinity;
  let i = 0;
  let j = 0;
  let sum = 0;

  while (j < len) {
    // 遍历求和
    sum += nums[j];

    while (sum >= s) {
      // j - i 为当前下标 - 开始下标， j - i + 1为元素个数
      ret = Math.min(ret, j - i + 1);
      // 和 减去首指针元素，首指针指向下个元素
      sum -= nums[i];
      i++;
    }

    j++;
  }

  return ret === Infinity ? 0 : ret;
};

console.log(minSubArrayLen2(s, nums));
