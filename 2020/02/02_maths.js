/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法？
 */

// 暴力递归
const calc = function(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return n;
  } else {
    return calc(n - 1) + calc(n - 2);
  }
};

// console.log(calc(3));

// 哈希表
const map = new Map();

const calc2 = function(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return n;
  } else {
    // 哈希表（散列表）是根据关键码值（Key value）而直接进行访问的数据结构。
    // 也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。
    // 这个映射函数叫做散列函数，存放记录的数组叫做散列表。
    if (map.has(n)) {
      return map.get(n);
    } else {
      const result = calc2(n - 1) + calc2(n - 2);
      map.set(n, result);
      return result;
    }
  }
};

// console.log(calc2(3));

// 斐波那契数列
// 这个数列从第3项开始，每一项都等于前两项之和。
const calc3 = function(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return n;
  }

  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i += 1) {
    [a, b] = [b, a + b];
  }
  return b;
};

console.log(calc3(3));
