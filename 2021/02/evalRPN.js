/**
 * 逆波兰表达式 (力扣 150)
 *
 * 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 整数除法只保留整数部分。
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 */

/**
 * @desc 栈
 * @param { string[] } tokens
 * @return { number }
 */
const evalRPN = tokens => {
  const stack = [];

  for (const item of tokens) {
    if (!isNaN(parseInt(item))) {
      stack.push(item);
      continue;
    }

    const y = stack.pop();
    const x = stack.pop();
    switch (item) {
      case '+':
        stack.push(x + y);
        break;
      case '-':
        stack.push(x - y);
        break;
      case '*':
        stack.push(x * y);
        break;
      case '/':
        stack.push(x / y > 0 ? Math.floor(x / y) : Math.ceil(x / y));
        break;
      default:
    }
  }

  return stack.pop();
};

evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);

/**
 * @desc 数组模拟栈
 * @param { string[] } tokens
 * @return { number }
 */
const evalRPN2 = tokens => {
  // 对于一个有效的逆波兰表达式，其长度 n 一定是奇数，且操作数的个数一定比运算符的个数多 1 个
  const stack = new Int32Array(Math.floor((tokens.length + 1) / 2));
  let index = -1;

  for (const item of tokens) {
    if (!isNaN(parseInt(item))) {
      stack[index + 1] = item;
      index++;
      continue;
    }

    // 栈内处理运算
    switch (item) {
      case '+':
        index--;
        stack[index] += stack[index + 1];
        break;
      case '-':
        index--;
        stack[index] -= stack[index + 1];
        break;
      case '*':
        index--;
        stack[index] *= stack[index + 1];
        break;
      case '/':
        index--;
        stack[index] =
          stack[index] / stack[index + 1] > 0
            ? Math.floor(stack[index] / stack[index + 1])
            : Math.ceil(stack[index] / stack[index + 1]);
        break;
      default:
    }
  }

  return stack[index];
};

evalRPN2(['0', '3', '/']);
