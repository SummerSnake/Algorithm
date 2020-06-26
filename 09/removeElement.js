/**
 * 给定一个数组 arr 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变，不需要考虑数组中超出新长度后面的元素。
 * 即只需要保证移除后数组的新长度内不包含val。
 */

/**
 * @desc 双指针 => 直接遍历覆盖
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
 * @desc 首尾双指针 => 末尾项覆盖(当要删除的元素很少时，此种方式可以减少覆盖次数)
 * @param { any[] } arr
 * @param { any } val
 * @return { number }
 */
const removeElement2 = (arr, val) => {
  let index = 0;
  let last = arr.length - 1;

  while (index < last) {
    if (arr[index] === val) {
      // 取出最后一个元素进行覆盖
      arr[index] = arr[last];
      last--;
    } else {
      index++;
    }
  }

  return index;
};

console.log(removeElement2([3, 2, 2, 3], 2));

/**
 * @desc splice截取，指针减一
 * @param { any[] } arr
 * @param { any } val
 * @return { number }
 */
const removeElement3 = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.length;
};

console.log(removeElement3([3, 2, 2, 3], 2));

/**
 * @desc 每次都定位出要删除的那个
 * @param { any[] } arr
 * @param { any } val
 * @return { number }
 */
const removeElement4 = (arr, val) => {
  while (arr.indexOf(val) > -1) {
    arr.splice(arr.indexOf(val), 1);
  }

  return arr.length;
};

console.log(removeElement4([3, 2, 2, 3], 2));
