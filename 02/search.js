/**
 * @desc 数据结构与算法之查找
 */
class Search {
  constructor() {
    /**
     * @desc for循环遍历查找    时间复杂度O(n)
     * @param { array } arr 要查找的数据所属数组
     * @param { any } data 要查找的数据
     */
    this.forLoop = (arr, data) => {
      const len = arr.length;
      for (let i = len; i > 0; i -= 1) {
        if (arr[i] === data) {
          return i;
        }
      }

      return -1;
    };

    /**
     * @desc while循环遍历查找    时间复杂度O(n)
     * @param { array } arr 要查找的数据所属数组
     * @param { any } data 要查找的数据
     */
    this.whileLoop = (arr, data) => {
      arr[0] = data;
      let i = arr.length - 1;
      while (arr[i] !== data) {
        i -= 1;
      }

      return i;
    };

    /**
     * @desc 折半查找(要求数据为有序表)    时间复杂度O(logn)
     * @param { array } arr 要查找的数据所属数组
     * @param { any } data 要查找的数据
     */
    this.binarySearch = (arr, data) => {
      let low = 0;
      let mid = 0;
      let high = arr.length - 1;

      while (low <= high) {
        mid = Math.ceil((high + low) / 2);
        if (data === arr[mid]) {
          return mid;
        }
        if (data < arr[mid]) {
          high = mid - 1;
        }
        if (data > arr[mid]) {
          low = mid + 1;
        }
      }

      return -1;
    }
  }
}
