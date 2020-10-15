/**
 * 三数之和 (力扣15题)
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请找出所有满足条件且不重复的三元组。
 */

const arr = [-1, 0, 1, 2, -1, -4];

/**
 * @desc 排序 + 双指针 (时间复杂度：O(n2)，n 为数组长度)
 *       1. 首先对数组进行排序，排序后固定一个数 nums[i];
 *       2. 再使用左右指针指向 nums[i]后面的两端，数字分别为 nums[L] 和 nums[R];
 *       3. 计算三个数的和 sum 判断是否满足为 0，满足则添加进结果集;
 *       4. 如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环;
 *       5. 如果 nums[i] === nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过;
 *       6. 当 sum === 0 时，nums[L] === nums[L+1] 则会导致结果重复，应该跳过，L++;
 *       7. 当 sum === 0 时，nums[R] === nums[R−1] 则会导致结果重复，应该跳过，R--;
 * @param { number[] } height
 * @return { number }
 */

const threeSum = (nums) => {
  let ans = [];
  const len = nums.length;

  // 校验
  if (!nums || nums.length < 3) {
    return ans;
  }

  // 排序
  nums.sort((a, b) => a - b);

  // 循环遍历数组
  for (let i = 0; i < len; i++) {
    // 排序之后，如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (nums[i] > 0) {
      break;
    }

    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let L = i + 1; // 左指针
    let R = len - 1; // 右指针

    while (L < R) {
      // 计算三数之和
      const sum = nums[i] + nums[L] + nums[R];

      // 存储数据
      if (sum === 0) {
        ans.push([nums[i], nums[L], nums[R]]);

        // 去重
        while (L < R && nums[L] === nums[L + 1]) {
          L++;
        }
        while (L < R && nums[R] === nums[R - 1]) {
          R--;
        }

        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }

  return ans;
};

console.log(threeSum(arr));
