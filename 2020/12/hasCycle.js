/**
 * 环形链表 (力扣 141)
 *
 * 给定一个链表，判断链表中是否有环，如果链表中存在环，则返回 true， 否则返回 false。
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.add = function (val) {
  const newNode = new ListNode(val);
  let head = this;

  if (head && head.val) {
    while (head.next) {
      head = head.next;
    }

    head.next = newNode;
  } else {
    head.val = val;
  }
};

const list = new ListNode();
list.add(3);
list.add(2);
list.add(0);
list.add(-4);

let lastNode = list;
while (lastNode.next) {
  lastNode = lastNode.next;
}
lastNode.next = list;

/**
 * @desc ES6 Map
 * @param { ListNode } head
 * @return { boolean }
 */
const hasCycle = (head) => {
  let set = new Set();

  while (head) {
    if (set.has(head)) {
      return true;
    }

    set.add(head);
    head = head.next;
  }

  return false;
};

console.log(hasCycle(list));

/**
 * @desc 快慢指针 (Floyd 判圈算法，又称龟兔赛跑算法)
 *         1. 假想「乌龟」和「兔子」在链表上移动，「兔子」跑得快，「乌龟」跑得慢；
 *         2. 当「乌龟」和「兔子」从链表上的同一个节点开始移动时，如果该链表中没有环，
 *            那么「兔子」将一直处于「乌龟」的前方；
 *         3. 如果该链表中有环，那么「兔子」会先于「乌龟」进入环，并且一直在环内移动；
 *         4. 等到「乌龟」进入环时，由于「兔子」的速度快，它一定会在某个时刻与乌龟相遇，即套了「乌龟」若干圈。
 * @param { ListNode } head
 * @return { boolean }
 */
const hasCycle2 = (head) => {
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head.next;
  // 两个不同对象永远不相等，此处比较指针
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

console.log(hasCycle2(list));

/**
 * @desc 逐个删除
 *         1. 将节点的 next 指针指向它自己；
 *         2. 如果节点跟它的下一个节点相等，则说明是环形链表。
 * @param { ListNode } head
 * @return { boolean }
 */
const hasCycle3 = (head) => {
  if (!head || !head.next) {
    return false;
  }

  // 如果节点跟它的下一个节点相等，则说明是环形链表
  if (head === head.next) {
    return true;
  }

  // 将节点的 next 指针指向它自己
  const nextNode = head.next;
  head.next = head;

  return hasCycle3(nextNode);
};

console.log(hasCycle3(list));
