/**
 * Object.assign() 进行的是浅拷贝。
 */
const obj = { a: { b: "hello", c: 21 }, b: false };
const initialObj = Object.assign({}, obj);
initialObj.a.b = "world";

// console.info(obj, initialObj);

// Object.assign()可以处理一层的深度拷贝。
const obj1 = { a: 1, b: "obj1.b", c: false };
const obj2 = Object.assign({ d: { name: "Willa" } }, obj1);
obj2.b = "obj2.b";

// console.info(obj1, obj2);

/**
 * 深拷贝
 */
// 1. 手动赋值。
const obj3 = { a: 1, b: "obj3.b", c: false };
const obj4 = { a: obj3.a, b: obj3.b, c: obj3.c, d: { name: "Selina" }, e: ["js", "css"] };
obj4.b = "obj4.b";
//console.info(obj3, obj4);

// 2. 递归
function recursionDeepClone(initialObj) {
  let finalObj = Array.isArray(initialObj) ? [] : {};
  if (initialObj && typeof initialObj === "object") {
    for (key in initialObj) {
      if (initialObj.hasOwnProperty(key)) {
        // 判断 object 子元素是否为对象，如果是，递归复制。
        if (initialObj[key] && typeof initialObj[key] === "object") {
          finalObj[key] = recursionDeepClone(initialObj[key]);
        } else {
          // 如果不是，简单复制。
          finalObj[key] = initialObj[key];
        }
      }
    }
  }
  return finalObj;
}

const obj5 = recursionDeepClone(obj4);
obj5.b = "obj5.b";
console.info(obj4, obj5);
