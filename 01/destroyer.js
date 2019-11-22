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
