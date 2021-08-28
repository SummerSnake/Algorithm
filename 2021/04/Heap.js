/**
 * 堆构造类
 */
class Heap {
  constructor(type) {
    this.heap = [];
    this.type = type;
  }

  // 判断最大堆还是最小堆
  comparator(parent, child) {
    return this.type === 'min' ? parent > child : parent < child;
  }

  // 堆化
  heapify(arr, size, index) {
    let extreme = index; // 最大或最小值下标
    let left = 2 * index + 1; // 左节点下标
    let right = left + 1; // 右节点下标

    // extreme 节点与左节点比较
    if (left < size && this.comparator(arr[extreme], arr[left])) {
      extreme = left;
    }

    // extreme 节点与右节点比较
    if (right < size && this.comparator(arr[extreme], arr[right])) {
      extreme = right;
    }

    // 如果 extreme 节点不等于当前节点，则进行交换
    if (extreme !== index) {
      [arr[extreme], arr[index]] = [arr[index], arr[extreme]];
      this.heapify(arr, size, extreme);
    }
  }

  // 插入元素
  insert(num) {
    this.heap.push(num);
    const size = this.heap.length;

    // 堆是一棵完全二叉树，存在n个元素，那么他的高度为:log2(n+1)，这就说明代码中的for循环会执行O(log2(n))次
    for (let i = Math.floor(size / 2); i >= 0; i--) {
      this.heapify(this.heap, size, i);
    }
  }

  // 返回堆顶元素
  peak() {
    return this.heap[0];
  }

  // 返回并删除堆顶元素 (先用最后一个元素覆盖堆顶元素，然后再自上而下调整堆，将新的堆顶元素向下沉)
  pop() {
    const last = this.heap.pop();
    if (this.heap.length === 0) {
      return last;
    }

    const returnItem = this.heap[0];
    this.heap[0] = last;
    this.heapify(this.heap, this.heap.length, 0);

    return returnItem;
  }

  // 返回堆元素个数
  size() {
    return this.heap.length;
  }
}

module.exports = Heap;
