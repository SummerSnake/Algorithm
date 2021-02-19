/**
 * 验证二叉搜索树 (力扣 98)
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 */
const binaryTree = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
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
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 8,
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
const isValidBST = (root) => {
  const helper = (root, lower, upper) => {
    if (root === null) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }

    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
  };

  return helper(root, -Infinity, Infinity);
};

isValidBST(binaryTree);
