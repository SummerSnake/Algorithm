/**
 * 有多少小于当前数字的数字
 * 给定一个数组 nums，对于其中每个元素 nums[i]，要求统计数组中比它小的所有数字的数目。
 * 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i]。
 * 以数组形式返回答案。
 */

/**
 * @desc 暴力解法(嵌套 for 循环)
 * @param { number[] } nums
 * @return { number[] }
 */
const smallerNumbersThanCurrent = (nums) => {
  const len = nums.length;
  const ret = new Int16Array(len);

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (nums[j] < nums[i]) {
        ret[i] += 1;
      }
    }
  }

  return ret;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

/**
 * @desc 排序解法
 * @param { number[] } nums
 * @return { number[] }
 */
const smallerNumbersThanCurrent2 = (nums) => {
  const numsClone = [...nums];
  const len = numsClone.length;
  numsClone.sort((a, b) => a - b);
  const ret = new Int16Array(len);

  for (let i = 0; i < len; i += 1) {
    // 1、排序后当前元素之前的元素均小于或等于当前元素；
    // 2、通过获取原数组元素在新数组中的索引，即可得到小于当前元素的元素个数；
    // 3、使用indexOf获取首次出现的位置， 可以排除等于的情况。
    ret[i] = numsClone.indexOf(nums[i]);
  }

  return ret;
};

console.log(smallerNumbersThanCurrent2([8, 1, 2, 2, 3]));

/**
 * @desc 计数排序
 *       2 <= nums.length <= 500
 *       0 <= nums[i] <= 100
 *       分101个桶，当前元素值作为桶的下标，元素出现的次数作为桶下标的值。
 *       那么桶的下标小于当前值的所有出现次数累加起来，就是比当前值小出现的次数了
 * @param { number[] } nums
 * @return { number[] }
 */
const smallerNumbersThanCurrent3 = (nums) => {
  const len = nums.length;
  const BucketLen = 101; // 桶的个数
  const Bucket = [];
  // 初始化桶
  for (let s = 0; s < BucketLen; s++) {
    Bucket[s] = 0;
  }
  for (let i = 0; i < len; i++) {
    Bucket[nums[i]]++;
  }
  // 累加
  for (let j = 1; j <= BucketLen; j++) {
    Bucket[j] = Bucket[j - 1] + Bucket[j];
  }

  const ret = [];
  for (let k = 0; k < len; k++) {
    ret[k] = nums[k] ? Bucket[nums[k] - 1] : 0;
  }

  return ret;
};

console.log(smallerNumbersThanCurrent3([8, 1, 2, 2, 3]));
