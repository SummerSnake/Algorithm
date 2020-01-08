/**
 * 删除最外层的括号
 */

/**
 * @desc 计数法（找规律）
 * @param { string } S
 * @return { string }
 *
 * '(()())(())'
 * 1. 第一个括号 mark === 0, char === '(', continue;
 * 2. 第二个括号 mark === 1, char === '(', str += char;
 * 3. 第三个括号 mark === 0, char === ')', str += char  str = '()';
 * 4. 第四个括号 mark === 1, char === '(', str += char;
 * 5. 第五个括号 mark === 0, char === ')', str += char  str = '()()';
 * 5. 第六个括号 mark === -1, char === ')', continue;
 */
const removeOuterParentheses = S => {
  let len = S.length;
  let mark = -1;
  let str = "";

  for (let i = 0; i < len; i += 1) {
    const char = S.charAt(i);

    mark = char === "(" ? (mark += 1) : (mark -= 1);

    if ((mark === 0 && char === "(") || (mark === -1 && char === ")")) {
      continue;
    }

    str += char;
  }

  return str;
};

console.log(removeOuterParentheses("(()())(())(()(()))"));

/**
 * @desc 计数法2（找规律）
 * @param { string } S
 * @return { string }
 */
const removeOuterParentheses2 = S => {
  let len = S.length;
  let mark = 0;
  let str = "";

  for (let i = 0; i < len; i += 1) {
    const char = S.charAt(i);

    if (char === ")") {
      mark -= 1;
    }
    if (mark >= 1) {
      str += char;
    }
    if (char === "(") {
      mark += 1;
    }
  }

  return str;
};

console.log(removeOuterParentheses("(()())(())(()(()))"));
