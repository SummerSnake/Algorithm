/**
 * AVL树  平衡二叉树
 *
 * 左子树和右子树的高度之差绝对值不超过1。
 * 平衡二叉树的每个节点的平衡因子只能是-1 ，1 ，0；
 * -1：表示左子树比右子树高
 *  1: 表示右子树比左子树高
 *  0：表示左子树和右子树等高
 */
/**
 * @desc 创建二叉树节点
 *
 * 1. 一个指向父亲节点的指针 parent
 * 2. 一个指向左节点的指针 left
 * 3. 一个指向右节点的指针 right
 * 4. 一个数据域，存放节点的值 val
 */
class AVLTreeNode {
  constructor(key, val) {
    this.parent = null;
    this.left = null;
    this.right = null;
    this.key = key;
    this.val = val;
  }
}

class AVLTree {
  constructor() {
    this.root = null;

    /**
     * @desc 计算树的高度
     * @param { object } element 当前节点
     */
    const getHeight = function (element) {
      if (!element) {
        return 0;
      } else {
        return Math.max(getHeight(element.left), getHeight(element.right)) + 1;
      }
    };

    /**
     * @desc 向左单旋转
     * @param { object } element 当前节点
     */
    const rotateLL = function (element) {
      if (!element) {
        return null;
      }
      let temp = element.right;
      element.right = temp.left;
      temp.left = element;
      return temp;
    };

    /**
     * @desc 向右单旋转
     * @param { object } element 当前节点
     */
    const rotateRR = function (element) {
      if (!element) {
        return null;
      }
      let temp = element.left;
      element.left = temp.right;
      temp.right = element;
      return temp;
    };

    /**
     * @desc 先左后右双旋转
     * @param { object } element 当前节点
     */
    const rotateLR = function (element) {
      if (!element) {
        return null;
      }
      element.left = rotateLL(element.left);
      return rotateRR(element);
    };

    /**
     * @desc 先右后左双旋转
     * @param { object } element 当前节点
     */
    const rotateRL = function (element) {
      if (!element) {
        return null;
      }
      element.right = rotateRR(element.right);
      return rotateLL(element);
    };

    /**
     * @desc 将树旋转至平衡
     * @param { object } element 当前节点
     */
    const makeBalance = function (element) {
      let node = element;
      if (!node) {
        return null;
      }

      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
      // 如果左右高度相等，则为平衡树，不做任何操作
      if (leftHeight === rightHeight) {
        return node;
      }
      // 如果左子树高度比右子树高度大
      if (leftHeight - rightHeight > 1) {
        // 如果左子树的左子树高度大于等于左子树的右子树高度，进行右单旋，否则需要先左后右双旋
        node = getHeight(node.left.left) >= getHeight(node.left.right) ? rotateRR(node) : rotateLR(node);
      } else { // 右子树高度比左子树高度大
        // 如果右子树的右子树高度大于等于右子树的左子树高度, 进行左单旋，否则需要右左双旋
        if (getHeight(node.right.right) >= getHeight(node.right.left)) {
          node = rotateLL(node);
        } else {
          node = rotateRL(node);
        }
      }
      return node;
    };

    /**
     * @desc 插入节点
     * @param { object } element 要插入的位置所存在的节点（当前节点）
     * @param { object } newElement 要插入的节点
     */
    const _insert = function (element, newElement) {
      // 当前节点不存在，直接将新节点插入
      if (!element) {
        element = newElement;
        return element;
      }
      // 当前节点值与新节点值相等，不做任何操作
      if (newElement.val === element.val) {
        return element;
      }
      // 如果新节点值小于当前节点，则插入到当前节点左子树
      if (newElement.val < element.val) {
        if (!element.left) { // 如果左子树为空，则直接插入
          element.left = newElement;
        } else { // 否则递归循环插入
          element.left = _insert(element.left, newElement);
          // 将树旋转至平衡
          element = makeBalance(element);
        }
      } else { // 插入右子树
        if (!element.right) {
          element.right = newElement;
        } else {
          element.right = _insert(element.right, newElement);
          element = makeBalance(element);
        }
      }
      return element;
    };
    this.insert = function (key, val) {
      const newElement = new AVLTreeNode(key, val);
      this.root = _insert(this.root, newElement);
    }
  }
}

const tree = new AVLTree();
const existData = [];
for (let len = 10; len > 0; len--) {
  const data = ~~(100 * Math.random());
  if (-1 === existData.indexOf(data)) {
    existData.push(data);
    tree.insert(data, data);
  } else {
    len++;
  }
}

console.log(tree);
