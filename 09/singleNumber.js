/**
 * 只出现一次的数字。
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 要求找出那个只出现了一次的元素。
 */

const nums = [4, 1, 2, 1, 2];

/**
 * @desc 排序循环对比
 * @param { number[] } nums
 * @return { number }
 */
const singleNumber = (nums) => {
  const arr = [...nums];
  arr.sort((a, b) => a - b);

  // 重复元素最多只出现两次，只需对比相邻元素是否相等
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
};

console.log(singleNumber(nums));

/**
 * @desc ES6 Map()
 * @param { number[] } nums
 * @return { number }
 */
const singleNumber2 = (nums) => {
  const map = new Map();

  for (let item of nums) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
};

console.log(singleNumber2(nums));

/**
 * @desc 位运算(XOR)(异或)(^)(数学中为⊕)
 *       1. 一个数和 0 做 XOR 运算等于本身：a⊕0 = a；
 *       2. 一个数和其本身做 XOR 运算等于 0：a⊕a = 0；
 *       3. XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
 * @param { number[] } nums
 * @return { number }
 */
const singleNumber3 = (nums) => nums.reduce((a, b) => (a ^= b));

console.log(singleNumber3(nums));
