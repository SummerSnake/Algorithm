/**
 * 字符串转换整数 (atoi) (力扣 8)
 *
 * 实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
 */

/**
 * @desc 一次遍历 + 异常判断 + 边界防护
 * @param { string } s
 * @return { number }
 */
const myAtoi = (s) => {
  let i = 0;
  let curr; // "+"、"-"、数字

  while (i < s.length) {
    if (typeof curr === 'undefined') {
      // 未有符合的字符
      if (s[i] === ' ') {
        i++;
        continue;
      } else if (s[i] === '-' || s[i] === '+' || s[i] >= 0) {
        curr = s[i];
      } else {
        return 0;
      }
    } else if (s[i] >= 0) {
      // curr 已有值 且 当前字符为数字
      curr += s[i];

      if (curr < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
      }
      if (curr > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
      }
    } else {
      // curr 已有值 且 当前字符不为数字
      break;
    }

    i++;
  }

  return parseInt(curr) || 0;
};

myAtoi('   +0 123');

/**
 * @desc parseInt()
 * @param { string } s
 * @return { number }
 */
const myAtoi2 = (s) => {
  const num = parseInt(s, 10);
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  return isNaN(num) ? 0 : Math.max(Math.min(num, INT_MAX), INT_MIN);
};

myAtoi2('   -42');

/**
 * @desc 确定有限状态机
 * @param { string } s
 * @return { number }
 */
const myAtoi3 = (s) => {
  // 确定有限状态机类
  class Automaton {
    constructor() {
      this.INT_MAX = 2147483647;
      this.INT_MIN = -2147483648;
      // 执行阶段，默认处于开始执行阶段
      this.state = 'start';
      // 正负符号，默认是正数
      this.sign = 1;
      // 数值，默认是0
      this.res = 0;
      /**
       * 关键点：状态和执行阶段的对应表
       * 含义：[执行阶段, [空格, 正负, 数值, 其他]]
       */
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']],
      ]);
    }

    /**
     * @desc 获取状态的索引
     * @param { string } char
     * @return { number }
     */
    getIndex(char) {
      if (char === ' ') {
        // 空格判断
        return 0;
      } else if (char === '-' || char === '+') {
        // 正负判断
        return 1;
      } else if (!isNaN(char)) {
        // 数值判断
        return 2;
      } else {
        // 其他情况
        return 3;
      }
    }

    /**
     * @desc 字符转换
     * @param { string } char
     * @return { number }
     */
    get(char) {
      // 每次传入字符时，都要变更自动机的执行阶段
      this.state = this.map.get(this.state)[this.getIndex(char)];

      if (this.state === 'in_number') {
        // 数值处理，乘以10做进位处理
        this.res = this.res * 10 + ~~char;
        // 边界处理
        this.res = Math.max(Math.min(this.res, this.INT_MAX), this.INT_MIN);
      } else if (this.state === 'signed') {
        // 处理正负号
        this.sign = char === '+' ? 1 : -1;
      }
    }
  }

  // 生成确定有限状态机实例
  const automaton = new Automaton();

  // 遍历每个字符，依次进行转换
  for (let char of s) {
    if (automaton.state === 'end') {
      break;
    }

    automaton.get(char);
  }

  // 返回值，整数 = 正负 * 数值
  return automaton.sign * automaton.res;
};

myAtoi3('-91283472332');
