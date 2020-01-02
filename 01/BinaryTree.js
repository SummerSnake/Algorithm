/**
 * @desc 二叉树
 */

/**
 * @desc 创建二叉树节点
 *
 * 1. 一个指向父亲节点的指针 parent
 * 2. 一个指向左节点的指针 left
 * 3. 一个指向右节点的指针 right
 * 4. 一个数据域，存放节点的值 val
 */
class BinaryTreeNode {
  constructor(key, val) {
    this.parent = null;
    this.left = null;
    this.right = null;
    this.key = key;
    this.val = val;
  }
}

/**
 * @desc 创建二叉搜索树
 *
 * 在二叉搜索树中我们会维护一个root指针，这个就相当于链表中的head指针，
 * 在没有任何节点插入的时候它指向空，在有节点插入以后它指向根节点。
 */
class BinarySearchTree {
  constructor() {
    this.root = null;

    /**
     * @desc 插入节点
     *
     * 1. 若根节点为null，则直接插入到根节点；
     * 2. 若根节点不为null，则将要插入的值与根节点比较，若比根节点小，则插入到根节点的左子树，否则插入右子树；
     * 3. 依次与所插入的子树分支节点的值比较，重复步骤2，直到要插入的节点成为叶子节点。
     *
     * 定义两个指针，分别是 prev 和 tail，最初都指向 root，prev 是用来指向要插入的位置的父节点的指针，
     * 而 tail 是用来查找插入位置的，最终将会指向null。
     */
    this.insert = function(key, val) {
      const node = new BinaryTreeNode(key, val);
      let prev = this.root;
      let tail = this.root;
      // 若根节点为null，则直接插入到根节点；
      if (this.root === null) {
        this.root = node;
        return;
      }
      // tail 不为null 则进行循环，tail 为null则说明root为null，或已成为叶子节点
      while (tail) {
        prev = tail; // 将当前节点赋值给prev
        // 要插入的节点值比当前节点小
        if (node.val < tail.val) {
          tail = tail.left; // 把当前节点的 left 节点赋值给tail，用以下一次循环
        } else {
          tail = tail.right;
        }
      }

      // 当 tail 为空时，prev为最后一个节点
      if (prev.val < node.val) {
        prev.right = node;
      } else {
        prev.left = node;
      }
      // 将新节点的 parent 指针指向prev
      node.parent = prev;
    };

    /**
     * @desc 查找节点
     */
    this.find = function(val) {
      let prev = this.root;
      if (!prev) {
        return "空树";
      }
      while (prev && prev.val !== val) {
        if (prev.val > val) {
          prev = prev.left;
        } else {
          prev = prev.right;
        }
      }
      return prev;
    };

    /**
     * @desc 遍历
     *
     * 1. 中序遍历(inorder)：先遍历左节点，再遍历自己，最后遍历右节点，输出的刚好是有序的列表;
     * 2. 前序遍历(preorder)：先自己，再遍历左节点，最后遍历右节点;
     * 3. 后序遍历(postorder)：先左节点，再右节点，最后自己。
     *
     * 最常用的一般是中序遍历，因为中序遍历可以得到一个已经排好序的列表，这也是为什么会用二叉搜索树排序的原因
     */
    function* _inOrder(element) {
      if (!element) {
        return "空树";
      }
      // 1. 中序遍历
      yield* _inOrder(element.left);
      yield element;
      yield* _inOrder(element.right);
      // 2. 前序遍历
      // yield element;
      // yield* _inOrder(element.left);
      // yield* _inOrder(element.right);
      // 3. 后序遍历
      // yield* _inOrder(element.left);
      // yield* _inOrder(element.right);
      // yield element;
    }

    this.inOrder = function() {
      return _inOrder(this.root);
    };
  }
}

const tree = new BinarySearchTree();
tree.insert("first", 10);
tree.insert("second", 11);
tree.insert("third", 6);
tree.insert("fourth", 3);
tree.insert("fifth", 13);
console.log(tree.find(13));
const result = tree.inOrder();
// let arr = [...tree.inOrder()].map(item => item.val);
const arr = [];
for (let key of result) {
  arr.push(key.val);
}
console.warn(arr);
