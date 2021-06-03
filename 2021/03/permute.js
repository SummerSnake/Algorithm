/**
 * 全排列 (力扣 46)
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。
 */
const nums = [1, 2, 3];

/**
 * @desc 回溯
 * @param { number[] } nums
 * @return { number[][] }
 */
const premute = (nums = []) => {
  const len = nums.length;
  const path = []; // 遍历路径
  const used = []; // 已遍历状态标识
  const res = [];

  /**
   * @desc 深度优先遍历
   * @param { number } depth 树的深度
   */
  const dfs = (depth = 0) => {
    // 遍历至叶子节点
    if (depth === len) {
      res.push([...path]);
      return;
    }

    // 在非叶子结点处，产生不同的分支
    for (let i = 0; i < len; i++) {
      // 判断当前元素是否使用过
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        debugger;
        dfs(depth + 1);

        // 回溯 => 重置状态
        used[i] = false;
        path.splice(path.length - 1, 1);
      }
    }
  };

  dfs();
  return res;
};

premute(nums);
