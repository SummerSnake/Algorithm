/**
 * 接雨水 (力扣42题)
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

/**
 * @desc 暴力解法 (按行求)
 *       1. 求第 i 层的水，遍历每个位置，如果当前的高度小于 i，并且两边有高度大于等于 i 的，
 *          说明这个地方一定有水，水就可以加 1。
 *          <1> 求高度为 i 的水，首先用一个变量 tmp 保存当前累积的水，初始化为 0；
 *          <2> 从左到右遍历墙的高度，遇到高度大于等于 i 的时候，开始更新 tmp；
 *          <3> 遇到高度小于 i 的就把 tmp 加 1；
 *          <4> 遇到高度大于等于 i 的，就把 tmp 加到最终的答案 sum 里，并且 tmp 置零，然后继续循环。
 * @param { number[] } height
 * @return { number }
 */
const trap = (height) => {
  let sum = 0;
  // 寻找最高的列
  const maxCol = Math.max(...height);

  // 遍历行，以最高列的高度为边界
  for (let i = 0; i <= maxCol; i++) {
    let tmp = 0;
    let isTmpPlus = false;

    // 遍历列
    for (let j = 0; j < height.length; j++) {
      // 遇到高度小于 i 的就把 tmp 加 1
      if (isTmpPlus && height[j] < i) {
        tmp++;
      }

      // 遇到高度大于等于 i 的，就把 tmp 加到最终的答案 sum 里，并且 tmp 置零
      if (height[j] >= i) {
        sum += tmp;
        tmp = 0;
        isTmpPlus = true;
      }
    }
  }

  return sum;
};

console.log(trap(height));

/**
 * @desc 暴力解法 (按列求)
 *       1. 求每一列的水，我们只需要关注当前列，以及左边最高的墙、右边最高的墙；
 *       2. 以左边最高的墙、右边最高的墙为木桶两边，当前列为底，则只有两边的墙均大于当前列的高度，才能存水；
 *       3. 装水的多少，根据木桶效应，我们只需要看左边最高的墙和右边最高的墙中较矮的一个；
 *       4. 根据较矮的那个墙和当前列的墙的高度可以分为三种情况:
 *          <1> 较矮的墙的高度大于当前列的墙的高度 => 可存的水 = 较矮墙的高度 - 当前列墙的高度；
 *          <2> 较矮的墙的高度小于当前列的墙的高度 => 无法存水；
 *          <3> 较矮的墙的高度等于当前列的墙的高度 => 无法存水。
 * @param { number[] } height
 * @return { number }
 */
const trap2 = (height) => {
  let sum = 0;

  // 最两端的列不用考虑，因为一定不会有水。所以下标从 1 到 length - 2
  for (let i = 1; i < height.length - 1; i++) {
    // 找出左边最高列
    let maxLeft = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (height[j] > maxLeft) {
        maxLeft = height[j];
      }
    }

    // 找出右边最高列
    let maxRight = 0;
    for (let k = i + 1; k < height.length; k++) {
      if (height[k] > maxRight) {
        maxRight = height[k];
      }
    }

    // 找出两端较小的列
    let minCol = Math.min(maxLeft, maxRight);

    // 只有较小的一端大于当前列的高度才会有水，其他情况不会有水
    if (minCol > height[i]) {
      sum += minCol - height[i];
    }
  }

  return sum;
};

console.log(trap2(height));

/**
 * @desc 动态规划
 *       1. (按列求)解法中，对于每一列，求它左边最高的墙和右边最高的墙，都是重新遍历一遍所有高度；
 *       2. 定义两个数组，maxLeft[i] 代表第 i 列左边最高的墙的高度，maxRight[i] 代表第 i 列右边最高的墙的高度；
 *       3. maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1])，maxLeft[i - 1]是上一次求出的最高的墙，
 *          height[i - 1]是第 i 列墙前边的墙；
 *       4. maxRight[i] = Math.max(maxRight[i + 1], height[i + 1])，maxRight[i + 1]是上一次求出的最高的墙，
 *          height[i + 1]是第 i 列墙后边的墙；
 * @param { number[] } height
 * @return { number }
 */
