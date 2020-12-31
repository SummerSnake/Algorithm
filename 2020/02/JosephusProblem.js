/**
 * 据说著名犹太历史学家 Josephus有过以下的故事：在罗马人占领乔塔帕特后，
 * 39 个犹太人与Josephus及他的朋友躲到一个洞中，39个犹太人决定宁愿死也不要被敌人抓到，于是决定了一个自杀方式，
 * 41个人排成一个圆圈，由第1个人开始报数，每报数到第3人该人就必须自杀，然后再由下一个重新报数，直到所有人都自杀身亡为止。
 * 然而Josephus 和他的朋友并不想遵从。
 * 首先从一个人开始，越过k-2个人（因为第一个人已经被越过），并杀掉第k个人。接着，再越过k-1个人，并杀掉第k个人。
 * 这个过程沿着圆圈一直进行，直到最终只剩下一个人留下，这个人就可以继续活着。
 * 问题是，给定了和，一开始要站在什么地方才能避免被处决？
 * Josephus要他的朋友先假装遵从，他将朋友与自己安排在第16个与第31个位置，于是逃过了这场死亡游戏。
 */

/**
 * @desc 创建节点
 */
const Node = function(element) {
  this.element = element;
  this.next = null;
};

/**
 * @desc 创建链表
 */
const LList = function(num) {
  const head = new Node(1);
  let current = head; // 当前节点指向head

  // 循环创建节点，头结点为1，从2开始循环
  for (let i = 2; i <= num; i += 1) {
    let temp = new Node(i);
    current.next = temp; // 当前节点的指针指向新节点
    current = temp; // 将新节点赋值给 current
  }
  // 循环完成，尾结点指针指向 head
  current.next = head;
  return head;
};

const circularList = new LList(41);

// 解题函数
const getKilled = function() {
  let current = circularList;
  let temp = {};
  let str = "";

  // 循环链表，在链表删除到只剩一个节点之前链表当前数据域与指针域总是不相等, while 循环得以循环整个链表
  while (current.next.element !== current.element) {
    // 每三人杀一人，即循环两次，查找被杀者的前一人；
    // 每次循环将当前节点赋值给临时变量，将当前节点的下一个节点赋值给当前节点。
    for (let i = 1; i <= 2; i += 1) {
      temp = current;
      current = current.next;
    }
    // 循环完成，temp 即为第二个节点，current为第三个节点，将 temp 的指针指向 current.next, current 被删除
    // 当剩下两个个节点时, current.next 的指针指向他本身；
    // 将current.next 赋值给 temp.next，即得到数据域与指针域相同的节点，结束循环。
    temp.next = current.next;
    // 渲染数据
    str = `杀掉第${current.element}人。`;
    console.log(str);
    // 将第四个节点赋值给current，作为下次循环开始节点
    current = temp.next;
  }
  // 最后剩余的节点
  str = `杀掉第${current.element}人。`;
  console.log(str);
};

getKilled();
