/**
 * 组合总和 (力扣 39)
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合；
 * candidates 中的数字可以无限制重复被选取。
 */

/**
 * @desc 回溯
 * @param { number[] } candidates
 * @param { number } target
 * @return { number[][] }
 */
const combinationSum = (candidates, target) => {
  const res = [];

  const dfs = (arr, curr, index) => {
    // 不符合条件
    if (curr < 0) {
      return;
    }

    // 符合条件的组合
    if (curr === 0) {
      res.push(arr);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      // 每个元素可以被无限重复选取，所以以当前元素为搜索下标
      dfs([...arr, candidates[i]], curr - candidates[i], i);
    }
  };

  dfs([], target, 0);
  return res;
};

combinationSum([1, 2], 4);
