/**
 * 从尾到头打印链表
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

/**
 * @desc 遍历
 * @param { ListNode } head
 * @return { ListNode }
 */
const reversePrintLinkedList = (head) => {
  const result = [];

  while (head) {
    if (head) {
      result.push(head.element);
      head = head.next;
    }
  }

  return result.reverse();
};

console.log(reversePrintLinkedList(list.head));

/**
 * @desc 递归算法
 * @param { ListNode } head
 * @return { ListNode }
 */
const reversePrintLinkedList2 = (head) => {
  if (!head) return [];

  const node = head;
  // 递归逐级返回
  const result = reversePrintLinkedList2(head.next);
  result.push(node.element);

  return result;
};

console.log(reversePrintLinkedList2(list.head));
