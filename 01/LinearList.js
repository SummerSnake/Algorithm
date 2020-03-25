/**
 * 线性表是指数据之间是一对一的关系，比如数组和链表都属于这一范畴。
 * 数组和链表又代表了两种存储方式：顺序存储和链式存储。
 */

/**
 * 顺序存储在大多数语言中定义为数组。
 * 数组大小固定，查找迅速，增删复杂，需要完整的内存块，容易产生碎片。
 * js 中数据为动态数组，可以改变大小。
 */
const arrFunc = () => {
  const arr = [1, 2, 5, 7, 8, 11, 0, 0];
  const len = arr.length;
  // 在数组第三项后增加一项
  for (let i = len - 1; i >= 3; i -= 1) {
    // 将前一个元素赋值给当前元素
    arr[i] = arr[i - 1];
  }
  arr[3] = 6;

  return arr;
};

console.log(arrFunc());

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
 * @desc 单向链表节点的构造函数
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
/**
 * @desc 单链表
 */
class LinkedList {
  constructor() {
    // this.head = null; // 不带头节点
    this.head = new Node('head'); // 带头节点
    this.length = 1; // 链表长度
  }

  /**
   * @desc 查找节点
   * @param { any } element 要查找的节点
   * @return { any } 查找到的节点
   */
  find(element) {
    let node = this.head;

    while (node !== null && node.element !== element) {
      node = node.next;
    }

    return node;
  }

  /**
   * @desc 向单向链表中某个位置插入元素
   * @param newElement 要插入的节点
   * @param currElement 要插入哪个节点后面(当前节点)
   */
  insert(newElement, currElement) {
    let newNode = new Node(newElement);
    let currNode = null;

    if (currElement) {
      currNode = this.find(currElement);
    }
    // 不带头空链表，将head指向新节点
    if (!this.head) {
      newNode.next = null;
      this.head = newNode;
    } else {
      if (currNode) {
        // 将新节点插入到当前节点后边
        newNode.next = currNode.next;
        currNode.next = newNode;
      } else {
        // 当前节点不存在，则将新节点插入到head后边
        newNode.next = this.head.next;
        this.head.next = newNode;
      }
    }

    this.length += 1;
  }

  /**
   * @desc 删除节点
   * @param { any } element 要删除的节点
   */
  remove(element) {
    if (!element) {
      return;
    }
    const node = this.find(element);
    // 所要删除的节点刚好是第一个，也就是head指向的节点，
    // 将head指向所要删除节点的下一个节点(node.next)。
    if (node.element === this.head.element) {
      this.head = this.head.next;
      this.length -= 1;
      return;
    }
    // 寻找到所要删除节点的上一个节点(prevNode)
    let prevNode = this.head;
    // 循环判断当前节点指针域是否指向要删除的节点，如果不是则将指向的节点赋值给当前节点，进行下一次遍历
    while (prevNode.next.element !== node.element) {
      prevNode = prevNode.next;
    }
    // 要删除的节点为最后一个节点
    // 寻找到所要删除节点的上一个节点(prevNode)，将prevNode中的指针指向NULL。
    if (node.next === null) {
      prevNode.next = null;
      this.length -= 1;
      return;
    }
    // 在列表中间删除某个节点
    // 将prevNode中的指针指向当前要删除的这个节点的下一个节点
    if (node.next) {
      prevNode.next = node.next;
      this.length -= 1;
    }
  }
}

const list = new LinkedList();
list.insert(1);
list.insert(2, 1);
list.insert(3, 2);
list.insert(4, 3);
console.log(list);

/**
 * @desc 双向链表
 */
class LinkedList2 {
  constructor() {
    /**
     * 双向链表节点的构造函数
     * @param element 要传入链表的节点
     */
    const Node2 = function(element) {
      this.element = element;
      this.previous = null;
      this.next = null;
    };

    // this.head = null; // 不带头节点
    this.head = new Node2('head'); // 带头节点
    this.length = 1; // 链表长度

    /**
     * 查找节点
     */
    this.find = function(element) {
      let node = this.head;
      while (node !== null && node.element !== element) {
        node = node.next;
      }
      return node;
    };

    /**
     * 向双向链表中某个位置插入元素
     * @param newElement 要插入的节点
     * @param currElement 要插入哪个节点后面
     */
    this.insert = function(newElement, currElement) {
      let newNode = new Node2(newElement);
      let currNode = this.find(currElement);

      if (this.head) {
        newNode.next = currNode.next;
        newNode.previous = currNode;
        currNode.next = newNode;
      } else {
        newNode.next = null;
        newNode.previous = null;
        this.head = newNode;
      }
      this.length += 1;
    };
    /**
     * 删除节点
     */
    this.remove = function(element) {
      const node = this.find(element);

      // 所要删除的节点刚好是第一个，也就是head指向的节点，
      // 将head指向所要删除节点的下一个节点(node.next)。
      if (node.element === this.head.element) {
        this.head = this.head.next;
        this.head.previous = null;
        this.length -= 1;
        return;
      }
      // 寻找到所要删除节点的上一个节点(prevNode)
      let prevNode = this.head;
      // 循环判断当前节点指针域是否指向要删除的节点，如果不是则将指向的节点赋值给当前节点，进行下一次遍历
      while (prevNode.next.element !== node.element) {
        prevNode = prevNode.next;
      }
      // 要删除的节点为最后一个节点
      // 寻找到所要删除节点的上一个节点(prevNode)，将prevNode中的指针指向NULL。
      if (node.next === null) {
        prevNode.next = null;
        this.length -= 1;
        return;
      }
      // 在列表中间删除某个节点
      // 将prevNode中的指针指向当前要删除的这个节点的下一个节点
      if (node.next) {
        prevNode.next = node.next;
        node.next.previous = prevNode;
        this.length -= 1;
      }
    };
  }
}
