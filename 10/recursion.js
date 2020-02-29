/**
 * @desc 第一年薪资是10k，涨幅每年5%，那么50年后薪资多少钱？
 * @param { number } salary 当前年度薪资
 * @param { number } salary 当前年度
 * @return { number }
 */
const recursion = (salary = 0, n = 1) =>
  n > 50 ? Math.round(salary) : recursion((salary *= 1.05), n + 1);

console.log(recursion(10000));

/**
 * @desc 一张纸厚为0.1毫米，该纸对折多少次会超过珠穆朗玛峰？
 * @param { number } thickness 当前次数纸的厚度
 * @param { number } salary 当前次数
 * @return { number }
 */
const recursion2 = (thickness = 0, times = 0) =>
  thickness > 8848000 ? times : recursion2(thickness * 2, times + 1);

console.log(recursion2(0.1));

/**
 * @desc 购买20瓶橙汁，每三个瓶盖可以兑换1瓶橙汁，求最后可以得到多少瓶橙汁。
 * @param { number } juiceSum 当前购买橙汁的瓶数
 * @return { number }
 */
const recursion3 = (juiceSum = 0) => {
  // 总瓶数
  let sum = juiceSum;

  const fn = (capNum = 0) => {
    // 瓶盖可换得瓶数
    let a = Math.floor(capNum / 3);
    // 瓶盖换剩瓶盖数
    let b = capNum % 3;

    sum += a;

    // 剩余瓶盖数量
    let surplus = a + b;

    return surplus < 3 ? sum : fn(surplus);
  };

  return fn(juiceSum);
};

console.log(recursion3(20));

/**
 * @desc 有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，
 *       假如兔子都不死，问每个月的兔子总数为多少？
 *        (裴波那契数列 => 前两项之和就是第三项)
 * @param { number } month 第几个月
 * @return { number }
 */
const recursion4 = (month = 0) => {
  if (month === 1 || month === 2) {
    return 1;
  } else {
    return recursion4(month - 2) + recursion4(month - 1);
  }
};

console.log(recursion4(6));
