/**
 * @desc 二叉堆
 *
 * 1. 二叉堆由一棵完全二叉树来表示其结构，用一个数组来表示;
 * 2. 二叉堆的父节点的键值总是大于或等于(小于或等于)任何一个子节点的键值;
 * 3. 当父节点的键值大于或等于(小于或等于)它的每一个子节点的键值时，称为最大堆（最小堆）;
 * 4. left = index * 2 + 1，例如：根节点的下标为0，则左节点的值为下标array[0＊2+1]=1;
 * 5. right = index * 2 + 2，例如：根节点的下标为0，则右节点的值为下标array[0＊2+2]=2;
 * 6. 序数 >= floor(N/2)都是叶子节点, N为所有节点总个数。
 */
class BinaryHeap {
  constructor(arr) {
    this.data = [...arr];
    this.size = this.data.length;

    /**
     * @desc 当前值的左节点
     * @param { number } index 当前值的下标
     * @return { number } 当前值的左节点下标
     */
    const left = index => index * 2 + 1;

    /**
     * @desc 当前值的右节点
     * @param { number } index 当前值的下标
     * @return { number } 当前值的右节点下标
     */
    const right = index => index * 2 + 2;

    /**
     * @desc 将当前值与要取出的值互换
     * @param { array } arr 归属数组
     * @param { number } i 要取出的值的下标
     * @param { number } j 当前值的下标
     */
    const swap = (arr, i, j) => {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    };

    /**
     * @desc 最大堆操作
     * @param { number } index 当前节点下标
     *
     * 把当前不满足最大堆性质的分支节点进行调整。
     */
    const maxHeapify = index => {
      let max = index;
      if (index >= this.size) {
        return;
      }

      const leftIndex = left(index);
      const rightIndex = right(index);

      // 取当前节点与其左节点较大值
      if (leftIndex < this.size && this.data[leftIndex] > this.data[max]) {
        max = leftIndex;
      }
      // 取当前节点与其右节点较大值
      if (rightIndex < this.size && this.data[rightIndex] > this.data[max]) {
        max = rightIndex;
      }
      // 最终max节点是其本身,则已经满足最大堆性质，停止操作
      if (max === index) {
        return;
      }
      // 当前节点与最大值节点做交换
      swap(this.data, index, max);
      // 递归整个堆
      maxHeapify(max);
    };

    /**
     * @desc 构建堆
     */
    const buildHeap = () => {
      let i = Math.floor(this.size / 2);
      while (i >= 0) {
        maxHeapify(i);
        i -= 1;
      }
    };

    /**
     * @desc 验证是否是最大堆
     * @return { boolean } flag
     */
    const isHeap = () => {
      let i = Math.floor(this.size / 2);
      let flag = true;

      while (i >= 0) {
        const leftNode = this.data[left(i)] || Number.MIN_SAFE_INTEGER;
        const rightNode = this.data[right(i)] || Number.MIN_SAFE_INTEGER;
        const max = Math.max(this.data[i], leftNode, rightNode);

        if (max !== this.data[i]) {
          flag = false;
          break;
        }
        i -= 1;
      }
      return flag;
    };

    /**
     * @desc 最大堆排序
     *
     * 1. 交换首尾位置, 最大堆根节点为最大数;
     * 2. 将最后个元素从堆中取出，相当于堆的 size-1;
     * 3. 在堆根节点进行一次 maxHeapify 操作, 将堆顶值转换成最大数;
     * 4. 重复 1-3 步骤，直到 size=0, 排序完成。
     */
    this.maxSort = () => {
      !isHeap() && buildHeap();
      let index = this.size - 1;

      while (index > 0) {
        swap(this.data, 0, index);
        this.size -= 1;
        maxHeapify(0);
        index -= 1;
      }
      return this.data;
    };

    /**
     * @desc 插入元素
     * @param { any } element 要插入的元素
     *
     * 1. 插入到堆末尾;
     * 2. 堆的 size+1;
     * 3. 判断插入后是否还是最大堆;
     * 4. 如果不是最大堆则进行重新构建堆。
     */
    this.insert = element => {
      this.data[this.size] = element;
      this.size += 1;
      !isHeap() && buildHeap();
    };

    /**
     * @desc 删除元素
     * @param { any } element 要删除的元素
     *
     * 1. indexOf() 查找元素在堆中的位置, 调用数组 splice() 方法删除元素;
     * 2. 堆的 size-1;
     * 3. 判断插入后是否还是最大堆;
     * 4. 如果不是最大堆则进行重新构建堆。
     */
    this.remove = element => {
      const index = this.data.indexOf(element);

      this.data.splice(index, 1);
      this.size -= 1;
      !isHeap() && buildHeap();
    };
  }
}

const arr = [15, 21, 3, 12, 5, 2, 8, 4, 7];
const binaryHeap = new BinaryHeap(arr);
binaryHeap.remove(3);
binaryHeap.insert(13);
binaryHeap.maxSort();
console.log(binaryHeap.data);
