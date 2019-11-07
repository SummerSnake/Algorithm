/**
 * 排序算法
 * 1.冒泡排序
 *
 * ~ 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 * ~ 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 * ~ 针对所有的元素重复以上的步骤，除了最后一个；
 * ~ 重复步骤1~3，直到排序完成。
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
 * ~ 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置；
 * ~ 从剩余未排序元素中继续寻找最小（大）元素，放到已排序序列的末尾；
 * ~ 重复步骤1~2，直到排序完成。
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
 * ~ 从第一个元素开始，该元素可以认为已经被排序；
 * ~ 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * ~ 如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * ~ 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * ~ 将新元素插入到该位置后；
 * ~ 重复步骤2~5。
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
 * ~ 先让数组中间隔为 gap 的元素有序；
 * ~ 刚开始 gap 的大小为 n = 3 * gap + 1；
 * ~ 接着让 gap = (gap - 1) / 3，让 gap 一直缩小，间隔递减；
 * ~ 当 gap = 1 时，排序完成。
 */
function shellSort(arr) {
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
  console.log(arr)
}

function swap(array, left, right) { // 两个数调换
  var temp = array[right];
  array[right] = array[left];
  array[left] = temp;
}

const arr4 = [1, 3, 45, 32, 66, 12, 79, 36, 0, 99, 111];
shellSort(arr4);
