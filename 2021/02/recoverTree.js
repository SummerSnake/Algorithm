/**
 * 恢复二叉搜索树 (力扣 99)
 *
 * 给定二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。
 * 要求在不改变其结构的情况下，恢复这棵树。
 */

const binaryTree = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 4,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  },
};

/**
 * @desc 显式中序遍历
 * @param { TreeNode } root
 * @return { TreeNode }
 */
const recoverTree = (root) => {
  function* _inOrder(node, x, y) {
    if (!node) {
      return null;
    }

    if (x !== null && y !== null) {
      if (node.val === x) {
        node.val = y;
      } else if (node.val === y) {
        node.val = x;
      }
    }

    yield* _inOrder(node.left, x, y);
    yield node;
    yield* _inOrder(node.right, x, y);
  }

  let arr = [..._inOrder(root)].map((item) => item && item.val);
  let x = null;
  let y = null;

  // 中序遍历输出递增数组；
  // 1. 假设正常递增序列为 '...a1、a2、a3、...、b1、b2、b3...'，此时规律是 a1 < a2 < a3；
  // 2. 当 a1 和 b1 交换时 '...a1、b2、a3、...、b1、a2、b3...'；
  // 3. a1 和 b2 间的关系还是 a1 < b2，但改变的关系是 b2 > a3；
  // 4. 即交换后，第一次出现冲突，是在 交换结点和其后结点 上发生的，所以选第一次冲突的 "前一个结点"；
  // 5. 同理，第二次冲突选后一个结点。
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      // 第二次冲突选后一个结点
      y = arr[i + 1];

      // 第一次冲突取 "前一个结点"
      if (x === null) {
        x = arr[i];
      }
    }
  }

  const g = _inOrder(root, x, y);
  let res = g.next();
  while (!res.done) {
    res = g.next();
  }

  return root;
};

recoverTree(binaryTree);
