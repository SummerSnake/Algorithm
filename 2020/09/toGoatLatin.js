/**
 * 给定一个由空格分割单词的句子 S。每个单词只包含大写或小写字母。
 * 我们要将句子转换为 “Goat Latin”（一种类似于 猪拉丁文 - Pig Latin 的虚构语言）。
 * 山羊拉丁文的规则如下：
 *
 * 如果单词以元音开头（a, e, i, o, u），在单词后添加"ma"。
 * 例如，单词"apple"变为"applema"。
 *
 * 如果单词以辅音字母开头（即非元音字母），移除第一个字符并将它放到末尾，之后再添加"ma"。
 * 例如，单词"goat"变为"oatgma"。
 *
 * 根据单词在句子中的索引，在单词最后添加与索引相同数量的字母'a'，索引从1开始。
 * 例如，在第一个单词后添加"a"，在第二个单词后添加"aa"，以此类推。
 * 返回将 S 转换为山羊拉丁文后的句子。
 */

const str = 'The quick brown fox jumped over the lazy dog';

/**
 * @desc 循环对比拼接
 * @param { string } S
 * @return { string }
 */
const toGoatLatin = (S) => {
  const charArr = ['a', 'e', 'i', 'o', 'u'];
  const arr = S.split(' ');

  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < charArr.length; j++) {
      if (arr[i][0].toLowerCase() === charArr[j]) {
        let char = '';
        while (char.length < i + 1) {
          char += 'a';
        }
        arr[i] = `${arr[i]}ma${char}`;
        flag = true;
        break;
      }
    }

    if (!flag) {
      let char = '';
      while (char.length < i + 1) {
        char += 'a';
      }
      arr[i] = `${arr[i].substring(1)}${arr[i][0]}`;
      arr[i] = `${arr[i]}ma${char}`;
    }
  }

  return arr.join(' ');
};

console.log(toGoatLatin(str));

/**
 * @desc map查询 + repeat()
 * @param { string } S
 * @return { string }
 */
const toGoatLatin2 = (S) => {
  const map = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  return S.split(' ')
    .map((word, index) => {
      const initial = word[0];
      const suffix = 'ma' + 'a'.repeat(index + 1);
      return map[initial.toLocaleLowerCase()] === 0
        ? word + suffix
        : word.substring(1) + initial + suffix;
    })
    .join(' ');
};

console.log(toGoatLatin2(str));
