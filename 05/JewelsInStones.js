/**
 * 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头； 
 * S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石；
 * J 中的字母不重复，J 和 S中的所有字符都是字母；
 * 字母区分大小写，因此"a"和"A"是不同类型的石头。
 */


/**
 * @desc 嵌套for循环对比
 */
const numJewelsInStones = function (J, S) {
  let obj = {};

  for (let i = 0; i < J.length; i += 1) {
    for (let j = 0; j < S.length; j += 1) {
      if (J[i] === S[j]) {
        if (obj[J[i]]) {
          obj[J[i]] += 1;
        } else {
          obj[J[i]] = 1;
        }
      }
    }
  }

  let total = 0;
  for (let k in obj) {
    total += obj[k];
  }

  return total;
};

/**
 * @desc 哈希表
 */
const numJewelsInStones2 = function (J, S) {
  const map = new Map();

  for (let i = 0; i < J.length; i += 1) {
    map.set(J.charAt(i)); // 将J中的所有元素存入map
  }

  let total = 0;
  for (let i = 0; i < S.length; i += 1) {
    if (map.has(S.charAt(i))) {
      total += 1;
    }
  }

  return total;
};


/**
 * @desc 将字符串分割成数组进行筛选
 */
const numJewelsInStones3 = function (J, S) {
  const jArr = J.split("");
  const sArr = S.split("");

  return sArr.filter(item => jArr.includes(item)).length;
};

/**
 * @desc 把第二个数组中包含的第一个数组的元素替换掉
 */
const numJewelsInStones4 = function (J, S) {
  let newS = S;

  for (let i = 0; i < J.length; i++) {
    newS = newS.replace(new RegExp(J[i], 'g'), "");
  }

  return S.length - newS.length;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones2("aA", "aAAbbbb"));
console.log(numJewelsInStones3("aA", "aAAbbbb"));
console.log(numJewelsInStones4("aA", "aAAbbbb"));
