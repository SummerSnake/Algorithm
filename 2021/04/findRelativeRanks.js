/**
 * 相对名次 (力扣 506)
 *
 * 给定一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。
 * 所有得分都 互不相同 。
 *
 * 运动员将根据得分决定名次，其中名次第1的运动员得分最高，名次第2的运动员得分第2高，依此类推。
 * 运动员的名次决定了他们的获奖情况：
 *  · 名次第 1 的运动员获金牌 "Gold Medal" 。
 *  · 名次第 2 的运动员获银牌 "Silver Medal" 。
 *  · 名次第 3 的运动员获铜牌 "Bronze Medal" 。
 *  · 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 i 的运动员获得编号 "i"）。
 */

const score = [10, 3, 8, 9, 4];

/**
 * @desc Map 辅助，截取最大值
 * @param { number[] } score
 * @return { string[] }
 */
const findRelativeRanks = (score) => {
  const map = new Map();
  const len = score.length;

  let i = 0;
  while (i < len) {
    map.set(score[i], i);
    i++;
  }

  const res = new Array(len);
  let j = 1;
  while (score.length > 0) {
    const max = Math.max(...score);
    score.splice(score.indexOf(max), 1);

    const index = map.get(max);
    if (j === 1) {
      res[index] = 'Gold Medal';
      j += 1;
      continue;
    }
    if (j === 2) {
      res[index] = 'Silver Medal';
      j += 1;
      continue;
    }
    if (j === 3) {
      res[index] = 'Bronze Medal';
      j += 1;
      continue;
    }

    res[index] = `${j}`;
    j += 1;
  }

  return res;
};

findRelativeRanks(score);
