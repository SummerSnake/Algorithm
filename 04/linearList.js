/**
 * 线性表是指数据之间是一对一的关系，比如数组和链表都属于这一范畴。
 * 数组和链表又代表了两种存储方式：顺序存储和链式存储。
 */

/**
 * 顺序存储在大多数语言中定义为数组。
 * 数组大小固定，查找迅速，增删复杂，需要完整的内存块，容易产生碎片。
 * js 中数据为动态数组，可以改变大小。
 */
function arrFunc() {
  const arr = [1, 2, 5, 7, 8, 11, 0, 0];
  const len = arr.length;
  // 在数组第三项后增加一项
  for (let i = len - 1; i >= 3; i -= 1) {
    // 将前一个元素赋值给当前元素
    arr[i] = arr[i - 1];
  }
  arr[3] = 6;
  return arr;
}

// console.log(arrFunc());

/**
 * 线性存储要求一块完整的内存，在增删数据时也表现一般，而链式存储则正好解决了这些问题。
 * 链表是一种离散存储结构，其在内存中存储不是连续的，每个数据元素都通过一个指针指向其下一个元素的地址。
 * 根据指针域的不同，链表又分为单链表、双向链表、循环链表等。
 * 大小可以动态调整，增删迅速，查找较慢，数据元素所占内存略多，不需要整块内存块，不会造成碎片化。
 *
 * 不论是带头结点的链表还是不带头结点的链表，头指针head都指向链表中的第一个结点。
 * 如果该链表有头结点，则头指针head指向头结点，如果没有头结点，则头指针head指向链表的第一个节点。
 * 1 带头结点的单链表中头指针head指向头结点，头结点的值域不含任何信息，从头结点的后继结点开始存储信息。
 * 头指针head始终不等于NULL，head->next等于NULL的时候链表为空。
 * 2 不带头结点的单链表中的头指针head直接指向开始结点，当head等于NULL的时候链表为空。
 * 头结点的存在，使得空链表与非空链表的处理变得一致，也方便了对链表的开始结点插入或删除操作。
 */

/**
 * 单链表
 */
class LinkedList {
  constructor() {
    /**
     * 单向链表节点的构造函数
     * @param element 要传入链表的节点
     */
    const Node = function (element) {
      this.element = element;
      this.next = null;
    };

    // this.head = null; // 不带头节点
    this.head = new Node('head'); // 带头节点
    this.length = 1; // 链表长度

    /**
     * 向单向链表中某个位置插入元素
     * @param newElement 要插入的节点
     * @param currElement 要插入其后的元素
     */
    this.insert = function (newElement, currElement) {
      let newNode = new Node(newElement);
      let currNode = this.find(currElement);

      if (this.head) {
        newNode.next = currNode.next;
        currNode.next = newNode;
      } else {
        newNode.next = null;
        this.head = newNode;
      }
      this.length += 1;
    };

    /**
     * 查找节点
     */
    this.find = function (element) {
      let node = this.head;
      while (node !== null && node.element !== element) {
        node = node.next;
      }
      return node;
    };

    /**
     * 删除节点
     */
    this.remove = function (node) {

    }
  }
}

const LList = new LinkedList();
LList.insert('second', 'head');
LList.insert('third', 'second');
console.log(LList);
console.warn(LList.find('third'));
