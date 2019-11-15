/**
 * 随机生成指定长度的字符串。
 * ~ charAt() 方法可返回指定位置的字符。
 * ~ floor() 方法返回小于等于所传参数的最大整数。
 */
function randomStr(num) {
    let str = 'abcdefghijkmnopqrstuvwxyz9876543210';
    let result = '';
    let len = str.length;
    let i = 0;
    while (i < num) {
        result += str.charAt(Math.floor(Math.random() * len));
        i += 1;
    }
    console.log(result);
}

randomStr(11);

/**
 * 删除数组中的所有假值(false , null , 0 , NaN, undefined , "")。
 */
function bouncer(arr) {
    console.log(arr.filter(Boolean));
}

bouncer([7, "ate", "", false, 9, null, NaN, undefined, 0]);

/**
 * 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
 */
function slasher(arr, howMany) {
    arr.splice(0, howMany);
    console.log(arr);
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
