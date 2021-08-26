/**
 * 救生艇 (力扣 881)
 */

/**
 * @desc 贪心算法
 * @param { number[] } people
 * @param { number } limit
 * @return { number }
 */
const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);
  let res = 0;
  let light = 0;
  let heavy = people.length - 1;

  while (light <= heavy) {
    // 将体重最轻的人与体重最重的人分配至一艘船
    if (people[light] + people[heavy] <= limit) {
      light++;
    }

    // 体重最轻的人与体重最重的人无法分配至一艘船，则单独分配一艘船给体重最重的人
    heavy--;
    res += 1;
  }

  return res;
};

numRescueBoats([3, 5, 3, 4], 5);
