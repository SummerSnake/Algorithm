/**
 * 二叉树的层次遍历
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
 * @param { array } arr 要转换的数组
 * @param { number } index 当前下标
 * @return { object } 转换完成的二叉树
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

const arr = [3, 9, 20, null, null, 15, 7];
const root = createBinaryTreeByArray(arr, 0);

// ----------------    题解    ----------------

/**
 * @desc 迭代算法(广度优先遍历)
 * @param { object } root 二叉树
 * @return { array }
 */
const levelOrder = root => {
  const res = [];
  const queue = [{ index: 0, node: root }];

  while (queue.length > 0) {
    const { index, node } = queue.shift();

    if (!node) {
      continue;
    }

    res[index] = res[index] ? [...res[index], node.val] : [node.val];

    queue.push({ index: index + 1, node: node.left });
    queue.push({ index: index + 1, node: node.right });
  }

  return res;
};

console.log(levelOrder(root));

/**
 * @desc 深度优先遍历
 * @param { object } node 当前节点
 * @param { array } res 输出数组
 * @param { number } level 层级
 * @return { array }
 */
const levelOrder2 = (node, res = [], level = 0) => {
  if (!node) {
    return;
  }

  res[level] = res[level] ? [...res[level], node.val] : [node.val];

  levelOrder2(node.left, res, level + 1);
  levelOrder2(node.right, res, level + 1);

  return res;
};

console.log(levelOrder2(root));
