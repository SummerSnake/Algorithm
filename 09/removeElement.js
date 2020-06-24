/**
 * 给定一个数组 arr 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变，不需要考虑数组中超出新长度后面的元素。
 * 即只需要保证移除后数组的新长度内不包含val。
 */

/**
 * @desc 直接覆盖
 * @param { any[] } arr
 * @param { any } val
 * @return { number }
 */
const removeElement = (arr, val) => {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[index] = arr[i];
      index++;
    }
  }

  return index;
};

console.log(removeElement([3, 2, 2, 3], 2));

/**
 * @desc splice截取，指针减一
 * @param { any[] } arr
 * @param { any } val
 * @return { number }
 */
const removeElement2 = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.length;
};

console.log(removeElement2([3, 2, 2, 3], 2));
