const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const nextToBeAdopted = {
    cat : pets.cats.show(),
    dog : pets.dogs.show()

    }
    return nextToBeAdopted; 
    }, 

    getAll() {
      const allPets = {
        cats: pets.cats.all(), 
        dogs: pets.dogs.all()
      }; 
      return allPets; 
    }, 
  

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'dogs'){
      if (pets.dogs.first.next === null){
        store.dogs.forEach(dog => pets.dogs.enqueue(dog))
      }
      pets.dogs.dequeue()
    } else if (type == 'cats'){
      if (pets.cats.first.next === null ) {
        store.cats.forEach(cat => pets.cats.enqueue(cat))
      }
      pets.cats.dequeue()
    }
    return this.get(); 
  }
}
