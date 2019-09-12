/**
 * @desc 给定一个整数数组 array 和一个目标值 target，在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 给定 array = [2, 7, 11, 15], target = 9
 * 因为 array[0] + array[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

const array = [2, 7, 11, 21];
const target = 9;

// 嵌套 for 循环 方法
function getIndex(arr, target) {
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
        for (let j = i + 1; j < len; j += 1) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}

// console.log(getIndex(array, target));

// 哈希表

function getIndex2(arr, target) {
    const arrMap = new Map();
    const len = arr.length;

    for (let i = 0; i < len; i += 1) {
        let complement = target - arr[i];
        if (arrMap.has(complement)) {
            return [arrMap.get(complement), i];
        }
        arrMap.set(arr[i], i);
    }
}

console.log(getIndex2(array, target));
