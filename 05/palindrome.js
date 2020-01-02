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
  return (
    num >= 0 &&
    String.prototype.split
      .call(num, "")
      .reverse()
      .join("") === num.toString()
  );
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
    y = y * 10 + (s % 10);
    s = Math.floor(s / 10);
  }
  return y === x;
}

/**
 * @desc 反转数字后半部分，然后与前半部分进行比较
 *
 * 1. 对于数字 1221，如果执行 1221 % 10，得到最后一位数字 1；
 * 2. 要得到倒数第二位数字，先通过除以 10 把最后一位数字从 1221 中移除，Math.floor(1221 / 10) = 122，
 *    再重复步骤一，122 % 10 = 2，就可以得到倒数第二位数字。
 * 3. 如果我们把最后一位数字(步骤一结果)乘以 10，再加上倒数第二位数字(步骤二结果)，1 * 10 + 2 = 12，
 *    就得到了我们想要的反转后的数字。
 * 4. 将原始数字除以 10，然后给反转后的数字乘上 10，当原始数字小于反转后的数字时，就意味着我们已经处理了一半位数的数字
 */
function isPalindrome4(x) {
  // 所有负数都不可能是回文，例如：-123 不是回文，因为 - 不等于 3；
  // 如果数字的最后一位是 0，为了使该数字为回文，则其第一位数字也应该是 0，只有 0 满足这一属性
  if (x < 0 || (x % 10 < 0 && x !== 0)) {
    return false;
  }

  let reverseNum = 0;

  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reverseNum || x === Math.floor(reverseNum / 10); // 处理奇数数字 reverseNum 比原始数字多一位的情况
}

console.log(isPalindrome(121));
console.log(isPalindrome2(121));
console.log(isPalindrome3(121));
console.log(isPalindrome4(121));
