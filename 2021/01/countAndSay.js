/**
 * 外观数列 (力扣 38)
 *
 * 给定一个正整数 n ，输出外观数列的第 n 项；
 * 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
 */

/**
 * @desc 递归
 * @param { number } n
 * @return { string }
 */
const countAndSay = (n) =>{
  if (n === 1) {
    return '1';
  }

  let prev = countAndSay(n - 1);
  let res = '';
  let i = 0;
  let j = 0;

  while (j < prev.length) {
    while (prev[i] === prev[j] && j < prev.length) {
      j++;
    }

    res = `${res}${j - i}${prev[i]}`;
    i = j;
  }

  return res;
};

countAndSay(4);
