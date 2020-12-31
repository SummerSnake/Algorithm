/**
 * @desc 加油站问题-贪心算法
 *
 * 一辆汽车加满油后可行驶n公里。旅途中有若干个加油站。
 * 设计一个有效算法，指出应在哪些加油站停靠加油，使沿途加油次数最少。
 * 对于给定的n(n <= 5000)和k(k <= 1000)个加油站位置，编程计算最少加油次数。
 */

/**
 * 贪心算法
 * @param { number } n 汽车加满油后可行驶n公里
 * @param { number } k 沿途加油站的数量
 * @param { array } arr 加油站之间的距离数组
 * @return { number } 最少加油次数
 */
function greedy(n, k, arr) {
  // arr[0] > n, 如果第一个加油站距离太远，则无法到达
  if (n === 0 || k === 0 || arr.length < 1 || arr[0] > n) {
    return 'No Solution.';
  }

  let res = 0; // 加油次数
  let distance = 0; // 已行驶距离

  // 遍历加油站的数量，即最多可以加油的次数
  for (let i = 0; i <= k; i += 1) {
    distance += arr[i];

    // 已行驶距离 > 加满油可以行驶的公里数，则此时已经经过一个加油站
    if (distance > n) {
      // 如果当前加油站和前一个加油站的距离 > 加满油可以行驶的公里数，则无法到达
      if (arr[i] > n) {
        return 'No Solution.';
      }

      // 需要在上一个加油站加满油（行驶距离归零），行驶距离则为上一个加油站到当前加油站的距离
      distance = arr[i];
      // 加油次数加一
      res++;
    }
  }

  return res;
}

let arr = [1, 2, 3, 4, 5, 1, 6, 6];
console.log(greedy(7, 7, arr));
