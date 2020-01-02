/**
 * 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
 * 二叉搜索树保证具有唯一的值。
 * L <= val <= R
 */

/**
 * @desc 创建二叉树节点
 *
 * 1. 一个指向父亲节点的指针 parent
 * 2. 一个指向左节点的指针 left
 * 3. 一个指向右节点的指针 right
 * 4. 一个数据域，存放节点的值 val
 */
class BinaryTreeNode {
  constructor(val) {
    this.parent = null;
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

/**
 * @desc 创建二叉搜索树
 */
class BinarySearchTree {
  constructor() {
    this.root = null;

    this.insert = function(val) {
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
      // 将新节点的 parent 指针指向prev
      node.parent = prev;
    };
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(18);
tree.insert(1);
tree.insert(null);
tree.insert(6);

const tree2 = new BinarySearchTree();
tree2.insert(10);
tree2.insert(5);
tree2.insert(15);
tree2.insert(3);
tree2.insert(7);
tree2.insert(null);
tree2.insert(18);

/**
 * @desc 中序遍历 递归
 * @param { TreeNode } root 二叉搜索树根节点
 * @param { number } L 左子树边界值
 * @param { number } R 右子树边界值
 * @return { number }
 */
const rangeSumBST = (root, L, R) => {
  let num = 0;

  const inOrder = node => {
    if (node) {
      inOrder(node.left);
      if (node.val >= L && node.val <= R) {
        num += node.val;
      }
      inOrder(node.right);
    }
  };

  inOrder(root);

  return num;
};

/**
 * @desc 迭代算法 (迭代法也称辗转法，是一种不断用变量的旧值递推新值的过程)
 * @param { TreeNode } root 二叉搜索树根节点
 * @param { number } L 左子树边界值
 * @param { number } R 右子树边界值
 * @return { number }
 *
 * 1.先将root入栈；
 * 2.while条件直到栈空，每次取出栈顶元素，如果是节点不存在，直接continue跳出该次while；
 * 3.如果存在则判断节点大小，如果在L R之间，则说明左右两边都有可能还有符合条件的值 左右节点入栈 并加上值；
 * 4.如果 < L，则说明可能的值在右侧子树 右节点入栈，反之左节点入栈。
 */
const rangeSumBST2 = (root, L, R) => {
  let num = 0;
  const stack = []; // 栈
  stack.push(root);

  while (stack.length > 0) {
    let curr = stack.pop(); // 取出栈顶元素

    if (!curr) {
      continue;
    }
    if (curr.val >= L && curr.val <= R) {
      stack.push(curr.left);
      stack.push(curr.right);
      num += curr.val;
    }
    if (curr.val < L) {
      stack.push(curr.right);
    }
    if (curr.val > R) {
      stack.push(curr.left);
    }
  }

  return num;
};

const num = rangeSumBST2(tree.root, 6, 10);
const num2 = rangeSumBST2(tree2.root, 7, 15);
console.log(num);
console.log(num2);
