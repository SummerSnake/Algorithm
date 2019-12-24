/**
 * 优先队列
 *
 * 1. 在优先队列中，元素被赋予优先级。
 * 2. 当访问元素时，具有最高优先级的元素最先删除。
 * 3. 优先队列具有最高级先出 （first in, largest out）的行为特征。
 */
class PriorityQueue {
  constructor() {
    this.queue = [];
    // 队列中的元素个数
    this.size = () => this.queue.length;
    // 入队（优先队列）
    this.enQueue = item => {
      if (this.isEmpty()) { // 如果队列是空的，则直接插入
        this.queue.push(item);
      } else {
        let flag = false; // 验证是否排队
        let i = this.queue.length - 1;

        while (i > 0) {
          if (item.priority <= this.queue[i].priority) { // 如果新增元素的优先级小于等于i的优先级
            this.queue.splice(i += 1, 0, item); // 将新增元素插入到i的后面
            flag = true;
            break;
          }
          i -= 1;
        }
        if (!flag) { // 如果循环一圈都没有找到能插队的位置，说明新增元素优先级最大，直接插入队列头部
          this.queue.unshift(item);
        }
      }
    };
    // 出队
    this.deQueue = () => this.queue.shift();
    // 验证队列是否为空
    this.isEmpty = () => !this.queue.length;
    // 获取队列的第一个元素
    this.front = () => this.queue[0];
    // 清空队列
    this.clear = () => this.queue = [];
  }
}

const priority = new PriorityQueue();
priority.enQueue({ priority: 1 });
priority.enQueue({ priority: 2 });
priority.enQueue({ priority: 3 });
priority.enQueue({ priority: 4 });
priority.enQueue({ priority: 5 });
priority.enQueue({ priority: 5 });
priority.deQueue();
console.log(priority);
