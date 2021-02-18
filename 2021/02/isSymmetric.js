/**
 * 对称二叉树 (力扣 101)
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 */
const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

/**
 * @desc 递归
 * @param { TreeNode } root
 * @return { boolean }
 */
const isSymmetric = (root) => {
  const dfs = (left, right) => {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    return dfs(left.left, right.right) && dfs(left.right, right.left);
  };

  if (!root) {
    return true;
  }

  return dfs(root.left, root.right);
};

isSymmetric(binaryTree);
