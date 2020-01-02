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
     * @desc 二分查找(要求数据为有序表) 时间复杂度O(logn)
     * @param { array } arr 要查找的数据所属数组
     * @param { any } data 要查找的数据
     */
    this.binarySearch = (arr, data) => {
      let low = 0;
      let mid = 0;
      let high = arr.length - 1;

      while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        if (data === arr[mid]) {
          return mid;
        }
        if (data < arr[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      return -1;
    };

    /**
     * @desc 插值查找(要求数据为有序表)    时间复杂度O(logn)
     * @param { array } arr 要查找的数据所属数组
     * @param { any } data 要查找的数据
     *
     * 折半查找：mid=low+1/2*(high-low);
     * 插值查找：mid=low+ (data-a[low])/(a[high]-a[low]) *(high-low);
     *
     * 也就是将折半查找的比例参数1/2改进为自适应的，根据关键字在整个有序表中所处的位置，
     * 让mid值的变化更靠近要查找的值，这样也就间接地减少了比较次数。
     * 对于表长较大，而关键字分布又比较均匀的查找表来说，插值查找算法的平均性能比折半查找要好的多。
     * 反之，数组中如果分布非常不均匀，那么插值查找未必是很合适的选择。
     */
    this.insertSearch = (arr, data) => {
      let low = 0;
      let mid = 0;
      let high = arr.length - 1;

      while (low <= high) {
        mid = Math.floor(low + ((data - arr[low]) / (arr[high] - arr[low])) * (high - low));
        if (mid < low || mid > high) {
          // 出现mid与上一次mid相同的情况跳出，防止死循环
          break;
        }
        if (data === arr[mid]) {
          return mid;
        }
        if (data < arr[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      return -1;
    };
  }
}

const arr = [
  1,
  19,
  88,
  109,
  200,
  230,
  270,
  299,
  900,
  1000,
  1001,
  5000,
  5010,
  5400,
  5900,
  7000,
  8000,
  8099,
  9012,
  9099,
  9999,
  10002,
  12093,
  15432
];
const search = new Search();
console.log(search.insertSearch(arr, 9099));
