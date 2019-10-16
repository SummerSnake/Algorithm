/**
 * 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
 */
function diff(arr1, arr2) {
    let arr3 = [...arr1, ...arr2];
    let newArr = arr3.filter(item => {
        return !arr1.includes(item) || !arr2.includes(item);
    });

    console.log(newArr);
}

let arr1 = [1, 2, 3, 5, 6];
let arr2 = [1, 2, 3, 4, 5];
diff(arr1, arr2);

/**
 * 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
 */
function replaceWord(str, nowWord, newWord) {
    // 判断 nowWord 字符串首字母是否大写，若是，则将 newWord 字符串首字母也替换为大写；
    if (nowWord.charAt(0) < 'a') {
        let firstChar = newWord.charAt(0);
        newWord = newWord.replace(firstChar, firstChar.toUpperCase());
    }
    str = str.replace(nowWord, newWord);
    console.log(str);
}

replaceWord("Let us go to the store.", "store", "mall");
replaceWord("His name is Tom.", "Tom", "john");
