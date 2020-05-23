/**
 * 旅行终点站
 *
 * 给定一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，
 * 其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。
 * 找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。
 * 题目数据保证线路图会形成一条不存在循环的线路，因此只会有一个旅行终点站。
 */

const paths = [
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];

/**
 * @desc ES6 Map()
 * @param { string[][] } paths
 * @return { string }
 */
const destCity = (paths) => {
  const map = new Map();

  for (let i = 0; i < paths.length; i++) {
    map.set(paths[i][0], paths[i][1]);
  }

  for (let [key, value] of map) {
    if (!map.has(value)) {
      return value;
    }
  }
};

console.log(destCity(paths));

/**
 * @desc 双数组
 * @param { string[][] } paths
 * @return { string }
 */
const destCity2 = (paths) => {
  const left = [];
  const right = [];

  for (let item of paths) {
    left.push(item[0]);
    right.push(item[1]);
  }

  return right.filter((item) => !left.includes(item)).join();
};

console.log(destCity2(paths));
