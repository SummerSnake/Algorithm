/**
 * 罗马数字转整数 (力扣 13)
 */

/**
 * @desc 哈希表
 * @param { string } s
 * @return { number }
 */
const romanToInt = (s) => {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let str = s[i] + s[i + 1];
    if (map[str]) {
      res += map[str];
      i++;
    } else {
      res += map[s[i]];
    }
  }

  return res;
};

romanToInt('MI');
