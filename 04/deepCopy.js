/**
 * 深拷贝
 */

const obj = { a: { b: 'hello', c: 21 }, b: false };

// 校验是否是对象类型
const isObj = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

/**
 * @desc JSON转换
 *
 * 缺点：
 * 1.如果对象里有函数，函数无法被拷贝下来；
 * 2.无法拷贝原始对象原型链上的属性和方法；
 * 3.当数据的层次很深，会栈溢出。
 * @param { any } obj
 * @return { any }
 */
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

const copyObj = deepCopy(obj);
copyObj.a.b = 'json';

console.info(obj, copyObj);

/**
 * @desc 普通递归函数
 *
 * 缺点：
 * 1.无法保持引用；
 * 2.当数据的层次很深，会栈溢出。
 * @param { any } obj
 * @return { any }
 */
const deepCopy2 = (obj) => {
  if (!isObj(obj)) {
    return obj;
  }

  const copyObj = Array.isArray(obj) ? [] : {}; //数组兼容

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (typeof obj[k] === 'object') {
        copyObj[k] = deepCopy2(obj[k]);
      } else {
        copyObj[k] = obj[k];
      }
    }
  }

  return copyObj;
};

const copyObj2 = deepCopy2(obj);
copyObj2.a.b = 'common';

console.info(obj, copyObj2);

/**
 * @desc 防栈溢出函数(迭代算法)
 * @param { any } obj
 * @return { any }
 */
const deepCopy3 = (obj) => {
  const root = {};

  // 栈
  const stack = [
    {
      parent: root,
      key: undefined,
      data: obj,
    },
  ];

  while (stack.length) {
    // 深度优先
    const node = stack.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          stack.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }

  return root;
};

const copyObj3 = deepCopy3(obj);
copyObj3.a.b = 'stack';

console.info(obj, copyObj3);
