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
     * @param { array } arr 要构建成堆的数组
     */
    const buildHeap = arr => {
      let i = Math.floor(arr.length / 2);

      while (i >= 0) {
        maxHeapify(i);
        i -= 1;
      }
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
      buildHeap(this.data);
      let index = this.size - 1;

      while (index > 0) {
        swap(this.data, 0, index);
        this.size -= 1;
        maxHeapify(0);
        index -= 1;
      }
      return this.data;
    };
  }
}

const arr = [15, 21, 3, 12, 5, 2, 8, 4, 7];
const binaryHeap = new BinaryHeap(arr);
console.log(binaryHeap.maxSort());
