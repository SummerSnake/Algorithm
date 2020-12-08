/**
 * 复制带随机指针的链表
 *
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 * 要求返回这个链表的 深拷贝。
 */

// map 存储的为对象的引用
const node = {
  val: 4,
  random: null,
  next: null,
};

const LinkedList = {
  val: 1,
  random: null,
  next: {
    val: 2,
    random: node,
    next: {
      val: 3,
      random: null,
      next: node,
    },
  },
};

function ListNode(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @desc 哈希表
 * @param { ListNode } head
 * @return { ListNode }
 */
const copyRandomList = (head) => {
  const map = new Map();

  let node = head;
  while (node) {
    map.set(node, new ListNode(node.val));
    node = node.next;
  }

  node = head;
  while (node) {
    const newNode = map.get(node);

    if (node.next) {
      newNode.next = map.get(node.next);
    }

    // random 指向链表中随机一个节点，map 中存储有链表的所有节点，
    // 则 map.get(node.random) 即可取到 random 指针指向的节点。
    if (node.random) {
      newNode.random = map.get(node.random);
    }

    node = node.next;
  }

  return map.get(head);
};

console.log(copyRandomList(LinkedList));
