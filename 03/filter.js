/**
 * multiple是一个计算乘积的函数，接收一些number类型的参数，并返回乘积结果。
 */
function multiple() {
  let result = 1;
  for (let i = 0, len = arguments.length; i < len; i += 1) {
    result = result * arguments[i];
  }
  console.log(result);
}

multiple(2, 3, 4);

/**
 * array.filter(function(currentValue,index,arr), thisValue)
 * currentValue 必须。当前元素的值
 * index 可选。当前元素的索引值
 * arr 可选。当前元素属于的数组对象
 * thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
 */
let ages = [19, 20];
let students = [
  [19, "Male", "80kg"],
  [20, "Female", "50kg"],
  [20, "Female", "51kg"],
  [24, "Female", "60kg"]
];

const filteredData = students.filter(function(value) {
  // 不可以使用箭头函数
  for (let i = 0; i < this.length; i += 1) {
    // this 指向ages
    if (this[i] === value[0]) {
      return true;
    }
  }
  return false;
}, ages);

console.log(filteredData);

/**
 * 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
 */
function unite() {
  return Array.prototype.slice.call(arguments).reduce((total = [], curEle) => {
    return total.concat(curEle.filter(item => !total.includes(item)));
  });
}

console.log(
  unite(
    [19, "Male", "80kg"],
    [20, "Female", "50kg"],
    [20, "Female", "51kg"],
    [24, "Female", "60kg"]
  )
);
