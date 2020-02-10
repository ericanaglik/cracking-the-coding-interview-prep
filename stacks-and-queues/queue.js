class Queue {
  constructor() {
    this.stac = new Array();
  }
  
  enqueue(item) {
    this.stac.unshift(item);
  }
  dequeue() {
    return this.stack.pop()
  }
  peek() {
    return this.stack.slice(-1)[0]
  }
  is_empty() {
    return this.stack.length === 0
  }
}

module.exports = Queue