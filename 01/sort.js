/**
 * 排序算法
 * 1.冒泡排序
 *
 * ~ <1> 比较相邻的元素。如果第一个比第二个大，就交换它们两个;
 * ~ <2> 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数;
 * ~ <3> 针对所有的元素重复以上的步骤，除了最后一个;
 * ~ <4> 重复步骤1~3，直到排序完成。
 *
 * ~ 时间复杂度：O(n²); 空间复杂度：O(1); 稳定排序; 原地排序。
 */
function bubbleSort(arr = []) {
  const len = arr.length;
  let temp = 0;
  // 数组的长度为11，所以i最大是9，当i等于9的时候，j只能等于0，所以最后比较的是arr[0]和arr[1]，刚好是数组的前两位。
  for (let i = 0; i < len - 1; i += 1) {
    for (let j = 0; j < len - 1 - i; j += 1) { // 嵌套 for 循环，外层走一次，内层走一轮
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

let arr1 = [1, 3, 45, 32, 66, 12, 79, 36, 0, 99, 111];
bubbleSort(arr1);

/**
 * 排序算法
 * 2.选择排序
 *
 * ~ <1> 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置；
 * ~ <2> 从剩余未排序元素中继续寻找最小（大）元素，放到已排序序列的末尾；
 * ~ <3> 重复步骤1~2，直到排序完成。
 *
 * ~ 时间复杂度：O(n²); 空间复杂度：O(1); 非稳定排序; 原地排序。
 */
function selectionSort(arr) {
  const len = arr.length;
  let minIndex = 0;
  let temp = 0;

  for (let i = 0; i < len - 1; i += 1) {
    minIndex = i;
    for (let j = i + 1; j < len; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
}

const arr2 = [1, 3, 45, 32, 66, 12, 79, 36, 0, 99, 111];
selectionSort(arr2);

/**
 * 排序算法
 * 3.插入排序
 *
 * ~ <1> 从第一个元素开始，该元素可以认为已经被排序；
 * ~ <2> 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * ~ <3> 如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * ~ <4> 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * ~ <5> 将新元素插入到该位置后；
 * ~ <6> 重复步骤2~5。
 *
 * ~ 时间复杂度：O(n²); 空间复杂度：O(1); 非稳定排序; 原地排序。
 */
function insertionSort(arr = []) {
  const len = arr.length;
  let preIndex = 0;
  let current = 0;

  for (let i = 0; i < len; i += 1) {
    preIndex = i - 1;
    current = arr[i]; // 新元素
    while (preIndex >= 0 && arr[preIndex] > current) { // 已排序元素大于新元素
      arr[preIndex + 1] = arr[preIndex]; // 将已排序元素赋值给新元素
      preIndex--;
    }
    arr[preIndex + 1] = current; // 将新元素赋值给已排序元素
  }
  console.log(arr);
}

const arr3 = [1, 3, 45, 32, 66, 12, 79, 36, 0, 99, 111];
insertionSort(arr3);

/**
 * 排序算法
 * 4. 希尔排序
 *
 * ~ <1> 先让数组中间隔为 gap 的元素有序；
 * ~ <2> 刚开始 gap 的大小为 n = 3 * gap + 1；
 * ~ <3> 接着让 gap = (gap - 1) / 3，让 gap 一直缩小，间隔递减；
 * ~ <4> 当 gap = 1 时，排序完成。
 *
 * ~ 时间复杂度：O(nlogn); 空间复杂度：O(1); 非稳定排序; 原地排序。
 */
class ShellSort {
  constructor() {
    /**
     * @desc 两个数位置互换
     * @param { array } array 归属数组
     * @param { array } left 左边的数（较大的数）
     * @param { array } right 右边的数（较小的数）
     */
    const swap = (array, left, right) => {
      var temp = array[right];
      array[right] = array[left];
      array[left] = temp;
    };

    /**
     * @desc 数组排序
     * @param { array } arr 要排序的数组
     * @return 排序完成的数组
     */
    this.sort = arr => {
      let len = arr.length;
      let gap = 1;

      while (gap < len / 3) {
        gap = 3 * gap + 1;//设置间隔
      }

      while (gap >= 1) {
        for (let i = gap; i < len; i += 1) {
          // gap=4，则 当前index 与 index+4 进行比较，j -= gap j进行递减，小于gap退出循环
          for (let j = i; j >= gap && arr[j - gap] > arr[j]; j -= gap) {
            swap(arr, j, j - gap);
          }
        }
        // 间隔递减
        gap = (gap - 1) / 3;
      }

      return arr;
    }
  }
}

const arr4 = [1, 3, 45, 32, 66, 12, 79, 36, 0, 99, 111];
const shellSort = new ShellSort();
console.log(shellSort.sort(arr4));

/**
 * 排序算法
 * 5. 归并排序
 *
 * ~ <1> 把大的数组分成两个小数组，然后对这两个小数组分别进行排序；
 * ~ <2> 把两个小数组合并成一个有序的数组。
 * ~ <3> 通过递归的方式将大的数组一直分割，直到数组的大小为 1，此时只有一个元素，那么该数组即是有序的；
 * ~ <4> 再把两个数组大小为1的数组合并成一个大小为2的数组，再把两个大小为2数组的合并成4的数组...；
 * ~ <5> 直到全部小的数组合并起来，排序完成。
 *
 * ~ 时间复杂度：O(nlogn); 空间复杂度：O(n); 稳定排序; 非原地排序。
 */
class MergeSort {
  constructor() {
    /**
     * @desc 分割数组
     * @param { number } start 开始下标
     * @param { number } end 结束下标
     * @return { number } 分割位置下标
     */
    const divide = (start, end) => Math.floor((start + end) / 2);

    /**
     * @desc 合并排序完成的数组
     * @param { array } arr 要分割的数组
     * @param { number } start 开始下标
     * @param { number } divider 分割位置下标
     * @param { number } end 结束下标
     */
    const merge = (arr, start, divider, end) => {
      const arr1 = arr.slice(start, divider);
      const arr2 = arr.slice(divider, end);
      // 哨兵，往 arr1 和 arr2 里push一个最大值，比如防止 arr1 里的数都比较小，导致第三次遍历某个数组里没有值
      // Number.MAX_SAFE_INTEGER 常量表示在 JavaScript 中最大的安全整数
      arr1.push(Number.MAX_SAFE_INTEGER);
      arr2.push(Number.MAX_SAFE_INTEGER);

      let i = start;
      let j = 0;
      let k = 0;
      // 循环做比较，每次取出较小的那个值，赋值到初始数组相应位置
      while (i < end) {
        if (arr1[j] < arr2[k]) {
          arr[i] = arr1[j];
          j += 1;
        } else {
          arr[i] = arr2[k];
          k += 1;
        }
        i += 1;
      }
    };

    /**
     * @desc 数组排序
     * @param { array } arr 要排序的数组
     * @param { number } start 开始下标
     * @param { number } end 结束下标
     * @return { array } 排序完成的数组
     */
    this.sort = (arr, start = 0, end) => {
      let endClone = end || arr.length;
      if (endClone - start === 1) {
        return arr;
      }
      const divider = divide(start, endClone);
      this.sort(arr, start, divider);
      this.sort(arr, divider, endClone);
      merge(arr, start, divider, endClone);

      return arr;
    }
  }
}

const arr5 = [1, 3, 45, 32, 66, 12, 79, 36, 0, 99, 111];
const mergeSort = new MergeSort();

console.log(mergeSort.sort(arr5));

/**
 * 排序算法
 * 6. 快速排序
 *
 * ~ <1> 从数组中选择一个元素作为基准点；
 * ~ <2> 排序数组，所有比基准值小的元素摆放在左边，而大于基准值的摆放在右边；
 * ~ <3> 将左边的数组和右边的数组进行递归，重复<1>和<2>操作。
 *
 * ~ 时间复杂度：O(logn); 空间复杂度：O(logn); 非稳定排序; 原地排序。
 */
class QuickSort {
  constructor() {
    /**
     * @desc sort1 写法缺点
     *
     * ~ <1> 获取基准点使用了一个splice操作，在js中splice会对数组进行一次拷贝的操作，而它最坏的情况下复杂度为O(n)；
     * ~ <2> 每次执行都会使用到两个数组空间，产生空间复杂度；
     * ~ <3> concat操作会对数组进行一次拷贝，而它的复杂度也会是O(n)；
     * ~ <4> 对大量数据的排序来说相对会比较慢。
     */
    this.sort1 = arr => {
      if (arr.length <= 1) {
        return arr;
      }
      // 中心点下标
      let pivotIndex = Math.floor(arr.length / 2);
      // 中心点值
      let pivot = arr.splice(pivotIndex, 1)[0];
      // 左侧数组，小于中心点的值所组成的数组
      const left = [];
      // 左侧数组，大于中心点的值所组成的数组
      const right = [];

      // 循环对比插入相应的数组
      let i = 0;
      while (i < arr.length) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
        i += 1;
      }
      // 递归循环左右数组，并与中心点融合成排序完成的数组
      return this.sort1(left).concat([pivot], this.sort1(right));
    }
  }
}

const arr6 = [1, 3, 45, 32, 66, 12, 79, 36, 0, 99, 111];
const quickSort = new QuickSort();
console.log(quickSort.sort1(arr6));
