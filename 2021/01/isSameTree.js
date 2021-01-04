/**
 * 相同的树 (力扣 100)
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 *  @desc 逻辑公式的p和q:
 *           1. 除非是 p，不然就都不是 q；
 *           2. 也就是说，只有属于 p 的才可能属于 q，不属于 p 的都不在 q 里，说明 q 都在 p 里面。
 */
const binaryTree_01 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

const binaryTree_02 = {
  val: 1,
  left: {
    val: null,
    left: null,
    right: null,
  },
  right: {
    val: 1,
    left: null,
    right: null,
  },
};

/**
 * @desc 深度优先搜索
 * @param { TreeNode } p
 * @param { TreeNode } q
 * @return { boolean }
 */
const isSameTree = (p, q) => {
  // 两个节点都为空则返回 true
  if (p === null && q === null) {
    return true;
  }

  // 两个节点其中一个不为空，一个为空则返回 false
  if (p === null || q === null) {
    return false;
  }

  // 值不相等返回 false
  if (p.val !== q.val) {
    return false;
  }

  // 分别递归遍历两棵树的左子树和右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

isSameTree(binaryTree_01, binaryTree_02);
