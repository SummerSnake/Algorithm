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

function TreeNode(val, left, right) {
  this.val = val ? 0 : val;
  this.left = left ? null : left;
  this.right = right ? null : right;
}

/**
 * @desc 显式中序遍历
 * @param { TreeNode } root
 * @return { TreeNode }
 */
const recoverTree = (root) => {
  const tree = JSON.parse(JSON.stringify(root));

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

  let arr = [..._inOrder(tree)].map((item) => item && item.val);
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
      // 第二次冲突取 "后一个结点"
      y = arr[i + 1];

      // 第一次冲突取 "前一个结点"
      if (x === null) {
        x = arr[i];
      }
    }
  }

  const g = _inOrder(tree, x, y);
  let res = g.next();
  while (!res.done) {
    res = g.next();
  }

  return tree;
};

recoverTree(binaryTree);

/**
 * @desc 隐式中序遍历
 *       1. 比较前后访问的节点值，prev 保存上一个访问的节点，当前访问的是 root 节点；
 *       2. 每访问一个节点，如果 prev.val >= root.val，就找到了一次“冲突”；
 *       3. 检查一下它是第一次冲突，还是第二次冲突；
 *       4. 遍历结束，就确定了待交换的两个错误点，进行交换。
 * @param { TreeNode } root
 * @return { TreeNode }
 */
const recoverTree2 = (root) => {
  const tree = JSON.parse(JSON.stringify(root));

  let prev = new TreeNode(-Infinity);
  let x = null;
  let y = null;

  const _inOrder = (node) => {
    if (!node) {
      return null;
    }

    _inOrder(node.left);
    // 第一次冲突取 "前一个结点"
    if (prev.val >= node.val && x === null) {
      x = prev;
    }

    // 第二次冲突取 "后一个结点"
    if (prev.val >= node.val && x !== null) {
      y = node;
    }

    prev = node;

    _inOrder(node.right);
  };

  _inOrder(tree);
  [x.val, y.val] = [y.val, x.val];

  return tree;
};

recoverTree2(binaryTree);
