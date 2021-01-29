/**
 * 重建二叉树 (剑指 offer 07)
 *
 * 输入某二叉树的前序遍历和中序遍历的结果，要求重建该二叉树；
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 */

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @desc 递归 (分治算法)
 * @param { number[] } preorder
 * @param { number[] } inorder
 * @return { TreeNode }
 */
const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const len = preorder.length;
  const node = new TreeNode(preorder[0]);

  // i 有两个含义，一个是根节点在中序遍历中的下标，另一个是当前左子树的节点个数
  let i = 0;
  while (i < len) {
    if (inorder[i] === preorder[0]) {
      break;
    }

    i++;
  }

  // preorder.slice(1, i + 1)、inorder.slice(0, i) 均为左子树节点集合
  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));

  return node;
};

buildTree(preorder, inorder);
