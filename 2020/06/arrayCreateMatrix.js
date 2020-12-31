/**
 *@desc 给定一个数组 const arr = [[1,2],3,[4,5,6]];
 *      定义一个函数，传入arr后，返回值为一个二维数组：
 *      [[1,3,4],[2,3,4],[1,3,5],[2,3,5],[1,3,6],[2,3,6]]
 */
const arr = [[1, 2], 3, [4, 5, 6]];

/**
 * @desc 递归算法
 * @param { any[] } array
 */
const createMatrix = (array) => {
  const result = [];

  const func = (arr, i) => {
    if (i > -1) {
      // 1、取出原始数组当前元素
      let items = array[i];
      // 2、如果当前元素不是数组，则将其转为数组
      if (!Array.isArray(items)) {
        items = [items];
      }
      // 3、循环当前元素，生成结果数组子元素
      items.forEach((item) => func([item, ...arr], i - 1));
    } else {
      // 4、循环结束，将子元素 push 进结果数组
      result.push(arr);
    }
  };

  func([], array.length - 1);

  return result;
};

console.log(createMatrix(arr));

/**
 * @desc ES6 reduce
 * @param { any } arr1
 * @param { any } arr2
 */
const createMatrix2 = (arr1, arr2) => {
  const result = [];
  // 1、将非数组类型元素转为数组
  const arr1Format = Array.isArray(arr1) ? arr1 : [arr1];
  const arr2Format = Array.isArray(arr2) ? arr2 : [arr2];

  arr1Format.forEach((i) => {
    arr2Format.forEach((j) => {
      // 2、判断 arr1 当前子元素是否为数组，将其转换为数组并与 arr2 当前元素合并生成新数组
      const item = (Array.isArray(i) ? i : [i]).concat(j);
      // 3、将生成的新数组 push 进结果数组
      result.push(item);
    });
  });

  return result;
};

// reduce(function(prev, current, index, arr))  prev为数组第一个元素，current 为第二个
console.log(arr.reduce((prev, current) => createMatrix2(prev, current)));
