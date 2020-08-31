/**
 * 删除字符串中的所有相邻重复项
 *
 * 给出由小写字母组成的字符串 S
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 */

const S = 'abbaca';

/**
 * @desc 递归
 * @param { string } S
 * @return { string }
 */
const removeDuplicates = (S) => {
  if (!S || S.length < 2) {
    return S;
  }

  let arr = S.split('');
  const recursion = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      // 如果相邻两个数相等，则删除这两个数，并将下标回退2，重新开启循环
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
        i = i - 2;
      }
    }

    return arr;
  };

  return recursion(arr).join('');
};

console.log(removeDuplicates(S));

/**
 * @desc 栈
 * @param { string } S
 * @return { string }
 */
const removeDuplicates2 = (S) => {
  if (!S || S.length < 2) {
    return S;
  }

  const stack = [];

  for (char of S) {
    const prev = stack.pop();

    if (prev !== char) {
      stack.push(prev);
      stack.push(char);
    }
  }

  return stack.join('');
};

console.log(removeDuplicates2(S));

/**
 * @desc 正则
 * @param { string } S
 * @return { string }
 */
const removeDuplicates3 = (S) => {
  if (!S || S.length < 2) {
    return S;
  }

  const reg = /(\w)\1/g;

  while (reg.test(S)) {
    S = S.replace(reg, '');
  }

  return S;
};

console.log(removeDuplicates3(S));
