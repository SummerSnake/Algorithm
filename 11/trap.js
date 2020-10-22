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
