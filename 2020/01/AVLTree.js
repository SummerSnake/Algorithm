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
 * 1. 一个指向左节点的指针 left
 * 2. 一个指向右节点的指针 right
 * 3. 一个数据域，存放节点的值 val，及标识符 key
 */
class AVLTreeNode {
  constructor(key, val) {
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
    const getHeight = function(element) {
      return !element ? 0 : Math.max(getHeight(element.left), getHeight(element.right)) + 1;
    };

    /**
     * @desc 向左单旋转
     * @param { object } element 当前节点
     */
    const rotateLL = function(element) {
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
    const rotateRR = function(element) {
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
    const rotateLR = function(element) {
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
    const rotateRL = function(element) {
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
    const makeBalance = function(element) {
      let node = element;
      if (!node) {
        return null;
      }
      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
      // 如果左右子树平衡因子为-1,0,1，则为平衡树，不做任何操作
      if (leftHeight - rightHeight >= -1 && leftHeight - rightHeight <= 1) {
        return node;
      }
      // 如果左子树高度比右子树高度大
      if (leftHeight - rightHeight > 1) {
        // 如果左子树的左子树高度大于等于左子树的右子树高度，进行右单旋，否则需要先左后右双旋
        node =
          getHeight(node.left.left) >= getHeight(node.left.right) ? rotateRR(node) : rotateLR(node);
      } else {
        // 右子树高度比左子树高度大
        // 如果右子树的右子树高度大于等于右子树的左子树高度, 进行左单旋，否则需要先右后左双旋转
        node =
          getHeight(node.right.right) >= getHeight(node.right.left)
            ? rotateLL(node)
            : rotateRL(node);
      }
      return node;
    };

    /**
     * @desc 插入节点
     * @param { object } element 要插入的位置所存在的节点（当前节点）
     * @param { object } newElement 要插入的节点
     */
    const _insert = function(element, newElement) {
      let node = element;
      // 当前节点不存在，直接将新节点插入
      if (!node) {
        node = newElement;
        return node;
      }
      // 当前节点值与新节点值相等，不做任何操作
      if (newElement.val === node.val) {
        return node;
      }
      // 如果新节点值小于当前节点，则插入到当前节点左子树
      if (newElement.val < node.val) {
        if (!node.left) {
          // 如果左子树为空，则直接插入
          node.left = newElement;
        } else {
          // 否则递归循环插入
          node.left = _insert(node.left, newElement);
          // 将树旋转至平衡
          node = makeBalance(node);
        }
      } else {
        // 插入右子树
        if (!node.right) {
          node.right = newElement;
        } else {
          node.right = _insert(node.right, newElement);
          node = makeBalance(node);
        }
      }
      return node;
    };
    this.insert = function(key, val) {
      const newElement = new AVLTreeNode(key, val);
      this.root = _insert(this.root, newElement);
    };

    /**
     * @desc 删除节点
     * @param { object } element 当前节点
     * @param { object } delElement 要删除的节点
     */
    const _delete = function(element, delElement) {
      let node = element;
      if (!node) {
        return null;
      }
      // 如果要删除节点的val等于当前节点值，即是要删除的节点
      if (delElement === node.val) {
        // 如果是叶子节点，直接删除
        if (!node.left && !node.right) {
          return null;
        }
        // 如果有两个子节点
        if (!!node.left && !!node.right) {
          let temp = node.right;
          // 查找右子树中最小的节点
          while (temp["left"] !== null) {
            temp = temp.left;
          }
          // 右子树中最小的节点赋值给当前节点
          node.key = temp.key;
          node.val = temp.val;
          // 递归删除右子树中最小的节点
          node.right = _delete(node.right, temp.val);
          node = makeBalance(node);
        } else {
          // 如果只有一个节点
          node = !node.left ? node.right : node.left;
        }
        return node;
      }
      // 如果要删除节点的val小于根节点值，则从左子树查找
      if (delElement < node.val) {
        node.left = _delete(node.left, delElement);
        node = makeBalance(node);
      } else {
        // 如果要删除节点的val大于根节点值，则从右子树查找
        node.right = _delete(node.right, delElement);
        node = makeBalance(node);
      }
      return node;
    };
    this.delete = function(delElement) {
      this.root = _delete(this.root, delElement);
    };
    /**
     * @desc 打印树
     */
    this.print = function() {
      console.log(this.root);
    };
  }
}

const tree = new AVLTree();
const existData = [];

for (let len = 10; len > 0; len -= 1) {
  const data = ~~(100 * Math.random());
  if (!existData.includes(data)) {
    existData.push(data);
    tree.insert(data, data);
  } else {
    len += 1;
  }
}

tree.print();

const deletedData = [];
for (let len = 3; len > 0; len--) {
  const index = ~~(Math.random() * existData.length);
  deletedData.push(existData[index]);
  tree.delete(existData.splice(index, 1));
}

console.warn(deletedData);
tree.print();
