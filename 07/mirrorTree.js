/**
 * 给定一个二叉树，输出它的镜像
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
 * @return { TreeNode }
 */
const mirrorTree = (root) => {
  if (!root) {
    return null;
  }

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  mirrorTree(root.left);
  mirrorTree(root.right);

  return root;
};

console.log(mirrorTree(root));

/**
 * @desc 迭代算法
 * @param { TreeNode } root
 * @return { TreeNode }
 */
const mirrorTree2 = (root) => {
  if (!root) {
    return null;
  }
  // 根节点入队
  const queue = [root];

  while (queue.length > 0) {
    // 首节点出队
    const node = queue.shift();
    // 为空进入下一次循环
    if (!node) {
      continue;
    }
    // 左右节点入队
    queue.push(node.left);
    queue.push(node.right);
    // 交换左右节点位置
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
  }

  return root;
};

console.log(mirrorTree2(root));
