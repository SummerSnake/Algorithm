/**
 * @desc 检查一个字符串(str)是否以指定的字符串(target)结尾。如果是，返回true;如果不是，返回false。
 *
 * substring() 方法用于提取字符串中介于两个指定下标之间的字符。substring(start,stop)；
 * substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。
 */
function confirmEnding(str, target) {
  console.log(str.substring(str.length - target.length) === target);
}

confirmEnding("He has to give me a new name", "name");

/**
 * @desc 重复一个指定的字符串 num 次，如果 num 是一个负数则返回一个空字符串。
 */
function repeatNum(str, num = 0) {
  let originStr = "";

  if (num >= 0) {
    for (let i = 0; i < num; i += 1) {
      originStr += str;
    }
  }

  return originStr;
}

let str = "abcde";
console.log(repeatNum(str, -1));

/**
 * @desc 把一个数组arr按照指定的数组大小size分割成若干个数组块。
 *
 * 说明：例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];  chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
 * splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 * splice(index,howmany,item1,.....,itemX)，该方法会改变原始数组。
 */
function arrChunk(arr = [], size = 0) {
  let newArrLen = Math.ceil(arr.length / size);
  let innerArr = [];

  for (let i = 0; i < newArrLen; i += 1) {
    innerArr.push(arr.splice(0, size));
  }

  console.log(innerArr);
}

arrChunk([1, 2, 3, 4, 5], 2);

/**
 * @desc 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
 */
function charEqual(arr = []) {
  let isExist = false;
  let arrZero = arr[0].toLowerCase();
  let arrOne = arr[1].toLowerCase();

  Array.prototype.forEach.call(arrOne, item => {
    isExist = arrZero.indexOf(item) !== -1;
  });

  console.log(isExist);
}

charEqual(["Alien", "line"]);

/**
 * @desc 猜数字(查找两个数组中 下标与值都相等的数 的总个数)
 *
 * 输入：guess = [2,2,3], answer = [3,2,1]
 * 输出：1
 */
function guessGame(guess, answer) {
  let i = 0;
  let num = 0;
  while (i < 3) {
    if (guess[i] === answer[i]) {
      num += 1;
    }
    i += 1;
  }
  return num;
}

console.log(guessGame([2, 2, 3], [3, 2, 1]));
