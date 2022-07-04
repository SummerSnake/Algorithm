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
        set.add(root.left.val);

        inOrder(root.left);
      }

      set.add(root.val);

      if (root.right !== null) {
        set.add(root.right.val);

        inOrder(root.right);
      }
    }
  };

  inOrder(root);

  return set.size;
};

numColor(binaryTree);
