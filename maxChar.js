/**
 * 统计一个字符串出现次数最多的字符。
 */
function findMaxDuplicateChar(str = '') {
    if (str.length <= 1) {
        return str;
    }
    let charObj = {};
    Array.prototype.forEach.call(str, item => {
        if (!charObj[item]) {
            charObj[item] = 1;
        } else {
            charObj[item] += 1;
        }
    });

    let maxChar = '';
    let maxVal = 1;
    for (let key in charObj) {
        if (charObj[key] >= maxVal) {
            maxChar = key;
            maxVal = charObj[key];
        }
    }
    console.info(` 出现次数最多的字符：${maxChar}\r\n`, `出现的次数：${maxVal}`);
}

let str = 'afjghdfraaaasdenas';
findMaxDuplicateChar(str);
