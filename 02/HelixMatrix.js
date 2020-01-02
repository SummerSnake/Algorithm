/**
 * @desc 螺旋矩阵
 *
 * 5阶的矩阵需要进行 5*1 + 4*2 + 3*2 + 2*2 + 1*2，共9次循环；
 * 6阶的矩阵需要 6*1 + 5*2 + 4*2 + 3*2 + 2*2 + 1*2，共11次循环；
 * 7阶 需要 7*1 + 6*2 + 5*2 + 4*2 + 3*2 + 2*2 + 1*2，共13次循环。
 */

/**
 * @desc 螺旋矩阵
 * @param { number } size 要输出的长与宽
 * @param { number } startNum 开始输出的数字
 * @param { array } directions 方向列表，包含4个整数的数组， 1上2下3左4右
 * @param { number } startX 开始y坐标
 * @param { number } startY 开始x坐标
 * @param { number } rule 输出规则，正数递增，负数递减
 */
const HelixMatrix = (size, startNum, directions, startX, startY, rule) => {
  // 初始化存储区域，建立二维数组
  const arr = [];
  let i = 0;
  while (i < size) {
    arr[i] = [];
    i += 1;
  }

  let s = size; // 当前输出大小
  let n = 1; // 还有几次循环要减少输出大小，初始为1，首次循环只有一次（见头部描述）
  let directionID = 0; // 当前输出方向
  let x = startX; // 当前的x坐标
  let y = startY; // 当前的y坐标
  let num = startNum; // 当前的数字
  let result = ""; // 输出结果

  // 修正开始坐标
  const firstDirection = directions[directionID];
  switch (firstDirection) {
    case 1:
      x += 1;
      break;
    case 2:
      x -= 1;
      break;
    case 3:
      y += 1;
      break;
    case 4:
      y -= 1;
      break;
    default:
  }

  // 循环输出
  while (s > 0) {
    // 生成一行或一列数字
    const direction = directions[directionID]; // 本次输出方向
    let j = 0;
    while (j < s) {
      // 首次循环，开始坐标与上方修正初始坐标相关联
      switch (direction) {
        case 1:
          x -= 1;
          break;
        case 2:
          x += 1;
          break;
        case 3:
          y -= 1;
          break;
        case 4:
          y += 1;
          break;
        default:
      }
      // 将目标数字输出到指定坐标
      arr[x][y] = num;
      num += rule;
      j += 1;
    }
    // 每循环两次，输出大小就减少1（见头部描述）
    n -= 1;
    if (!n) {
      n = 2;
      s -= 1;
    }
    // 控制方向的改变
    directionID += 1;
    if (directionID === 4) {
      directionID = 0;
    }
  }
  // 计算输出结果
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      result += arr[i][j] + "\t";
    }
    result += "\n";
  }
  return result;
};

//演示: 顺时针输出
let str = HelixMatrix(10, 1, [4, 2, 3, 1], 0, 0, 1);
console.log(str);
//演示: 逆时针输出
str = HelixMatrix(9, 1, [2, 4, 1, 3], 0, 0, 1);
console.log(str);
//演示: 从右下角开始的逆时针输出
str = HelixMatrix(9, 1, [1, 3, 2, 4], 8, 8, 1);
console.log(str);
//演示: 从右上角开始的顺时针输出 从200开始每次减2
str = HelixMatrix(9, 200, [2, 3, 1, 4], 0, 8, -2);
console.log(str);
