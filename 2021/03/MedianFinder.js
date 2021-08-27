/**
 * 数据流的中位数 (力扣 295)
 */

/**
 * @desc 二分法
 */
class MedianFinder {
  constructor() {
    this.arr = [];
  }

  /**
   * @desc 添加元素
   * @param { number } num
   * @return { void }
   */
  addNum(num) {
    const len = this.arr.length;

    if (len === 0) {
      this.arr.push(num);
      return;
    }

    const mid = Math.floor(len / 2);

    if (num < this.arr[mid]) {
      for (let i = mid - 1; i >= 0; i--) {
        if (num > this.arr[i]) {
          this.arr.splice(i + 1, 0, num);
          return;
        }
      }

      this.arr.unshift(num);
    } else if (num > this.arr[mid]) {
      for (let i = mid + 1; i < len; i++) {
        if (num < this.arr[i]) {
          this.arr.splice(i, 0, num);
          return;
        }
      }

      this.arr.push(num);
    } else {
      this.arr.splice(mid, 0, num);
    }
  }

  /**
   * @desc 获取中位数
   * @return { number }
   */
  findMedian() {
    const len = this.arr.length;

    if (len === 0) {
      return 0;
    }
    if (len === 1) {
      return this.arr[0];
    }

    const mid = Math.floor(len / 2);
    let res = 0;

    if (len % 2 === 0) {
      res = (this.arr[mid - 1] + this.arr[mid]) / 2;
    } else {
      res = this.arr[mid];
    }

    return res;
  }
}

const obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
obj.addNum(2);
obj.addNum(3);
obj.addNum(4);
obj.addNum(5);

obj.findMedian();
