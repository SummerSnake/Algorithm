/**
 * 接雨水 (力扣42题)
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

/**
 * @desc 暴力解法 (按列求)
 *       1. 求每一列的水，我们只需要关注当前列，以及左边最高的墙、右边最高的墙；
 *       2. 以左边最高的墙、右边最高的墙为木桶两边，当前列为底，则只有两边的墙均大于当前列的高度，才能存水；
 *       3. 装水的多少，根据木桶效应，我们只需要看左边最高的墙和右边最高的墙中较矮的一个；
 *       4. 根据较矮的那个墙和当前列的墙的高度可以分为三种情况:
 *          <1> 较矮的墙的高度大于当前列的墙的高度 => 可存的水 = 较矮墙的高度 - 当前列墙的高度；
 *          <2> 较矮的墙的高度小于当前列的墙的高度 => 无法存水；
 *          <2> 较矮的墙的高度等于当前列的墙的高度 => 无法存水。
 * @param { number[] } height
 * @return { number }
 */
const trap = (height) => {
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

console.log(trap(height));
