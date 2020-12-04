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

  while (head) {
    bucket[head.val - min]++;
    head = head.next;
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
