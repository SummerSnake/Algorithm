/**
 * 给出两个 非空 的链表用来表示两个非负的整数。
 * 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *     输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *     输出：7 -> 0 -> 8
 *     原因：342 + 465 = 807
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

// 链表一
const ListOne = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

// 链表二
const ListTwo = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

/**
 * @desc 位运算求和、链表哑结点
 * @param { ListNode } l1
 * @param { ListNode } l2
 * @return { ListNode }
 */
const addTwoNumbers = (l1, l2) => {
  let node = new ListNode(null);
  const head = node;
  let val = 0;

  while (l1 || l2 || val) {
    // 通过位运算符获取当前值 通过+=求和 ~~将数字字符串转为数字，无法转换则为0(如：undefined)
    val += ~~(l1 && l1.val) + ~~(l2 && l2.val);
    // 当前节点的val则为当前和的余数，引用类型，node 与 head 共享指针
    node.next = new ListNode(val % 10);
    // node 指针改变，与 node.next 共享指针
    node = node.next;
    // 下一次循环的l1
    l1 = l1 && l1.next;
    // 下一次循环的l2
    l2 = l2 && l2.next;
    // 如果本次循环的和大于9 则进位1 因为true为1 false为0可以直接代入使用
    val = val > 9;
  }

  return head.next;
};

console.log(addTwoNumbers(ListOne, ListTwo));
