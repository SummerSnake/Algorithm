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

// calc();

/**
 * 一只猴子摘了N个桃子，第一天吃了一半又多吃了一个，
 * 第二天又吃了余下的一半又多吃了一个，
 * 到第十天的时候发现还有一个。
 * 求一共有多少桃子。
 */
function calc2() {
  let total = 0; // 桃子总数
  let todayNum = 1; // 今天剩余的桃子（到第十天的时候发现还有一个）

  for (let i = 9; i > 0; i -= 1) {
    // 每天吃一半 +1，则 (todayNum + 1) * 2 即为前一天剩余的桃子
    total = (todayNum + 1) * 2;
    todayNum = total;
    console.log(`第${i}天的桃子数为：${todayNum}；`);
  }
  console.log(`一共有${total}个桃子。`);
}

calc2();
