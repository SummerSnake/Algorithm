/**
 * 链表的中间结点 (力扣 876)
 *
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 */

// 链表
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
 * @desc 单指针(计算链表长度，遍历取中间节点)
 * @param { ListNode } head
 * @return { ListNode }
 */
const middleNode = (head) => {
  let len = 0;
  let node = head;

  while (node.next) {
    node = node.next;
    len++;
  }

  let i = 0;
  while (i < len / 2) {
    head = head.next;
    i++;
  }

  return head;
};

console.log(middleNode(LinkedList));
