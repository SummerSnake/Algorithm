/**
 * 统计数组中数组出现的次数，并按出现次数排序
 */

let arr = [1, 2, 3, 4, 5, 1, 3, 2, 5, 2, 1, 3, 3, 3, 2];
let obj = {};
arr.forEach((item) => {
    if (obj[item]) {
        obj[item] += 1;
    } else {
        obj[item] = 1;
    }
});

/**
 * 对象方法
 */
let arr2 = [];
for (let key in obj) {
    arr2.push({
        name: key,
        count: obj[key]
    });
}

arr2.sort((a, b) => a.count - b.count);
console.log(arr2);

/**
 * 二维数组方法
 */
let arr3 = [];
for (let key in obj) {
    arr3.push([
        key, obj[key]
    ]);
}

arr3.sort((a, b) => a[1] - b[1]);
console.log(arr3);