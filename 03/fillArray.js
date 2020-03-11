/**
 * @desc 完成一个函数，接受数组作为参数，数组元素为整数或者数组，数组元素包含整数或数组，函数返回扁平化后的数组
 * @param { array } arr 要转换的数组
 * @param { array } result 每次递归扁平化后的数组
 * @return { array } 扁平化后的数组
 */
const flat = (arr = [], result = []) => {
  arr.map((item) => {
    if (typeof item === 'number') {
      result.push(item);
    } else {
      flat(item, result);
    }
  });

  return result;
};

let arr = [1, [2, [[3, 4], 5], 6]];
console.log(flat(arr));

/**
 * @desc 用100个随机整数对应的字符串填充数组
 * @param { number } start 起始值
 * @param { number } end 结束值
 * @param { array } arr 要填充的数组
 * @return { array } 填充完成的数组
 */
const fillArray = (start = 1, end = 100, arr = []) => {
  let newArr = Array.isArray(arr) ? arr : [];
  let newEnd = end <= start ? start + 100 : end;
  let arrRange = newEnd - start;

  for (let i = 0; i <= 100; i += 1) {
    newArr.push(`${Math.floor(Math.random() * arrRange) + start}`);
  }

  return newArr;
};

console.log(fillArray(100, 1000, ['n']));

/**
 * @desc 将类数组对象转换为数组
 * @param { object } obj 要转换的类数组
 * @return { array } 转换完成的数组
 */
const objTurnArr = (obj = {}) => {
  let newArr = [];

  if (Object.prototype.toString.call(obj) === '[object Object]' && Object.keys(obj).length > 0) {
    newArr = Array.prototype.slice.call(obj);
  }

  return newArr;
};

// 有 length, 为类数组对象
let obj = {
  0: 'China',
  1: 'ShanDong',
  2: 'QingDao',
  3: 'SummerSnake',
  length: 4,
};

console.log(objTurnArr(obj));

/**
 * @desc 1100/1 + 1100/2 + 1100/3 + ... +1100/n = 10000 用递归方式，写出求n的代码
 * @param { number } result 累加值，用于匹配边界
 * @param { number } n +1递增
 * @return { number } n的最终值
 */
const recursion = (result, n) => (result >= 10000 ? n - 1 : recursion(result + 1100 / n, n + 1));

console.log(recursion(0, 1));

/**
 * @desc 给定两个整数数组 startTime（开始时间）和 endTime（结束时间），并指定一个整数 queryTime 作为查询时间。
 *       已知，第 i 名学生在 startTime[i] 时开始写作业并于 endTime[i] 时完成作业。
 *       请返回在查询时间 queryTime 时正在做作业的学生人数。
 *       即返回能够使 queryTime 处于区间 [startTime[i], endTime[i]]（含）的学生人数。
 */
const busyStudent = (startTime, endTime, queryTime) => {
  let ret = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      ret += 1;
    }
  }

  return ret;
};

const startTime = [1, 2, 3];
const endTime = [3, 2, 7];
const queryTime = 4;
console.log(busyStudent(startTime, endTime, queryTime));
