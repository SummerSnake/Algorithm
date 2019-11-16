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

/**
 * @desc 打印出两个年份之间所有的闰年，并以每行四个数的形式输出
 *
 * 闰年规律：四年一闰，百年不闰，四百年再闰
 */
function getLeapYear(start, end) {
    let i = start;
    let count = 0; // 计算闰年的个数
    let str = ''; // 输出字符串

    while (i <= end) {
        if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
            count += 1;
            str = str + i + ' ';

            if (str.split(' ').length === 5 || i === end) {
                console.log(str);
            }
            if (count > 0 && count % 4 === 0) {
                console.log('\n');
                str = '';
            }
        }
        i += 1;
    }
}

getLeapYear(1000, 2000);
