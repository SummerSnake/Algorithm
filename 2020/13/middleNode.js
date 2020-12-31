/**
 * 链表的中间结点 (力扣 876)
 *
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 */

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
 * @desc 单指针(计算链表长度，遍历取中间节点)
 * @param { ListNode } head
 * @return { ListNode }
 */
const middleNode = (head) => {
  let len = 0;
  let node = head;

  while (node.next) {
    node = node.next;
    len++;
  }

  let i = 0;
  while (i < len / 2) {
    head = head.next;
    i++;
  }

  return head;
};

console.log(middleNode(LinkedList));

/**
 * @desc 数组
 *       1. 遍历链表，将遍历到的元素依次放入数组中；
 *       2. 遍历完成，数组长度与链表长度相等，则数组的中间节点对应链表的中间节点，即arr[arr.length / 2]。
 * @param { ListNode } head
 * @return { ListNode }
 */
const middleNode2 = (head) => {
  let arr = [head];

  while (arr[arr.length - 1].next) {
    arr.push(arr[arr.length - 1].next);
  }

  // Math.trunc() 删除掉数字的小数部分和小数点，不管参数是正数还是负数。传入该方法的参数会被隐式转换成数字类型。
  return arr[Math.trunc(arr.length / 2)];
};

console.log(middleNode2(LinkedList));

/**
 * @desc 双指针
 *       1. 使用两个指针 slow 与 fast 一起遍历链表；
 *       2. slow 一次走一步，fast 一次走两步；
 *       3. 当 fast 到达链表的末尾时，slow 必然位于中间。
 * @param { ListNode } head
 * @return { ListNode }
 */
const middleNode3 = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNode3(LinkedList));
