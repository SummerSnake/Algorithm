/**
 * 给定一个二叉树，计算它的深度
 * 二叉树的深度等于左右子树的高度最大值，加上 1
 */

/**
 * @desc 创建二叉树节点
 *
 * 1. 一个指向左节点的指针 left
 * 2. 一个指向右节点的指针 right
 * 3. 一个数据域，存放节点的值 val
 */
class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

/**
 * @desc 将数组转换为 二叉树
 * @param { any[] } arr 要转换的数组
 * @param { number } index 当前下标
 * @return { TreeNode } 转换完成的二叉树
 */
const createBinaryTreeByArray = (arr, index) => {
  if (index < arr.length) {
    let val = arr[index];
    if (!val) {
      return null;
    }

    let node = new TreeNode(val);
    // 将数组值逐次传入 index=0, 2*index+1=1, 2*index+2=2
    node.left = createBinaryTreeByArray(arr, 2 * index + 1);
    node.right = createBinaryTreeByArray(arr, 2 * index + 2);

    return node;
  }

  return null;
};

const arr = [4, 2, 7, 1, 3, 6, 9];
const root = createBinaryTreeByArray(arr, 0);

/**
 * @desc 递归算法
 * @param { TreeNode } root
 * @return { number }
 */
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth(root));

/**
 * @desc 迭代算法
 * @param { TreeNode } root
 * @return { number }
 */
const maxDepth2 = (root) => {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let ret = 0;

  while (queue.length > 0) {
    let levelNum = queue.length; // 当前层中二叉树的节点数量
    ret += 1;

    // 依次将下一层的二叉树节点放入队列
    while (levelNum > 0) {
      const node = queue.shift();

      if (node) {
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }

      levelNum -= 1;
    }
  }

  return ret;
};

console.log(maxDepth2(root));
