/**
 * 双向循环链表
 */
class LinkedList2 {
  constructor() {
    /**
     * 双向链表节点的构造函数
     * @param element 要传入链表的节点
     */
    const Node = function (element) {
      this.element = element;
      this.previous = null;
      this.next = null;
    };

    // this.head = null; // 不带头节点
    this.head = new Node('head'); // 带头节点
    this.tail = null;
    this.length = 1; // 链表长度

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
     * 向双向链表中某个位置插入元素
     * @param newElement 要插入的节点
     * @param currElement 要插入哪个节点后面
     */
    this.insert = function (newElement, currElement) {
      let newNode = new Node(newElement);
      let currNode = this.find(currElement);
      // head 指针域为 null, 则链表为空
      if (this.head === null) {
        newNode.next = null;
        newNode.previous = null;
        this.head = newNode;
        return;
      }
      // head 指针域不为 null，tail 指针域为 null ，则插入尾部
      if (this.tail === null) {
        newNode.next = this.head;
        newNode.previous = this.head;
        this.head.next = newNode;
        this.head.previous = newNode;
        this.tail = newNode;
      }
      // head、null 指针域均不为 null, 且插入的位置不为尾部 则插入中间
      if (this.tail !== null && currNode !== this.tail) {
        newNode.next = currNode.next;
        newNode.previous = currNode;
        currNode.next = newNode;
      }
      // 如果要插入的位置为尾部
      if (currNode === this.tail) {
        const oldTail = this.tail;
        oldTail.next = newNode;
        newNode.next = this.head;
        newNode.previous = oldTail;
        this.tail = newNode;
        this.head.previous = newNode;
      }

      this.length += 1;
    };

    /**
     * 删除节点
     */
    this.remove = function (element) {
      const node = this.find(element);

      // 所要删除的节点刚好是第一个，也就是head指向的节点，
      // 将head指向所要删除节点的下一个节点(node.next), 新的 head previous 指向 tail。
      if (node.element === this.head.element) {
        this.head = this.head.next;
        this.head.previous = this.tail;
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
      // 寻找到所要删除节点的上一个节点(prevNode)，
      // 将prevNode中的指针指向head，head 的 previous 指向 prevNode。
      if (node.next === this.tail) {
        prevNode.next = this.head;
        this.head.previous = prevNode;
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
    }
  }
}
