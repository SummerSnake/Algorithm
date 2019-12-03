/**
 * 自除数 是指可以被它包含的每一位数除尽的数。
 * 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
 * 还有，自除数不允许包含 0 。
 * 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。
 */

/**
 * @desc 嵌套for循环(转字符串方法)
 * @param { number } left 下边界
 * @param { number } right 上边界
 * @return { array } 边界（含边界）内所有的自除数
 */
const selfDividingNumbers = (left, right) => {
  const arr = [];

  for (let i = left; i <= right; i += 1) {
    if (i === 0) {
      continue;
    }
    if (i < 10) {
      arr.push(i);
      continue;
    }

    const str = i.toString();
    let flag = true;

    for (let j = 0; j < str.length; j += 1) {
      if (str % str[j] !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arr.push(parseInt(str));
    }
  }

  return arr;
};

// console.log(selfDividingNumbers(0, 123));


/**
 * @desc 嵌套for循环(数字特性取余法)
 * @param { number } left 下边界
 * @param { number } right 上边界
 * @return { array } 边界（含边界）内所有的自除数
 *
 * 设置一个临时变量等于这个原数
 * 每次让临时变量对 10 取余，即是临时变量的末尾，比如 128 对 10 取余的结果是 8
 * 判断原数对这个余数是否能整除，不能就直接 break 了，进入下一个数
 * 临时变量对自己整除 10，比如 128 整除 10 就是 12 了，这样再下个循环中取余就是 2
 * 取余数后要先判断是否等于 0，因为没有办法对 0 求余数。
 */
const selfDividingNumbers2 = (left, right) => {
  const arr = [];

  for (let i = left; i <= right; i += 1) {
    if (i === 0) {
      continue;
    }
    if (i < 10) {
      arr.push(i);
      continue;
    }

    let cloneI = i;
    let flag = true;

    while (cloneI > 0) {
      let remainder = cloneI % 10;

      if (remainder === 0 || i % remainder !== 0) {
        flag = false;
        break;
      }

      cloneI = Math.floor(cloneI / 10);
    }

    if (flag) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(selfDividingNumbers2(0, 123));
