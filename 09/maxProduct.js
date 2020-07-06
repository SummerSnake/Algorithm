/**
 * 给定一个整数数组 nums，选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
 * 要求计算并返回该式的最大值。
 */
const nums = [10, 2, 5, 2];

/**
 * @desc 排序
 * @param { number[] } nums
 * @return { number }
 */
const maxProduct = (nums) => {
  const arr = [...nums];
  const len = arr.length;

  arr.sort((a, b) => a - b);

  return (arr[len - 1] - 1) * (arr[len - 2] - 1);
};

console.log(maxProduct(nums));

/**
 * @desc 双指针
 * @param { number[] } nums
 * @return { number }
 */
const maxProduct2 = (nums) => {
  let a = 0;
  let b = 0;

  for (let i = 0; i < nums.length; i++) {
    if (a > b) {
      nums[i] > b && (b = nums[i]);
    } else {
      nums[i] > a && (a = nums[i]);
    }
  }

  return (a - 1) * (b - 1);
};

console.log(maxProduct2(nums));

/**
 * @desc 取最大值截取
 * @param { number[] } nums
 * @return { number }
 */
const maxProduct3 = (nums) => {
  const a = Math.max(...nums);
  nums.splice(nums.indexOf(a), 1, '');
  const b = Math.max(...nums);

  return (a - 1) * (b - 1);
};

console.log(maxProduct3(nums));
