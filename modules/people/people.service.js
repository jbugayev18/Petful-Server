const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    const allPeople = {
      people: people.all(),
    };
    return allPeople;
  },

  enqueue(person) {
    // Add a person to the queue.
    people.enqueue(person);
    return this.get();
  },

  dequeue() {
    // Remove a person from the queue.
    people.dequeue();
    return this.get();
  },
};
