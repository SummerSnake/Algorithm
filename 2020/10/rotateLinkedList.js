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
 * @desc 穷举法
 *       1. 遍历链表，获取链表长度；
 *       2. 对 k 取余进行去重；
 *       3. 循环 去重后的num 次，每次把最后一项移动到第一项。
 *          <1> 第一步变成: 5->1->2->3->4->NULL
 *          <2> 第二步变成: 4->5->1->2->3->NULL
 * @param { number } k
 * @return { ListNode }
 */
const rotateLinkedList = (head, k) => {
  if (!head || !head.next) {
    return head;
  }

  let size = 1;
  let curr = head;

  // 遍历链表计算其长度
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

// console.log(rotateLinkedList(LinkedList, 2));

/**
 * @desc 哈希法
 *       1. 以 k 为分界将链表拆分为：1->2->3->NULL 和 4->5->NULL；
 *       2. 再合并：4->5->1->2->3->NULL。
 * @param { number } k
 * @return { ListNode }
 */
const rotateLinkedList2 = (head, k) => {
  if (!head || !head.next) {
    return head;
  }

  let size = 0;
  let curr = head;
  let map = new Map();

  // 遍历并将数据存入map
  while (curr) {
    size++;
    map.set(size, curr);
    curr = curr.next;
  }

  // 因为当 k 大于长度时, 又是一个轮回
  // 每个轮回旋转一圈，旋转一圈后又变成最初的链表，所以使用 k % size 避免重复旋转
  let num = k % size;
  // 通过查找 map 对链表进行操作
  map.get(size).next = head; // 链表最后一项指向头部形成环
  head = map.get(size - num).next; // 定位新的头节点
  map.get(size - num).next = null; // 打断链表环

  return head;
};

// console.log(rotateLinkedList2(LinkedList, 2));

/**
 * @desc 快慢指针
 *       1. 定义 fast 和 slow 两个指针，fast先走k步；
 *       2. 当 slow === fast 时,说明k会被链表长度整除，直接返回head即可；
 *       3. 快慢指针同时移动，当快指针到达链表最后一项时，慢指针正好在链表需要打断的位置；
 *       1. 以 慢指针 为分界将链表拆分为：1->2->3->NULL 和 4->5->NULL；
 *       2. 再合并：4->5->1->2->3->NULL。
 * @param { number } k
 * @return { ListNode }
 */
const rotateLinkedList3 = (head, k) => {
  if (!head || !head.next) {
    return head;
  }

  let fast = head;
  let slow = head;

  // fast 先走 k 步
  while (k > 0) {
    if (fast && fast.next) {
      fast = fast.next;
    } else {
      fast = head;
    }

    k--;
  }

  // slow === fast 说明 k 会被链表长度整除，故无需操作 head 直接返回即可
  if (slow === fast) {
    return head;
  }

  // 快慢指针并行
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
};

// console.log(rotateLinkedList3(LinkedList, 2));

/**
 * @desc 链表转环
 *       1. 将单链表转为单向循环链表；
 *       2. 然后在循环链表中找到 k 的位置将其打断。
 * @param { number } k
 * @return { ListNode }
 */
const rotateLinkedList4 = (head, k) => {
  if (!head || !head.next) {
    return head;
  }

  let size = 1;
  let curr = head;

  // 获取链表长度，找到链表尾结点
  while (curr.next) {
    size++;
    curr = curr.next;
  }

  // 链表尾结点指向head，形成循环链表
  curr.next = head;
  // 因为当 k 大于长度时, 又是一个轮回
  // 每个轮回旋转一圈，旋转一圈后又变成最初的链表，所以使用 k % size 避免重复旋转
  let num = k % size;

  // 找到打断位置(num + 1 标识头结点下标，后续每走一步加一)
  while (num + 1 < size) {
    head = head.next;
    num++;
  }

  let tmp = head;
  head = head.next;
  tmp.next = null;

  return head;
};

console.log(rotateLinkedList4(LinkedList, 2));
