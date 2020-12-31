/**
 * 合并两个有序链表 (力扣 21 题)
 *
 * 给定两个升序链表，将两个链表合并为一个新的 升序 链表并返回；
 * 新链表是通过拼接给定的两个链表的所有节点组成的。
 */

const list_01 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
    },
  },
};

const list_02 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
    },
  },
};

function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

/**
 * @desc 迭代
 * @param { ListNode } list_01
 * @param { ListNode } list_02
 * @return { ListNode }
 */
const mergeLinkedList = (list_01, list_02) => {
  let listOne = JSON.parse(JSON.stringify(list_01));
  let listTwo = JSON.parse(JSON.stringify(list_02));

  let dummy = new ListNode();
  let prev = dummy;
  while (listOne && listTwo) {
    while (listOne && listOne.val <= listTwo.val) {
      prev.next = listOne;
      prev = prev.next;
      listOne = listOne.next;
    }

    prev.next = listTwo;
    prev = prev.next;
    listTwo = listTwo.next;
  }

  prev.next = listOne ? listOne : listTwo;
  return dummy.next;
};

mergeLinkedList(list_01, list_02);
