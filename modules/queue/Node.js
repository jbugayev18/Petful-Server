//Creates a node containing the data and a reference to the next item

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = Node;
