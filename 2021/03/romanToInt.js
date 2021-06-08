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

/**
 * @desc 模拟(若存在小的数字在大的数字的左边的情况，根据规则需要减去小的数字)
 * @param { string } s
 * @return { number }
 */
const romanToInt2 = (s) => {
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  let res = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const value = map.get(s[i]);

    if (i < n - 1 && value < map.get(s[i + 1])) {
      res -= value;
    } else {
      res += value;
    }
  }

  return res;
};

romanToInt2('XXIV');

/**
 * @desc 字符串替换
 * @param { string } s
 * @return { number }
 */
const romanToInt3 = (s) => {
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  map.set('a', 4);
  map.set('b', 9);
  map.set('c', 40);
  map.set('d', 90);
  map.set('e', 400);
  map.set('f', 900);

  let str = s;
  str = str.replace('IV', 'a');
  str = str.replace('IX', 'b');
  str = str.replace('XL', 'c');
  str = str.replace('XC', 'd');
  str = str.replace('CD', 'e');
  str = str.replace('CM', 'f');

  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res += map.get(str[i]);
  }

  return res;
};

romanToInt3('XXIV');
