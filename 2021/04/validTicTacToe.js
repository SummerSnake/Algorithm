/**
 * 有效的井字游戏 (力扣 794)
 *
 * 给定一个字符串数组 board 表示井字游戏的棋盘。
 * 当且仅当在井字游戏过程中，棋盘有可能达到 board 所显示的状态时，才返回 true 。
 *
 * 1. 由于 X 先手，O 后手，两者轮流下子，因此 O 的数量不会超过 X，且两者数量差不会超过 1；
 * 2. 若局面是 X 获胜，导致该局面的最后一个子必然是 X，此时必然有 X 数量大于 O（X 为先手）；
 * 3. 若局面是 O 获胜，导致该局面的最后一个子必然是 O，此时必然有 X 数量等于 O（X 为先手）；
 * 4. 局面中不可能出现两者同时赢（其中一方赢后，游戏结束）。
 */

const board = ['OXX', 'XOX', 'OXO'];

/**
 * @desc 分类讨论
 * @param { string[] } board
 * @return { boolean }
 */
const validTicTacToe = (board) => {
  // 校验是否是赢的局面
  const isWin = (board, char) => {
    for (let i = 0; i < 3; i++) {
      // 列
      if (char === board[0][i] && char === board[1][i] && char === board[2][i]) {
        return true;
      }
      // 行
      if (char === board[i][0] && char === board[i][1] && char === board[i][2]) {
        return true;
      }
    }
    // 对角线
    if (char === board[0][0] && char === board[1][1] && char === board[2][2]) {
      return true;
    }
    if (char === board[0][2] && char === board[1][1] && char === board[2][0]) {
      return true;
    }

    return false;
  };

  let xCount = 0;
  let oCount = 0;
  for (let row of board) {
    for (let char of row) {
      xCount = char === 'X' ? xCount + 1 : xCount;
      oCount = char === 'O' ? oCount + 1 : oCount;
    }
  }

  // 1. 由于 X 先手，O 后手，两者轮流下子，因此 O 的数量不会超过 X，且两者数量差不会超过 1；
  if (oCount !== xCount && oCount !== xCount - 1) {
    return false;
  }

  // 2. 若局面是 X 获胜，导致该局面的最后一个子必然是 X，此时必然有 X 数量大于 O（X 为先手）；
  if (isWin(board, 'X') && oCount !== xCount - 1) {
    return false;
  }

  // 若局面是 O 获胜，导致该局面的最后一个子必然是 O，此时必然有 X 数量等于 O（X 为先手）；
  if (isWin(board, 'O') && oCount !== xCount) {
    return false;
  }

  return true;
};

validTicTacToe(board);
