/**
 * 大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
 */

/**
 * ~ 排序法
 */
function maxOfFour(arr) {
  let newArr = [];
  arr.forEach(item => {
    newArr.push(item.sort((a, b) => {
      return b - a;
    })[0]);
  });
  console.log(newArr);
}

let arr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
maxOfFour(arr);

/**
 * ~ Math.max()
 */
function maxOfFour2(arr) {
  let newArr2 = [];
  arr.forEach(item => {
    newArr2.push(Math.max.apply(null, item));
  });
  console.log(newArr2);
}

let arr2 = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
maxOfFour2(arr2);
