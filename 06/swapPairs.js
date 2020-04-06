/**
 * 两两交换链表中的节点
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
    // this.head = new Node('head'); // 带头节点
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
 * @desc 迭代算法
 *       1、 添加一个哨兵节点;
 *       2、 三个节点外加一个哨兵节点之间作指针指向变换操作。
 * @param { ListNode } head
 * @return { ListNode }
 */
const swapPairs = (head) => {
  // 新建 虚拟head，指向当前head
  const thead = new Node(0);
  thead.next = head;

  let tmp = thead;

  while (tmp.next && tmp.next.next) {
    const start = tmp.next;
    const end = start.next;

    tmp.next = end;
    start.next = end.next;
    end.next = start;

    tmp = start;
  }

  return thead.next;
};

console.log(swapPairs(list.head));

/**
 * @desc 递归算法
 *       1、终止条件
 *          <1> 至少三个节点之间才可以互换;
 *          <2> 只有一个节点或没有节点，返回此节点。
 *       2、交换规则
 *          <1> 将需要交换的两个节点定义为head、next;
 *          <2> head 连接后面交换完成的子链表;
 *          <3> next 连接 head;
 *          <4> 完成交换。
 * @param { ListNode } head
 * @return { ListNode }
 */
const swapPairs2 = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  // 1、获得第2个节点;
  const next = head.next;
  // 2、第1个节点指向第3个节点，并从第3个节点开始递归;
  head.next = swapPairs2(next.next);
  // 3、第2个节点指向第1个节点。
  next.next = head;

  return next;
};

console.log(swapPairs2(list.head));
