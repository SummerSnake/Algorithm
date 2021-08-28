/**
 * 数据流的中位数 (力扣 295)
 */
const Heap = require('../04/Heap');

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

/**
 * @desc 大顶堆 & 小顶堆
 */
class MedianFinder2 {
  constructor() {
    this.size = 0;
    this.minHeap = new Heap('min'); // 小顶堆
    this.maxHeap = new Heap('max'); // 大顶堆
  }

  /**
   * @desc 添加元素
   *        1. 插入前两者元素个数相等，说明插入前数据流元素个数为偶数，插入后变为奇数；
   *          <1> 将元素插入到 minHeap 中，取出 minHeap 中的堆顶值插入到 maxHeap 中，此操作将保证
   *              maxHeap 元素个数大于等于 minHeap 元素个数。
   *        2. 插入前两者元素个数不相等，说明插入前数据流元素个数为奇数，插入后变为偶数；
   *          <2> maxHeap 元素个数大于 minHeap 元素个数，将元素插入到 maxHeap 中，为保证两者元素个数相等
   *              取出 maxHeap 中的堆顶值插入到 minHeap 中。
   * @param { number } num
   * @return { void }
   */
  addNum(num) {
    this.size++;

    if (this.maxHeap.size() === this.minHeap.size()) {
      this.minHeap.insert(num);
      this.maxHeap.insert(this.minHeap.pop());
    } else {
      this.maxHeap.insert(num);
      this.minHeap.insert(this.maxHeap.pop());
    }
  }

  /**
   * @desc 获取中位数
   * @return { number }
   */
  findMedian() {
    // 奇数直接返回大顶堆堆顶元素，偶数计算中位数
    if (this.size % 2 !== 0) {
      return this.maxHeap.peak();
    } else {
      return (this.maxHeap.peak() + this.minHeap.peak()) / 2;
    }
  }
}

const obj2 = new MedianFinder2();
obj2.addNum(1);
obj2.addNum(2);
obj2.addNum(2);
obj2.addNum(3);
obj2.addNum(4);
obj2.addNum(5);

obj2.findMedian();
