/**
 * @desc 检查一个字符串(str)是否以指定的字符串(target)结尾。如果是，返回true;如果不是，返回false。
 *       substring() 方法用于提取字符串中介于两个指定下标之间的字符。substring(start,stop)；
 *       substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。
 * @param { string } str
 * @param { string } target
 * @return { boolean }
 */
const confirmEnding = (str, target) => str.substring(str.length - target.length) === target;

const str = 'He has to give me a new name';
const target = 'name';
console.log(confirmEnding(str, target));

/**
 * @desc 重复一个指定的字符串 num 次，如果 num 是一个负数则返回一个空字符串。
 * @param { string } str
 * @param { number } num
 * @return { string }
 */
const repeatNum = (str, num = 0) => {
  let ret = '';

  if (num >= 0) {
    for (let i = 0; i < num; i += 1) {
      ret += str;
    }
  }

  return ret;
};

let str1 = 'abcde';
console.log(repeatNum(str1, 2));

/**
 * @desc 把一个数组arr按照指定的数组大小size分割成若干个数组块。
 *       说明：例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];  chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
 *       splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 *       splice(index,howmany,item1,.....,itemX)，该方法会改变原始数组。
 * @param { any[] } arr
 * @param { number } size
 * @return { any[][] }
 */
const arrChunk = (arr = [], size = 0) => {
  let newArrLen = Math.ceil(arr.length / size);
  let innerArr = [];

  for (let i = 0; i < newArrLen; i += 1) {
    innerArr.push(arr.splice(0, size));
  }

  return innerArr;
};

console.log(arrChunk([1, 2, 3, 4, 5], 2));

/**
 * @desc 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
 * @param { string[] } arr
 * @return { boolean }
 */
const charEqual = (arr = []) => {
  let isExist = false;
  let arrZero = arr[0].toLowerCase();
  let arrOne = arr[1].toLowerCase();

  Array.prototype.forEach.call(arrOne, (item) => {
    isExist = arrZero.indexOf(item) !== -1;
  });

  console.log(isExist);
};

charEqual(['Alien', 'line']);

/**
 * @desc 猜数字(查找两个数组中 下标与值都相等的数 的总个数)
 *       输入：guess = [2,2,3], answer = [3,2,1]
 *       输出：1
 * @param { any[] } arr
 * @return { any }
 */
const guessGame = (guess, answer) => {
  let i = 0;
  let num = 0;
  let len = Math.min(guess.length, answer.length);

  while (i < len) {
    if (guess[i] === answer[i]) {
      num += 1;
    }

    i += 1;
  }

  return num;
};

console.log(guessGame([3, 2, 3, 4], [3, 2, 1]));
