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
