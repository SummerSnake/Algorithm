/**
 * 洗牌算法
 */

/**
 * @desc 去重(低效方法)
 * @param { number } num 牌的张数
 * @return { number[] }
 */
const shuffle = (num) => {
  let ret = [];

  while (ret.length < num) {
    let card = Math.floor(Math.random() * num + 1);

    while (ret.includes(card)) {
      card = Math.floor(Math.random() * num + 1);
    }

    ret.push(card);
  }

  return ret;
};

console.log(shuffle(11));

/**
 * @desc arr.sort(() => Math.random() - 0.5)；
 *       v8 引擎出于对性能的考虑，对短数组（例如长度小于10）使用的是插入排序，对长数组则使用了快速排序；
 *       所以结果每个元素有很大机率在它原来的位置附近出现，并不是真正的随机排序。
 * @param { number } num 牌的张数
 * @return { number[] }
 */
const shuffle2 = (num) => {
  let ret = [];

  for (let i = 1; i <= num; i++) {
    ret.push(i);
  }

  ret.sort(() => Math.random() - 0.5);

  return ret;
};

console.log(shuffle2(11));

/**
 * @desc 费雪耶兹(Fisher–Yates)也被称作高纳德(Knuth)随机置乱算法
 *       1. 最后一个数和前面任意 n-1 个数中的一个交换；
 *       2. 然后倒数第二个数和前面任意 n-2 个数中的一个交换；
 *       3. 依次类推。
 * @param { number } num 牌的张数
 * @return { number[] }
 */
const shuffle3 = (num) => {
  let ret = [];

  for (let i = 1; i <= num; i++) {
    ret.push(i);
  }

  for (let i = ret.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [ret[j], ret[i]] = [ret[i], ret[j]];
  }

  return ret;
};

console.log(shuffle3(11));
