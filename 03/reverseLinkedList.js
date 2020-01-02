/**
 * @desc 创建节点
 */
const Node = function(element) {
  this.element = element;
  this.next = null;
};

const LList = function(num) {
  const head = new Node(1);
  let current = head; // 当前节点指向head

  // 循环创建节点，头结点为1，从2开始循环
  for (let i = 2; i <= num; i += 1) {
    let temp = new Node(i);
    current.next = temp; // 当前节点的指针指向新节点
    current = temp; // 将新节点赋值给 current
  }
  // 循环完成，尾结点指针指向 head
  current.next = head;
  return head;
};

const circularList = new LList(3);

const reverseList = list => {
  if (list === null || list.next === null) {
    return list;
  }
  let prev = null;
  let next = null;
  while (list.next != null) {
    // 将链表第一个next指针 赋值给next
    next = list.next;
    // 将链表第一个next指针指向前一个节点
    list.next = prev;
    // 将当前节点赋值给 prev
    prev = list;
    // 将 next 赋值给链表
    list = next;
  }
  console.log(prev);
};

reverseList(circularList);
