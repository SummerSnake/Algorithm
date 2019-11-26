/**
 * 回文数
 *
 * “回文”是指正读反读都能读通的句子，它是古今中外都有的一种修辞方式和文字游戏，如“我为人人，人人为我”等。
 * 在数学中也有这样一类数字有这样的特征，成为回文数（palindrome number）。
 */

/**
 * @desc 字符串反转法
 */
function isPalindrome(num) {
  return num >= 0 && String.prototype.split.call(num, '').reverse().join('') === num.toString();
}

/**
 * @desc 中心扩展法
 */
function isPalindrome2(num) {
  const numStr = num.toString();
  const len = numStr.length;
  const center = parseInt(len / 2);
  const isEven = len % 2 === 0;
  let left = center - 1;
  let right = isEven ? center : center + 1;

  while (left >= 0 && right <= len) {
    if (numStr[left] !== numStr[right]) {
      return false;
    }

    left -= 1;
    right += 1;
  }
  return true;
}

/**
 * @desc 将数字反转，进行判断
 *
 * 1. 如 s=121 ， 第一次循环先取模 是 y=1，s除以10向下取整s=12；
 * 2. 第二次循环 y= 1*10+2 =12 , s=1；
 * 3. 第三次循环 y= 12*10+1 =121, s=0。
 */
function isPalindrome3(x) {
  let s = x;
  let y = 0;

  while (s >= 1) {
    y = y * 10 + s % 10;
    s = Math.floor(s / 10);
  }
  return y === x;
}

console.log(isPalindrome(121));
console.log(isPalindrome2(121));
console.log(isPalindrome3(121));
