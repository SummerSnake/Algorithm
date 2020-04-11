/**
 * 反转单链表
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
 * @desc 双指针法
 * @param { ListNode } head 链表
 * @return { ListNode } 反转完成的链表
 */
const reverseList = (head) => {
  let prev = head;
  let current = null;

  while (prev !== null) {
    // 1、将当前 prev next 保存
    const tmp = prev.next;
    // 2、将 prev next 指向 current
    prev.next = current;
    // 3、将 current 设为 prev
    current = prev;
    // 4、将 prev 设为第一步保存的 prev.next, 此时完成局部两个节点反转
    prev = tmp;
  }

  return current;
};

// console.log(reverseList(list.head));

/**
 * @desc 递归算法
 * @param { ListNode } head 链表
 * @return { ListNode } 反转完成的链表
 */
const reverseList2 = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  // 递归逐级返回
  const current = reverseList2(head.next);
  // 例如，1 => 2 => 3 => 4 => 5 => null;
  // 当 current 为5, head为4(current 为 head.next);
  // 当 head.next 是5, head.next.next 就是5指向的指针;
  // 将其指向当前的 head(4) 5 => 4。
  head.next.next = head;
  // 将 head.next 设置为 null，切断4指向5的指针，下次递归4即为最后一个节点。
  head.next = null;

  return current;
};

console.log(reverseList2(list.head));
