/**
 * 一球从100米高度自由落下，每次落地后反跳回原高度的一半，再落下。
 * 求它在第10次落地时，共经过多少米？第10次反弹多高？
 */
function calc() {
  let nowHeight = 100, nextHeight = nowHeight / 2;
  for (let i = 0; i < 9; i += 1) {
    // 每次增加弹起落地两次高度
    nowHeight = nowHeight + 2 * nextHeight;
    // 每次减去一半高度
    nextHeight = nextHeight / 2;
  }
  console.log(`共经过${nowHeight}米，第10次反弹${nextHeight}米`);
}

calc();
