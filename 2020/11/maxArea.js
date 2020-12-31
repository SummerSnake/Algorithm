/**
 * 盛最多水的容器 (力扣11题)
 *
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 *
 * 将容器看做一个矩形，求最大矩形的面积。
 */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

/**
 * @desc 双指针
 *       1. 一开始两个指针一个指向开头一个指向结尾，此时容器的底是最大的;
 *       2. 接下来随着指针向内移动，会造成容器的底变小，在这种情况下想要让容器盛水变多，就只有在容器的高上下功夫;
 *       3. 不管是左指针向右移动一位，还是右指针向左移动一位，容器的底都是一样的，都比原来减少了 1;
 *       4. 想要让指针移动后的容器面积增大，就要使移动后的容器的高尽量大，所以选择指针所指的高较小的那个指针进行移动;
 *       5. 这样就保留了容器较高的那条边，放弃了较小的那条边，以获得有更高的边的机会。
 * @param { number[] } height
 * @return { number }
 */
const maxArea = (height) => {
  const arr = [...height];
  let i = 0;
  let j = arr.length - 1;
  let max = 0;

  while (i < j) {
    // Math.min 取出容器高度，j-i 取出容器宽度
    let tmp = Math.min(arr[i], arr[j]) * (j - i);

    max = Math.max(max, tmp);

    if (arr[i] > arr[j]) {
      j--;
    } else {
      i++;
    }
  }

  return max;
};

console.log(maxArea(height));

/**
 * @desc 暴力解法 (嵌套 for 循环)
 * @param { number[] } height
 * @return { number }
 */
const maxArea2 = (height) => {
  const arr = [...height];
  let len = arr.length;
  let max = 0;

  // 循环对比所有 i,j 所组成的容器面积
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      max = Math.max(max, Math.min(arr[i], arr[j]) * (j - i));
    }
  }

  return max;
};

console.log(maxArea2(height));
