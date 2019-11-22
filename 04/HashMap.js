/**
 * 哈希表
 *
 * 散列表（Hash table，也叫哈希表），是根据关键码值(Key value)而直接进行访问的数据结构。
 * 也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。
 * 这个映射函数叫做散列函数，存放记录的数组叫做散列表。
 *
 * 1. 散列函数就是把任意长度的输入，通过散列算法，变换成固定长度的输出，该输出就是散列值。
 * 2. 这种转换是一种压缩映射，也就是，散列值的空间通常远小于输入的空间，不同的输入可能会散列成相同的输出，
 *    所以不可能从散列值来确定唯一的输入值。
 * 3. 简单的说就是一种将任意长度的消息压缩到某一固定长度的消息摘要的函数。
 */
class HashMap {
  constructor() {
    /**
     * @desc 散列函数
     * @param { string }  data 要映射的值
     *
     * 霍纳算法是一种比较好的散列函数算法，计算时仍然先计算字符串中各字符的 ASCII 码值，不过求和时每次要乘以一个质数。
     * 为了避免碰撞，首先要确保散列表中用来存储数据的数组其大小是个质数。这一点和计算散列值时使用的取余运算有关。
     * 数组的长度应该在 100 以上，这是为了让数据在散列表中分布得更加均匀。
     */
    const hashCode = data => {
      const H = 37;  //质数
      const len = data.length;
      let total = 0;

      for (let i = 0; i < len; i += 1) {
        total += H * total + data.charCodeAt(i);
      }
      total = total % this.table.length;

      return parseInt(total);
    };

    /**
     * @desc 打印哈希表中的值
     */
    const showData = () => {
      for (let i = 0; i < this.size; i += 1) {
        if (this.table[i]) {
          console.log(`${i}：${this.table[i]}`);
        }
      }
    };


    // --------------  碰撞处理：开链法  --------------

    // 开链法：当碰撞发生时，仍然将键存储到通过散列算法产生的索引位置上，
    // 但实际上，每个数组元素又是一个新的数据结构，比如另一个数组，这样就能存储多个键了（即用二维数组实现）。


    /**
     * @desc 创建二维数组
     */
    const buildChains = () => {
      for (let i = 0; i < this.size; i += 1) {
        this.table[i] = [];
      }
    };

    /**
     * @desc 往哈希表中存储值
     * @param { string } key 要存入哈希表的数据的键
     * @param { string } data 要存入哈希表的数据
     */
    const put = (key, data) => {
      const index = hashCode(key);
      let i = 0;

      while (this.table[index][i]) {
        i += 1;
      }

      this.table[index][i] = key;
      this.table[index][i + 1] = data;
    };

    /**
     * @desc 从哈希表中获取值
     * @param { string } key 要获取的数据的键
     */
    const get = key => {
      const index = hashCode(key);
      let i = 0;

      while (this.table[index][i] !== key) {
        i += 2;
      }

      return this.table[index][i + 1];
    };

    this.table = new Array(137);
    this.hashCode = hashCode;
    this.showData = showData;
    this.buildChains = buildChains;
    this.put = put;
    this.get = get;
    this.size = this.table.length;
  }
}

const hashMap = new HashMap();
hashMap.buildChains();
hashMap.put('青岛', '八大关');
hashMap.put('黄岛', '金沙滩');
console.log(hashMap.table);
