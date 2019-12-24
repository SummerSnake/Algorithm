/**
 * 数组去重
 * Obj属性方法
 */
function uniqueArray(array = []) {
  if (Array.isArray(array)) {
    if (array.length <= 1) {
      return array;
    }
    let hasItem = {};
    let uniqueArr = [];
    array.forEach(item => {
      if (!hasItem[item]) {
        hasItem[item] = true;
        uniqueArr.push(item);
      }
    });
    console.log(uniqueArr.sort((a, b) => {
      return a - b;
    }));
  } else {
    console.log('This is not an array.');
  }
}

let arr = [1, 13, 24, 11, 11, 14, 1, 2];
uniqueArray(arr);

/**
 * 数组去重
 * indexOf 或 includes方法
 */
function uniqueArray2(array = []) {
  if (Array.isArray(array)) {
    if (array.length <= 1) {
      return array;
    }
    let arr = [];
    array.forEach(item => {
      if (arr.indexOf(item) === -1) {
        arr.push(item);
      }
    });
    console.log(arr.sort((a, b) => {
      return a - b;
    }));
  } else {
    console.log('This is not an array.');
  }
}

let arr2 = [1, 13, 24, 11, 11, 14, 1, 2];
uniqueArray2(arr2);

/**
 * 数组去重
 * ES6 Set
 */
let arr3 = [1, 13, 24, 11, 11, 14, 1, 2];
const set = new Set([...arr3].sort((a, b) => {
  return a - b;
}));

console.log(Array.from(set));
