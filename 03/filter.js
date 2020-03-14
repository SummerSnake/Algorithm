/**
 * @desc multiple是一个计算乘积的函数，接收一些number类型的参数，并返回乘积结果。
 * @param { number[] } 箭头函数没有 arguments，使用...rest代替
 * @return { number } 所传参数的乘积
 */
const multiple = (...rest) => {
  let result = 1;

  for (let i = 0, len = rest.length; i < len; i += 1) {
    result = result * rest[i];
  }

  return result;
};

console.log(multiple(2, 3, 4));

/**
 * @desc Array.filter(function(currentValue, index, arr), thisValue)
 * @param { any } currentValue 必须。当前元素的值
 * @param { number } index 可选。当前元素的索引值
 * @param { any[] } arr 可选。当前元素属于的数组对象
 * @param { any } thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值，
 *                          如果省略了 thisValue ，"this" 的值为 "undefined"。
 */
const ages = [19, 20];
const students = [
  [19, 'Male', '80kg'],
  [20, 'Female', '50kg'],
  [20, 'Female', '51kg'],
  [24, 'Female', '60kg']
];

const filteredData = arr => {
  // 不可以使用箭头函数，箭头函数不会绑定关键字this，arguments，super，new.target
  const result = arr.filter(function(value) {
    for (let i = 0; i < this.length; i += 1) {
      // this 指向ages
      if (this[i] === value[0]) {
        return true;
      }
    }

    return false;
  }, ages);

  return result;
};

console.log(filteredData(students));

/**
 * @desc 写一个函数，传入两个或两个以上的数组，将数组合并排序去重。
 * @return { any[] } 处理后的新数组
 */
const uniteArray = (...rest) =>
  rest.reduce((total = [], currEle) =>
    Array.from(new Set(total.concat(currEle.filter(item => !total.includes(item)))))
  );

const arr1 = [2, 3, 4, 4, 5];
const arr2 = [2, 3, 4, 4, 5, 6, 7, 8];
console.log(uniteArray(arr1, arr2));

/**
 * @desc x是一个随机正整数，定义一个函数，
 *       要求返回值大于等于0小于等于255，并且与x拼接起来的数字除以97刚好余1
 * @param { number } x 随机正整数
 * @return { number } 符合条件的数
 */
const concatRandom = x => {
  let i = 0;

  while (i <= 255) {
    if (parseInt(x + i.toString()) % 97 === 1) {
      break;
    }
    i += 1;
  }

  return i;
};

const randomX = (min, max) => Math.ceil(Math.random() * (max - min + 1)) - 1 + min;

const x = randomX(0, 999999);
console.log(concatRandom(x));
