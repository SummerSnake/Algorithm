/**
 * @desc 给定一个单元格，数据格式为矩阵
 *       值 0 代表空单元格；
 *       值 1 代表新鲜橘子；
 *       值 2 代表腐烂的橘子。
 *       每分钟，任何与腐烂的橘子（在 4 个正方向上，上下左右）相邻的新鲜橘子都会腐烂。
 *       返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。
 *
 *       示例：
 *       输入：[[2,1,1],[1,1,0],[0,1,1]]
 *       输出：4
 * @param { number[][] } grid 单元格矩阵
 * @return { number } 最小分钟数
 */
const orangesRotting = (grid = []) => {
  if (grid.length < 1) {
    return -1;
  }

  let queue = []; // 腐烂的橘子队列
  let min = 0; // 最小分钟数
  let total = 0; // 橘子的总数
  let rotten = 0; // 腐烂的橘子
  let gridLen = grid.length; // 矩阵长度
  let gridRowLen = grid[0].length; // 矩阵子数组长度

  // 将所有腐烂的橘子入队
  for (let i = 0; i < gridLen; i += 1) {
    for (let j = 0; j < gridRowLen; j += 1) {
      if (grid[i][j] === 2) {
        // 将当前元素入队，i为所处子数组，j为在子数组中所处的位置，当前元素值设为0
        queue.push([i, j]);
        total += 1;
      }
      if (grid[i][j] === 1) {
        total += 1;
      }
    }
  }

  // 空矩阵
  if (total === 0) {
    return 0;
  }

  // 感染过程
  while (queue.length > 0 && rotten < total) {
    let len = queue.length;
    // 每次循环将腐烂的橘子数量进行累加，并与橘子总数进行比较
    // 如果累加的值等于橘子的总数，则说明所有的橘子都变成了坏橘子
    rotten += len;
    if (rotten === total) {
      return min;
    }
    // 每次循环整个队列，将队列中所有可以被感染的橘子遍历
    for (let i = 0; i < len; i += 1) {
      // 首元素出队，x为所处子数组，y为在子数组中所处的位置
      let [x, y] = queue.shift();
      // 将腐烂的橘子入队，其所在位置设为2，
      // 当前元素上方元素
      if (x - 1 >= 0 && grid[x - 1][y] === 1) {
        queue.push([x - 1, y]);
        grid[x - 1][y] = 2;
      }
      // 当前元素下方元素
      if (x + 1 < gridLen && grid[x + 1][y] === 1) {
        queue.push([x + 1, y]);
        grid[x + 1][y] = 2;
      }
      // 当前元素左边元素
      if (y - 1 >= 0 && grid[x][y - 1] === 1) {
        queue.push([x, y - 1]);
        grid[x][y - 1] = 2;
      }
      // 当前元素右边元素
      if (y + 1 < gridRowLen && grid[x][y + 1] === 1) {
        queue.push([x, y + 1]);
        grid[x][y + 1] = 2;
      }
    }

    min += 1;
  }

  return -1;
};

let arr = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
];

console.log(orangesRotting(arr));
