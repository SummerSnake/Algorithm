/**
 * 旋转链表
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 *
 * 示例：
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 *      向右旋转 1 步: 2->0->1->NULL
 *      向右旋转 2 步: 1->2->0->NULL
 *      向右旋转 3 步: 0->1->2->NULL
 *      向右旋转 4 步: 2->0->1->NULL
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
 * @desc 将倒数第一项的指针指向 head，倒数第二项的指针指向 null
 *       k 有多少就需要操作多少遍，当 k 大于长度时，就会重复，所以可以 k%长度 来避免
 * @param { ListNode } head
 * @param { number } k
 * @return { ListNode }
 */
const rotateLinkedList = (head, k) => {
  if (!head || !head.next) {
    return head;
  }

  let size = 1;
  let curr = head;

  while (curr.next) {
    curr = curr.next;
    size++;
  }

  // 因为当 k 大于长度时, 又是一个轮回
  // 每个轮回旋转一圈，旋转一圈后又变成最初的链表，所以使用 k % size 避免重复旋转
  let num = k % size;
  let node = head;
  while (num > 0) {
    // 拿到倒数第二个元素
    let second = node;
    while (second.next && second.next.next) {
      second = second.next;
    }
    // 拿到倒数第一个元素的值
    const val = second.next.val;
    // 倒数第二项的指针指向 null
    second.next = null;
    // 将倒数第一项的指针指向 head
    const last = new ListNode(val);
    last.next = node;
    // 新链表，用于下次循环
    node = last;
    num--;
  }

  return node;
};

console.log(rotateLinkedList(LinkedList, 2));
