/**
 * 开幕式焰火 (LCP 44)
 *
 * 给定一棵二叉树 root 代表焰火，节点值表示巨型焰火这一位置的颜色种类。
 * 要求计算巨型焰火有多少种不同的颜色 。
 */

const binaryTree = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 2,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  },
};

/**
 * @desc 递归中序遍历 + Set
 * @param { TreeNode } root
 * @return { number }
 */
const numColor = (root) => {
  if (root === null) {
    return 0;
  }

  const set = new Set();

  const inOrder = (root) => {
    if (root !== null) {
      if (root.left !== null) {
        inOrder(root.left);
      }

      set.add(root.val);

      if (root.right !== null) {
        inOrder(root.right);
      }
    }
  };

  inOrder(root);

  return set.size;
};

numColor(binaryTree);

/**
 * @desc 迭代前序遍历 + Set
 * @param { TreeNode } root
 * @return { number }
 */
const numColor2 = (root) => {
  if (root === null) {
    return 0;
  }

  const set = new Set();

  const preOrder = (root) => {
    const stack = [root];
    while (stack.length) {
      const node = stack.pop();

      set.add(node.val);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }
  };

  preOrder(root);

  return set.size;
};

numColor2(binaryTree);
