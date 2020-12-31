/**
 * 链表中倒数第k个节点
 * 给定一个链表: 1->2->3->4->5, 和 k = 2.
 * 返回链表 4->5.
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 不带头节点
    this.length = 0; // 链表长度
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
}

const list = new LinkedList();
list.insert(1);
list.insert(2, 1);
list.insert(3, 2);
list.insert(4, 3);
list.insert(5, 4);

/**
 * @desc 两次循环
 *       1、 首次循环，计算链表长度;
 *       2、 第二次循环找到第length - k个节点。
 * @param { ListNode } head
 * @param { number } k
 * @return { ListNode }
 */
const getKthFromEnd = (head, k = 0) => {
  let len = 0;
  let node = head;
  while (node) {
    node = node.next;
    len += 1;
  }
  // 链表长度小于k
  if (len < k) {
    return null;
  }

  let i = 0;
  node = head;
  while (i < len - k) {
    node = node.next;
    i += 1;
  }

  return node;
};

console.log(getKthFromEnd(list.head, 2));

/**
 * @desc 快慢双指针(数学加减法推导)
 *       1、 假设 k = 2, 链表长度 len = 5, right 先向右移动 k 位, 此时 right 处于 2;
 *       2、 left 和 right 一起向右移动, 直到 right 抵达边界, 此时 right 处于 5, left 处于 3, 5-3=2 即 k;
 * @param { ListNode } head
 * @param { number } k
 * @return { ListNode }
 */
const getKthFromEnd2 = (head, k = 0) => {
  let left = head;
  let right = head;
  let i = 0;

  while (right) {
    // right 开始移动
    right = right.next;
    // 当 right 处于 k 时, left开始移动
    if (i >= k) {
      left = left.next;
    }
    i += 1;
  }
  // 链表长度小于 k 返回 null
  return i < k ? null : left;
};

console.log(getKthFromEnd2(list.head, 2));
