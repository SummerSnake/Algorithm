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

/**
 * @desc 中序遍历(递归)
 * @param { TreeNode } root
 * @return { boolean }
 */
const isValidBST2 = (root) => {
  let prev = -Infinity;

  const inOrder = (node) => {
    if (!node) {
      return true;
    }

    // 中序遍历输出的值有序 2,3,4,5,6,7,8；
    // 所以我们保存上一个节点值 prev，与当前节点值作比较；
    // 如果当前值小于等于上一个值，那么这个树不是二叉搜索树。
    if (inOrder(node.left) && prev < node.val) {
      prev = node.val;

      return inOrder(node.right);
    }

    return false;
  };

  return inOrder(root);
};

isValidBST2(binaryTree);

/**
 * @desc 中序遍历(迭代)
 * @param { TreeNode } root
 * @return { boolean }
 */
const isValidBST3 = (root) => {
  const stack = [];
  let prev = -Infinity;

  while (stack.length || root) {
    // 所有左节点入栈
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // 左节点出栈(后进先出)
    root = stack.pop();

    if (root.val <= prev) {
      return false;
    }

    // 保存上一个节点值
    prev = root.val;
    // 遍历右子树
    root = root.right;
  }

  return true;
};

isValidBST3(binaryTree);
