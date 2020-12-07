/**
 * 排序链表
 *
 * 给定链表的头结点 head ，要求将其按 升序 排列并返回 排序后的链表。
 */

const LinkedList = {
  val: -1,
  next: {
    val: 5,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 0,
          next: null,
        },
      },
    },
  },
};

/**
 * @desc 链表节点
 * @param { ListNode } head
 * @return { ListNode }
 */
function ListNode(val, next) {
  this.val = !val ? 0 : val;
  this.next = !next ? null : next;
}

/**
 * @desc 计数排序
 * @param { ListNode } head
 * @return { ListNode }
 */
const sortList = (head) => {
  if (!head) {
    return null;
  }

  let min = head.val;
  let max = head.val;

  let node = head;
  while (node) {
    min = Math.min(min, node.val);
    max = Math.max(max, node.val);
    node = node.next;
  }

  let bucket = new Int32Array(max - min + 1);

  node = head;
  while (node) {
    bucket[node.val - min]++;
    node = node.next;
  }

  let res = null;
  for (let i = 0; i < bucket.length; i++) {
    while (bucket[i] > 0) {
      if (!res) {
        res = new ListNode(i + min);
      } else {
        let dummyHead = res;
        while (dummyHead.next) {
          dummyHead = dummyHead.next;
        }

        dummyHead.next = new ListNode(i + min);
      }

      bucket[i]--;
    }
  }

  return res;
};

console.log(sortList(LinkedList));

/**
 * @desc 归并排序
 * @param { ListNode } head
 * @return { ListNode }
 */
const sortList2 = (head) => {
  // 排序
  function sort(head) {
    if (!head || !head.next) {
      return head;
    }

    // 快慢指针找到中点
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // 截断链表
    const mid = slow.next;
    slow.next = null;

    // 递归分割
    const left = sort(head);
    const right = sort(mid);

    return merge(left, right);
  }

  // 双路归并
  function merge(left, right) {
    let dummyHead = new ListNode();
    let prev = dummyHead;
    let leftNode = left;
    let rightNode = right;

    while (leftNode && rightNode) {
      if (leftNode.val <= rightNode.val) {
        prev.next = leftNode;
        leftNode = leftNode.next;
      } else {
        prev.next = rightNode;
        rightNode = rightNode.next;
      }

      prev = prev.next;
    }

    // 处理单一留存节点
    if (leftNode) {
      prev.next = leftNode;
    }
    if (rightNode) {
      prev.next = rightNode;
    }

    return dummyHead.next;
  }

  return sort(head);
};

console.log(sortList2(LinkedList));
