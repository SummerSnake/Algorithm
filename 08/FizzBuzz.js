/**
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 3. 如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 */

/**
 * @desc 直接循环取模判断
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const ret = [];

  for (i = 1; i <= n; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;

    if (isFizz && isBuzz) {
      ret.push('FizzBuzz');
    } else if (isFizz) {
      ret.push('Fizz');
    } else if (isBuzz) {
      ret.push('Buzz');
    } else {
      ret.push(i.toString());
    }
  }

  return ret;
};

console.log(fizzBuzz(15));

/**
 * @desc 字符串拼接法
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz2 = (n) => {
  const ret = [];

  for (i = 1; i <= n; i++) {
    let str = '';
    str += i % 3 ? '' : 'Fizz';
    str += i % 5 ? '' : 'Buzz';

    if (str === '') {
      str += i;
    }

    ret.push(str);
  }

  return ret;
};

console.log(fizzBuzz2(15));
