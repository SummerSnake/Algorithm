/**
 * 删除排序链表中的重复元素 (力扣 83)
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 */

const linkedList = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null,
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
 * @return { ListNode }
 */
const deleteDuplicates = (head) => {
  let node = head;
  let dummy = new ListNode(0);
  let prev = dummy;

  while (node) {
    while (node.next && node.val === node.next.val) {
      node = node.next;
    }

    prev.next = node;
    prev = prev.next;
    node = node.next;
  }

  return dummy.next;
};

deleteDuplicates(linkedList);

/**
 * @desc 原地删除
 * @param { ListNode } head
 * @return { ListNode }
 */
const deleteDuplicates2 = (head) => {
  let node = head;

  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
};

deleteDuplicates2(linkedList);
