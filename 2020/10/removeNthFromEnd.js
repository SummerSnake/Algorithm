/**
 * 删除链表的倒数第 n 个节点
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 给定的 n 保证是有效的。
 */

/**
 * @desc 链表节点的构造函数
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 单链表
const LinkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

/**
 * @desc 引入头指针 + 快慢双指针
 * @param { ListNode } head
 * @param { number } n
 * @return { ListNode }
 */
const removeNthFromEnd = (head, n = 0) => {
  // 首先设立预先指针 pre
  let pre = new ListNode(0);
  // 将预设指针的 next 指向 head
  pre.next = head;
  // 设定两个标记，等于 pre
  let fast = pre;
  let slow = pre;

  // 让 fast 先移动 n 步
  while (n) {
    fast = fast.next;
    n--;
  }

  // 开始移动 fast 和 slow，边界为 fast 的 next 指向空，如果 fast 移动到末尾，那么 slow 的位置就是 n 的位置
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return pre.next;
};

console.log(removeNthFromEnd(LinkedList, 1));

/**
 * @desc 单独判断n + 快慢双指针
 * @param { ListNode } head
 * @param { number } n
 * @return { ListNode }
 */
const removeNthFromEnd2 = (head, n = 0) => {
  let fast = head;
  let slow = head;
  // fast 先走 n 步
  while (--n) {
    fast = fast.next;
  }
  // 删除倒数第n个节点，即当n=链表长度时，删除第一个节点
  if (!fast.next) {
    return head.next;
  }

  fast = fast.next;

  // fast、slow 一起前进
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return head;
};

console.log(removeNthFromEnd2(LinkedList, 1));
