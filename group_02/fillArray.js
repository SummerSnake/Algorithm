/**
 * @desc 完成一个函数，接受数组作为参数，数组元素为整数或者数组，数组元素包含整数或数组，函数返回扁平化后的数组
 * @param arr 要转换的数组
 * @param result 要得到的结果
 */
function flat(arr, result) {
    let newArr = Array.isArray(result) ? result : [];

    arr.map(item => {
        if (typeof item === 'number') {
            newArr.push(item);
        } else {
            flat(item, newArr);
        }
    });
    // console.log(newArr);
}

let arr = [1, [2, [[3, 4], 5], 6]];
flat(arr);

/**
 * @desc 用100个随机整数对应的字符串填充数组
 * @param start 起始值
 * @param end 结束值
 * @param arr 要得到的结果
 */
function fillArray(start = 1, end = 100, arr) {
    let newArr = Array.isArray(arr) ? arr : [];
    let newEnd = end <= start ? start + 100 : end;
    let arrRange = newEnd - start;

    for (let i = 0; i <= 100; i += 1) {
        newArr.push(`${Math.floor(Math.random() * arrRange) + start}`);
    }
    // console.log(newArr);
}

fillArray(100, 1000, ['n']);

/**
 * @desc 将类数组对象转换为数组
 * @param obj 要转换的类数组
 */
function objTurnArr(obj = {}) {
    let newArr = [];
    if (Object.prototype.toString.call(obj) === "[object Object]" && Object.keys(obj).length > 0) {
        newArr = Array.prototype.slice.call(obj);
    }
    console.log(newArr);
}

// 有 length, 为类数组对象
let obj = {
    0: 'China',
    1: 'ShanDong',
    2: 'QingDao',
    3: 'SummerSnake',
    length: 4
};

objTurnArr(obj);
