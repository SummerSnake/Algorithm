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

const arr = [3, 9, 20, null, 7, 15, null];
const root = createBinaryTreeByArray(arr, 0);
console.log(root);

/**
 * @desc 将二叉树转换为 数组
 * @param { object } tree 要转换的二叉树
 * @return { array } 转换完成的数组
 */
const createArrayByBinaryTree = (tree) => {
  const arr = [];

  const recursion = (node) => {
    if (node) {
      arr.push(node.val);
      if (!(node.left && node.right) && (node.left || node.right)) {
        arr.push(null);
      }

      recursion(node.left);
      recursion(node.right);
    }
  };

  recursion(tree);

  return arr;
};

console.log(createArrayByBinaryTree(root));
