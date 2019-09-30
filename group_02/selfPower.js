/**
 * @desc 计算数的次幂
 */
function calcPow(number = 1, powNum = 1) {
  return Math.pow(number, powNum);
}

/**
 * 打印出所有的“水仙花数”；
 * 所谓“水仙花数”是指一个三位数，其各位数字立方和等于该数本身；
 * 例如：153是一个“水仙花数”，因为153=1的三次方+5的三次方+3的三次方；
 * 程序分析：利用for循环控制100-999个数，每个数分解出个位，十位，百位。
 */
function narcissus() {
  let units = 0;
  let tens = 0;
  let hundreds = 0;

  for (let i = 100; i < 1000; i++) {
    units = i % 10; // 个位数
    tens = parseInt((i / 10) % 10, 10); // 十位数
    hundreds = parseInt(i / 100, 10); // 百位数

    if (i === calcPow(units, 3) + calcPow(tens, 3) + calcPow(hundreds, 3)) {
      console.info(`水仙花数： ${i}`);
    }
  }
}

narcissus();

/**
 * 打印出所有的“水仙花数”；
 * 所谓“水仙花数”是指一个三位数，其各位数字立方和等于该数本身；
 * 例如：153是一个“水仙花数”，因为153=1的三次方+5的三次方+3的三次方；
 * 程序分析：利用for循环控制100-999个数，每个数分解出个位，十位，百位。
 */
function rose() {
  let units = 0;
  let tens = 0;
  let hundreds = 0;
  let thousands = 0;

  for (let i = 1000; i < 10000; i++) {
    units = i % 10; // 个位数
    tens = parseInt((i / 10) % 10, 10); // 十位数
    hundreds = parseInt((i / 100) % 10, 10); // 百位数
    thousands = parseInt(i / 1000, 10); // 千位数

    if (i === calcPow(units, 4) + calcPow(tens, 4) + calcPow(hundreds, 4) + calcPow(thousands, 4)) {
      console.log(`四叶玫瑰数： ${i}`);
    }
  }
}

rose();
