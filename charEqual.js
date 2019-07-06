/**
 * 检查一个字符串(str)是否以指定的字符串(target)结尾。如果是，返回true;如果不是，返回false。
 * substring() 方法用于提取字符串中介于两个指定下标之间的字符。
 * stringObject.substring(start,stop)
 * substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。
 */
function confirmEnding(str, target) {
    console.log(str.substring(str.length - target.length) === target);
}

confirmEnding("He has to give me a new name", "name");

/**
 * 重复一个指定的字符串 num 次，如果 num 是一个负数则返回一个空字符串。
 */
function repeatNum(str, num = 0) {
    let originStr = '';
    if (num < 0) {
        return '';
    }
    for (let i = 0; i < num; i += 1) {
        originStr += str;
    }
    console.log(originStr);
}

let str = "abcde";
repeatNum(str, -1);

/**
 * 把一个数组arr按照指定的数组大小size分割成若干个数组块。
 * 说明：例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];  chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
 * splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 * 该方法会改变原始数组
 * arrayObject.splice(index,howmany,item1,.....,itemX)
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
 * 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
 */
function charEqual(arr = []) {
    let isExist = false;
    let arrZero = arr[0].toLowerCase();
    let arrOne = arr[1].toLowerCase();
    Array.prototype.forEach.call(arrOne, item => {
        isExist = (arrZero.indexOf(item) !== -1);
    });
    console.log(isExist);
}

charEqual(["Alien", "line"]);