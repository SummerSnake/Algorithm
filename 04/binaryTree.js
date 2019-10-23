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
    this.insert = function (key, val) {
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

        if (node.val < tail.val) { // 要插入的节点值比当前节点小
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
    }
  }
}
