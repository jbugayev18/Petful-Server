const Node = require("./Node");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  //insertion operation in a queue is limited to only 1 place. Added to the end of the que.
  enqueue(data) {
    const node = new Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  //removal of the queue. Only place to remove an item from is the beginning of the queue.
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }

    const node = this.first;

    //if this is the last item in the queue
    if (this.last === node) {
      this.last = null;
    }

    this.first = this.first.next;

    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if (this.first === null) {
      return;
    }

    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    const allPets = [];
    let node = this.first;
    while (node) {
      allPets.push(node.value);
      node = node.next;
    }
    return allPets;
  }
}

module.exports = Queue;
