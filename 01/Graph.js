/**
 * @desc 数据结构 -- 图
 *
 * 1. 在图中，最基本的单元是顶点（vertex），相当于树中的节点；
 * 2. 顶点之间的关联关系，被称为边（edge）；
 * 3. 在有些图中，每一条边并不是完全等同的，这样就引入一个新概念：边的权重（Weight）。
 *    涉及到权重的图，被称为带权图（Weighted Graph）；
 * 4. 还有一种图，顶点之间的关联并不是完全对称的，
 *    这样一来，顶点之间的边就有了方向的区分，这种带有方向的图被称为有向图；
 *    没有方向区分的图，这种图被称为无向图；
 * 5. 图由边的集合及顶点的集合组成；
 * 6. 图中的一系列顶点构成路径，路径中所有的顶点都由边连接，路径的长度用路径中第一个顶点到最后一个顶点之间边的数量表示。
 */

/**
 * 1. 邻接表
 *
 * <1> 在邻接表中，图的每一个顶点都是一个链表的头节点，其后连接着该顶点能够直接达到的相邻顶点；
 * <2> 用 Map 表示，如果顶点A与顶点B、C、D相连，那么就将B、C、D存储在 Map 中key为 A 的位置。
 */
class Graph {
  constructor() {
    // 创建一个数组用来存放图中的所有顶点
    this.vertices = [];
    // 创建一个 Map 来存储邻接表
    this.adjacencyList = new Map();

    /**
     * @desc 向图中添加一个新的顶点
     * @param { array } vertex 要添加的顶点
     */
    this.addVertex = vertex => {
      this.vertices.push(vertex);
      this.adjacencyList.set(vertex, []); // 设置新顶点作为键，对应的值为一个空数组
    };

    /**
     * @desc 向两个顶点之间添加边
     * @param { any } first 第一个顶点
     * @param { any } second 第二个顶点
     */
    this.addEdge = (first, second) => {
      this.adjacencyList.get(first).push(second);
      this.adjacencyList.get(second).push(first);
    };

    /**
     * @desc 打印图
     */
    this.showGraph = () => {
      let str = "";

      for (let i = 0; i < this.vertices.length; i += 1) {
        str += vertices[i] + " => "; // 将顶点数组依次加入到字符串
        const neighbors = this.adjacencyList.get(vertices[i]); // 取得每个顶点的邻接表

        for (let j = 0; j < neighbors.length; j += 1) {
          str += neighbors[j] + " "; // 将邻接表中的相邻顶点加入到字符串中
        }
        str += "\n"; // 每输出一个顶点的邻接表，加一个换行
      }

      return str;
    };

    /**
     * @desc 给图的顶点标注不同的颜色来代表顶点的状态
     *
     * 1. 白色：表示该顶点还没有被访问过
     * 2. 灰色：表示该顶点被访问过，但是没有被探索过
     * 3. 黑色：表示该顶点被访问过且被完全探索过
     */
    const initColor = () => {
      const color = [];

      for (let i = 0; i < this.vertices.length; i += 1) {
        color[this.vertices[i]] = "white";
      }

      return color;
    };

    /**
     * @desc 广度优先遍历算法
     * @param { any } v 搜索起始顶点
     *
     * 从顶点v开始的广度优先搜索算法遵循的步骤为：
     * 1. 创建一个队列 queue，此处以数组模拟；
     * 2. 将顶点v标注为被访问过的(灰色的)，并将v推入队列queue；
     * 3. 如果 queue 非空，则运行以下步骤：
     *  <1> 将顶点 u 作为标注，弹出队列；
     *  <2> 将 u 标注为被访问过的(灰色)；
     *  <3> 将 u 所有未被访问过的相邻顶点(白色)，标注为被访问过(灰色)，并推入队列；
     *  <4> 将 u 标注为已被探索过的(黑色)。
     */
    this.bfs = v => {
      const color = initColor();
      const queue = [];
      queue.push(v);
      let str = "广度优先遍历的顺序为：";

      while (queue.length > 0) {
        const u = queue.shift();
        color[u] = "gray"; // 将 u 标注为被访问过的(灰色)
        const neighbors = this.adjacencyList.get(u); // 获取顶点u的所有相邻顶点

        // 将 u 所有未被访问过的相邻顶点(白色)，标注为被访问过(灰色)，并推入队列
        for (let i = 0; i < neighbors.length; i += 1) {
          const w = neighbors[i];

          if (color[w] === "white") {
            color[w] = "gray";
            queue.push(w);
          }
        }

        color[u] = "black"; // 将 u 标注为已被探索过的(黑色)
        str += u + " ";
      }

      return str;
    };

    /**
     * @desc 访问顶点方法
     * @param { any } u 当前访问顶点
     * @param { array } color 标识图的各顶点颜色的数组
     */
    let str = "深度优先遍历的顺序为：";
    const dfsVisit = (u, color) => {
      color[u] = "gray";
      str += u + " ";
      const neighbors = this.adjacencyList.get(u); // 获取顶点u的所有相邻顶点
      // 依次访问 顶点v 的所有未被访问的相邻顶点
      for (let i = 0; i < neighbors.length; i += 1) {
        const w = neighbors[i];

        if (color[w] === "white") {
          dfsVisit(w, color);
        }
      }
      color[u] = "black"; // 将 u 标注为已被探索过的(黑色)
    };

    /**
     * @desc 深度优先遍历算法
     *
     * 从顶点v开始的广度优先搜索算法遵循的步骤为：
     * 1. 将 顶点v 标注为被访问过的(灰色的)；
     * 2. 依次访问 顶点v 的所有未被访问的相邻顶点，将 顶点v 标注为已被探索过的(黑色)；
     * 3. 递归步骤 1、2。
     */
    this.dfs = () => {
      const color = initColor();

      for (let i = 0; i < this.vertices.length; i += 1) {
        const w = this.vertices[i];
        if (color[w] === "white") {
          dfsVisit(w, color);
        }
      }
      return str;
    };
  }
}

const graph = new Graph();
const vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const len = vertices.length;

for (let i = 0; i < len; i += 1) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.showGraph());
console.log(graph.bfs(vertices[6]));
console.log(graph.dfs());
