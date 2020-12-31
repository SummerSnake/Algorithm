/**
 * 翻转二叉树
 */

/**
 * @desc 创建二叉树节点
 *
 * 1. 一个指向左节点的指针 left
 * 2. 一个指向右节点的指针 right
 * 3. 一个数据域，存放节点的值 val
 */

class BinaryTreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

/**
 * @desc 创建二叉树
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new BinaryTreeNode(val);
    let prev = this.root;
    let tail = this.root;
    // 若根节点为null，则直接插入到根节点；
    if (this.root === null) {
      this.root = node;
      return;
    }
    // tail 不为null 则进行循环，tail 为null则说明root为null，或已成为叶子节点
    while (tail) {
      prev = tail; // 将当前节点赋值给prev
      // 要插入的节点值比当前节点小
      if (node.val < tail.val) {
        tail = tail.left; // 把当前节点的 left 节点赋值给tail，用以下一次循环
      } else {
        tail = tail.right;
      }
    }

    // 当 tail 为空时，prev为最后一个节点
    if (prev.val < node.val) {
      prev.right = node;
    } else {
      prev.left = node;
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(4);
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.insert(7);
tree.insert(6);
tree.insert(9);

/**
 * @desc 递归
 */
const invertTree = (root) => {
  if (!root) {
    return root;
  }

  const tmp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmp);

  return root;
};

// invertTree(tree.root);
// console.log(tree);

const invertTree2 = (root) => {
  if (!root) {
    return root;
  }
  const stack = [root]; // 根节点入栈

  while (stack.length > 0) {
    let node = stack.pop(); // 当前节点出栈

    // 左右节点交换
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    if (node.left) {
      // 交换后当前节点左子节点入栈
      stack.push(node.left);
    }
    if (node.right) {
      // 交换后当前节点右子节点入栈，进入下次循环
      stack.push(node.right);
    }
  }

  return root;
};

invertTree2(tree.root);
console.log(tree);
