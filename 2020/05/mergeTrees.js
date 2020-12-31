/**
 * 给定两个二叉树，合并为一个新的二叉树。
 * 合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，
 * 否则不为 NULL 的节点将直接作为新二叉树的节点。
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
    // 将新节点的 parent 指针指向prev
    node.parent = prev;
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
 * @desc 前序遍历(递归)
 *
 * 如果其中有一棵树为空，那么我们返回另一颗树作为结果；
 * 如果两棵树均为空，此时返回任意一棵树均可（因为都是空）。
 * 1. 在遍历时，如果两棵树的当前节点均不为空，我们就将它们的值进行相加，并对它们的左孩子和右孩子进行递归合并；
 */
const mergeTrees = (t1, t2) => {
  if (t1 && t2) {
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
  }

  return t1 || t2;
};

// const newTree = mergeTrees(tree.root, tree2.root);
// console.log(newTree);

/**
 * @desc 迭代算法
 */
const mergeTrees2 = (t1, t2) => {
  if (t1 && t2) {
    const stack = [[t1, t2]]; // 新建栈，两棵树的根节点入栈

    while (stack.length > 0) {
      const node = stack.pop(); // 取出栈顶元素

      if (!node[1]) {
        // 空节点跳出本次循环(node[1]为t2节点，如果为空则保留t1节点)
        continue;
      }

      node[0].val += node[1].val; // 两节点同时存在值相加

      if (!node[0].left) {
        // t1左节点为空，则将t2左节点赋值给t1
        node[0].left = node[1].left;
      } else {
        // t1左节点不为空，则将t1左节点、t2左节点入栈
        stack.push([node[0].left, node[1].left]);
      }

      if (!node[0].right) {
        // t1右节点为空，则将t2右节点赋值给t1
        node[0].right = node[1].right;
      } else {
        // t1右节点不为空，则将t1右节点、t2右节点入栈
        stack.push([node[0].right, node[1].right]);
      }
    }

    return t1;
  }

  return t1 || t2;
};

const newTree2 = mergeTrees2(tree.root, tree2.root);
console.log(newTree2);
