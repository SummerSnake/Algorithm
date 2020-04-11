/**
 * @desc 创建节点
 * @param { number } val 新建节点的值域
 */
function Node(val) {
  this.val = val;
  this.next = null;
}

/**
 * @desc 单向循环链表
 * @param { number } num 用于循环创建节点，最终为链表尾结点的值域
 * @return { ListNode }
 */
function LList(num) {
  const head = new Node(1);
  let current = head; // 将 head 设为当前节点

  // 循环创建节点，头结点为1，从2开始循环
  for (let i = 2; i <= num; i += 1) {
    const temp = new Node(i);
    current.next = temp; // 当前节点的指针指向新节点
    current = temp; // 将新节点设为 current
  }
  // 循环完成，尾结点指针指向 head
  current.next = head;
  return head;
}

const circularList = new LList(3);

/**
 * @desc 反转单向循环链表
 * @param { ListNode } head 链表
 * @return { ListNode } 反转完成的链表
 */
const reverseList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  let prev = null;
  let next = null;
  while (head.next !== null) {
    // 将链表第一个next指针 赋值给next
    next = head.next;
    // 将链表第一个next指针指向前一个节点
    head.next = prev;
    // 将当前节点赋值给 prev
    prev = head;
    // 将 next 赋值给链表
    head = next;
  }

  return prev;
};

console.log(reverseList(circularList));
