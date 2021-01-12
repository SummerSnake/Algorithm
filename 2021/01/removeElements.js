/**
 * 移除链表元素 (力扣 203)
 *
 * 删除链表中等于给定值 val 的所有节点。
 */

const linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    },
  },
};

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

/**
 * @desc 哑结点
 * @param { ListNode } head
 * @param { number } val
 * @return { ListNode }
 */
const removeElements = (head, val) => {
  if (!head) {
    return null;
  }

  let dummy = new ListNode(0);
  let prev = dummy;
  while (head) {
    while (head && head.val === val) {
      head = head.next;
    }

    prev.next = head;
    prev = prev.next;

    if (head) {
      head = head.next;
    }
  }

  return dummy.next;
};

removeElements(linkedList, 6);