const trap3 = (height) => {
  let sum = 0;
  const len = height.length;
  const maxLeft = new Array(len);
  const maxRight = new Array(len);

  // 最两端的列不用考虑，因为一定不会有水。所以左边下标从 1 开始。
  for (let i = 1; i < len - 1; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1] || -Infinity, height[i - 1] || -Infinity);
  }

  // 最两端的列不用考虑，因为一定不会有水。所以右边下标从 len - 2 开始。
  for (let i = len - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1] || -Infinity, height[i + 1] || -Infinity);
  }

  // 遍历列
  for (let i = 1; i < len - 1; i++) {
    // 找出两端较小的列
    const minCol = Math.min(maxLeft[i] || Infinity, maxRight[i] || Infinity);

    // 只有较小的一端大于当前列的高度才会有水，其他情况不会有水
    if (minCol > height[i]) {
      sum += minCol - height[i];
    }
  }

  return sum;
};

console.log(trap3(height));

/**
 * @desc 双指针
 *       1. 动态规划解法，通常可以对空间复杂度进行进一步的优化；
 *       2. maxLeft[i] 和 maxRight[i] 只使用了一次，所以可以不使用数组，而使用一个元素来保存；
 *       3. 只使用一次循环，循环是从左到右遍历的，而 maxRight 的更新是从右向左的，所以这里要用到两个指针，
 *          left = 1 和 right = height.length - 1，从两个方向去遍历；
 *       4. 在某个位置 i 处，它能存的水，取决于它左右两边的最大值中较小的一个；
 *       5. 当我们从左往右处理到 left 下标时，左边的最大值 maxLeft 对它而言是可信的，由于两个指针没有相遇，中间
 *          可能有其他元素，所以 maxRight 未必就是它右边最大的值，同理，当我们从右往左处理到 right 下标时，右边
 *          的最大值 maxRight 对它而言是可信的，但 maxLeft 对它而言是不可信的。
 *       6. 对于指针 left 而言，它左边最大值一定是 maxLeft，右边最大值 >= maxRight，如果 maxLeft < maxRight
 *          成立，那么它就知道自己能存多少水了，无论右边将来会不会出现更大的 maxRight，都不影响这个结果，
 *          所以当 maxLeft < maxRight 时，我们就希望去处理 left 指针，反之，我们希望去处理 right 指针。
 * @param { number[] } height
 * @return { number }
 */
const trap4 = (height) => {
  let sum = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let left = 0;
  let right = height.length - 1;

  // 首尾指针相遇结束循环
  while (left <= right) {
    // 从左往右走
    if (maxLeft < maxRight) {
      // 如果上一次求出的最高的墙比当前列高，则更新 sum
      sum += Math.max(0, maxLeft - height[left]);
      // 取上一次求出的最高的墙与当前列较高的值，更新最高墙的值
      maxLeft = Math.max(maxLeft, height[left]);
      left++;
    } else {
      // 从右往左走
      sum += Math.max(0, maxRight - height[right]);
      maxRight = Math.max(maxRight, height[right]);
      right--;
    }
  }

  return sum;
};

console.log(trap4(height));

/**
 * @desc 单调栈
 *       1. 单调栈中存放的数据应该是有序的，所以单调栈也分为单调递增栈和单调递减栈：
 *          <1> 单调递增栈：栈中数据出栈的序列为单调递增序列；
 *          <2> 单调递减栈：栈中数据出栈的序列为单调递减序列。
 * @param { number[] } height
 * @return { number }
 */
const trap5 = (height) => {
  let sum = 0;
  let i = 0;
  const stack = []; // 单调递增栈 (存储下标)

  while (i < height.length) {
    // 空栈 或 栈顶元素 >= 当前元素
    if (stack.length === 0 || height[stack[stack.length - 1]] >= height[i]) {
      // 当前元素入栈
      stack.push(i++);
    } else {
      // 栈顶元素 < 当前元素， 栈顶元素出栈，两元素组成容器，只取栈顶元素，则相邻相等元素被忽略
      const stackTop = stack.pop();

      if (stack.length > 0) {
        // i - stack[stack.length - 1] - 1 是雨水的宽度(左右边界下标 - 1)。
        const width = i - stack[stack.length - 1] - 1;
        // height[stack[stack.length - 1]] 此时指向的是此次接住的雨水的左边界的位置。右边界是当前的柱体，即i
        // Math.min(height[stack[stack.length - 1]], height[i]) 是左右柱子高度的较小值
        // 减去 height[stackTop] 上一次栈顶高度， 就是雨水的高度
        sum += width * (Math.min(height[stack[stack.length - 1]], height[i]) - height[stackTop]);
      }
    }
  }

  return sum;
};

console.log(trap5(height));
