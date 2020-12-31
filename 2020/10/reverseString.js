/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 */

const charArr = ['S', 'u', 'm', 'm', 'e', 'r', 'S', 'n', 'a', 'k', 'e'];

/**
 * @desc 倒序循环
 * @param { character[] } charArr
 * @return { character[] }
 */
const reverseString = (charArr) => {
  const arr = [...charArr];
  const ret = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    ret.push(arr[i]);
  }

  return ret;
};

console.log(reverseString(charArr));

/**
 * @desc 首尾双指针
 * @param { character[] } charArr
 * @return { character[] }
 */
const reverseString2 = (charArr) => {
  const arr = [...charArr];
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr;
};

console.log(reverseString2(charArr));

/**
 * @desc 双指针递归
 * @param { character[] } charArr
 * @return { character[] }
 */
const reverseString3 = (charArr) => {
  const arr = [...charArr];

  const recursion = (i, j) => {
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];

      recursion(i + 1, j - 1);
    }
  };

  recursion(0, arr.length - 1);

  return arr;
};

console.log(reverseString3(charArr));
