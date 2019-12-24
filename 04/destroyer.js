/**
 * 一个包含两个数字的数组，计算这两个数字和它们之间所有数字的和。
 */
function arrayItemTotal(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let total = 0;
  for (let i = min; i <= max; i += 1) {
    total += i;
  }
  console.log(total);
}

let arr = [5, 10];
arrayItemTotal(arr);

/**
 * 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
 */
function destroyer(arr) {
  let destroyEleArr = [];
  let filtered;
  for (let i = 1; i < arguments.length; i += 1) {
    destroyEleArr.push(arguments[i]);
  }
  filtered = arguments[0].filter(arg => {
    return !destroyEleArr.includes(arg);
  });
  console.log(filtered);
}

destroyer([3, 5, 7, 9, 'Willa'], 'Willa', 9);

/**
 * 验证一个数是否是素数
 *
 * 质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数。
 *
 * 1. 如果这个数是 2 或 3，一定是素数;
 * 2. 如果是偶数，一定不是素数;
 * 3. 如果这个数不能被3 ~ 它的平方根中的任一数整除，则必定是素数，而且除数可以每次递增2(排除偶数)
 */
function isPrime(num) {
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  let divisor = 3; // 除数
  const limit = Math.sqrt(num); // 求平方根

  while (limit >= divisor) { // 3 ~ num 的平方根
    if (num % divisor === 0) { // 素数不能被3整除
      return false;
    } else {
      divisor += 2; // 除数可以每次递增2(排除偶数)
    }
  }

  return true;
}

console.log(isPrime(37));

/**
 * 求两个正整数a, b的最大公约数（377, 319）
 *
 * 公约数，亦称“公因数”，它是一个能被若干个整数同时均整除的整数；
 * 如果一个整数同时是几个整数的约数，称这个整数为它们的“公约数”；
 * 公约数中最大的称为最大公约数；
 * 对任意的若干个正整数，1总是它们的公因数。
 *
 * 辗转相除法（欧几里德算法）
 * 1. 用较大数除以较小数；（377 % 319 = 58）
 * 2. 再用上一次的较小数除以出现的余数；（319 % 58 = 29）
 * 3. 递归步骤2。直到最后余数是0 最后的除数就是这两个数的最大公约数。（58 % 29 = 0） 29
 */
function greatestCommonDivisor(a, b) {
  return b === 0 ? a : greatestCommonDivisor(b, a % b);
}

console.log(greatestCommonDivisor(377, 319));
