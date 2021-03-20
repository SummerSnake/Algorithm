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

  for (let item of tokens) {
    if (!isNaN(parseInt(item))) {
      stack.push(~~item);
      continue;
    }

    let y = stack.pop();
    let x = stack.pop();

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
