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

detectCycle(linkedList);

/**
 * @desc 快慢指针
 *        1. 利用快慢指针判断有没有环；
 *        2. 如果有环，则快慢指针会在某点相遇，由于快指针有可能多跑了，相遇的点不一定是环的入口；
 *        3. 快指针先从头节点跑到相遇节点，然后在环里不断的跑，直到遇到慢指针；
 *        4. 设链表的头结点所在位置为a，环的入口节点位置为b，两指针相遇节点为c；
 *        5. 设链表的 头节点到环的入口节点 的距离为s1，入口节点到二者相遇点 的距离为s2；
 *        6. 快指针移动的距离是 y1=(s1+s2+xn) ，x为跑的圈数，n为圆的周长；
 *        7. 慢指针从头节点跑到二者相遇的节点，则其移动的距离是 y2=(s1+s2)；
 *        8. 快指针的速度是慢指针的两倍，则 y1=2y2，即 (s1+s2+xn)=2(s1+s2)；
 *        9. 进一步推导 => s1+s2=xn，n必然大于s2，再推导 => s1=(n-s2)+(x-1)n；
 *        10. 将快指针置于表头，此时快指针位于a，慢指针位于c，c点至b点的距离为(n-s2)；
 *        11. 快指针与慢指针以同样的速度开始移动，当快指针移动至b时，其移动距离为s1；
 *        12. (x-1)n为循环绕圈，无需计算，则当慢指针实际移动了(n-s2)时，两指针在b点相遇。
 * @param { ListNode } head
 * @return { ListNode }
 */
const detectCycle2 = (head) => {
  if (!head || !head.next) {
    return null;
  }

  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (slow !== fast) {
    return null;
  }

  fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

detectCycle2(linkedList);
