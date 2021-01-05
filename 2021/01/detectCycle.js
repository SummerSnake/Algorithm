/**
 * 环路检测 (力扣 面试题 02.08)
 *
 * 给定一个链表，如果它是有环链表，实现一个算法返回环路的开头节点。
 */

const linkedList = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: -4,
        next: null,
      },
    },
  },
};

let lastNode = linkedList;
while (lastNode.next) {
  lastNode = lastNode.next;
}

let pos = 1;
let startNode = linkedList;
while (pos > 0) {
  pos--;
  startNode = startNode.next;
  if (pos === 0) {
    lastNode.next = startNode;
  }
}

/**
 * @desc 哈希表
 * @param { ListNode } head
 * @return { ListNode }
 */
const detectCycle = (head) => {
  let set = new Set();

  let node = head;
  while (node) {
    if (set.has(node)) {
      return node;
    }

    set.add(node);
    node = node.next;
  }

  return null;
};

const res = detectCycle(linkedList);
console.log(res);
