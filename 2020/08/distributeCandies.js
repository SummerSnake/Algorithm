/**
 * 给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果。
 * 你需要把这些糖果平均分给一个弟弟和一个妹妹。返回妹妹可以获得的最大糖果的种类数。
 */

const candies = [1, 1, 2, 2, 3, 3];

/**
 * @desc 去重取最小
 * @param { number[] } candies
 * @return { number }
 */
const distributeCandies = (candies) => Math.min(new Set(candies).size, candies.length / 2);

console.log(distributeCandies(candies));

/**
 * @desc ES6 Map()
 * @param { number[] } candies
 * @return { number }
 */
const distributeCandies2 = (candies) => {
  const len = candies.length;
  const map = new Map();

  candies.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1);
    }
  });

  const ret = map.size;

  if (ret >= len / 2) {
    return len / 2;
  }

  return ret;
};

console.log(distributeCandies2(candies));

/**
 * @desc 对给定的 candies 数组进行排序，并通过比较排序数组的相邻元素来找出唯一的元素
 * @param { number[] } candies
 * @return { number }
 */
const distributeCandies3 = (candies) => {
  candies.sort();
  let ret = 1;
  let len = candies.length;
  let halfLen = candies.length / 2;

  // 边界为：结果等于数组长度的一半
  for (let i = 0; i < len && ret < halfLen; i++) {
    if (candies[i] > candies[i - 1]) {
      ret++;
    }
  }

  return ret;
};

console.log(distributeCandies3(candies));
