const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all the people currently in the queue.
  let allPeople = People.get();
  res.status(200).json(allPeople);
});

router.post("/", json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body;
  const newName = person;
  let newList = People.enqueue(newName);
  res.status(201).json(newList);
});

router.delete("/", (req, res) => {
  //delete first person to the queue.
  let updatedList = People.dequeue();
  res.status(204).json(updatedList);
});

module.exports = router;
