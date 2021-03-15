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

/**
 * @desc 回溯 + 剪枝
 * @param { number[] } candidates
 * @param { number } target
 * @return { number[][] }
 */
const combinationSum2 = (candidates, target) => {
  const res = [];

  candidates.sort((a, b) => a - b);
  const dfs = (arr, curr, index) => {
    // 符合条件的组合
    if (curr === 0) {
      res.push(arr);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      // candidates = [1,3,5,6]; target = 8;
      // 当 arr = [1, 3] 时：target = 8 - 1 - 3 = 4，此时 4 < 5，不符合条件；
      // 同理之后比5更大的元素也是不符合条件的，对于所有组合中以[1,3]为首的组合无需再进行下一步组合，直接进行下一轮组合
      if (curr < candidates[i]) {
        break;
      }

      // 每个元素可以被无限重复选取，所以以当前元素为搜索下标
      dfs([...arr, candidates[i]], curr - candidates[i], i);
    }
  };

  dfs([], target, 0);
  return res;
};

combinationSum2([1, 2], 4);
