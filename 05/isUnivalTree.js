/**
 * @desc 判断给定的树是单值二叉树
 *
 * 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
 * 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
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

const arr = [1, 1, 1, null, 1, 1, null];
const root = createBinaryTreeByArray(arr, 0);

/**
 * @desc 深度优先遍历
 * @param { object } root 二叉树
 */
const isUnivalTree = (root) => {
  if (!root) {
    return false;
  }
  const map = new Map();
  let index = -1;

  const dfs = (node) => {
    if (node) {
      index += 1;
      map.set(index, node.val);

      dfs(node.left);
      dfs(node.right);
    }
  };

  // 递归树
  dfs(root);

  for (let val of map.values()) {
    if (val !== map.get(0)) {
      return false;
    }
  }

  return true;
};

console.log(isUnivalTree(root));

/**
 * @desc 迭代算法
 * @param { object } root 二叉树
 */
const isUnivalTree2 = (root) => {
  if (!root) {
    return false;
  }
  const val = root.val;
  const queue = [root];

  while (queue.length) {
    const cur = queue.shift();

    if (cur.val !== val) {
      return false;
    }
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }

  return true;
};

console.log(isUnivalTree2(root));
