/**
 * 删除排序链表中的重复元素 (力扣 82)
 *
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，要求
 * 删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 * 返回同样按升序排列的结果链表。
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

// 链表
const LinkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        },
      },
    },
  },
};

/**
 * @desc prev 辅助节点
 * @param { ListNode } head
 * @return { ListNode }
 */
const deleteDuplicates = function (head) {
  const dummy = new ListNode();
  let node = dummy;
  let prev = new ListNode(101);

  while (head) {
    if ((head.next && head.val === head.next.val) || head.val === prev.val) {
      node.next = null;
    } else {
      node.next = head;
      node = node.next;
    }

    prev = head;
    head = head.next;
  }

  return dummy.next;
};

deleteDuplicates(LinkedList);

/**
 * @desc 递归
 * @param { ListNode } head
 * @return { ListNode }
 */
const deleteDuplicates2 = function (head) {
  if (!head || !head.next) {
    return head;
  }

  // 非重复节点，保留当前节点，递归处理 next 节点
  if (head.val !== head.next.val) {
    head.next = deleteDuplicates2(head.next);

    return head;
  } else {
    // 重复节点，往后寻找不重复节点
    let node = head.next.next;
    while (node && node.val === head.val) {
      node = node.next;
    }

    return deleteDuplicates2(node);
  }
};

deleteDuplicates2(LinkedList);
