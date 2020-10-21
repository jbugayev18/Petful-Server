const express = require("express");
const json = require("body-parser").json();
const { dogs, cats } = require("../../store");

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  let pets = Pets.get();
  return res.status(200).json(pets);
});

router.get("/cats", (req, res) => {
  res.status(200).send(cats);
});

router.get("/dogs", (req, res) => {
  res.status(200).send(dogs);
});

router.delete("/", json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  let removeAnimal = type;
  let nextPets = Pets.dequeue(removeAnimal);
  return res.status(204).json(nextPets);
});

module.exports = router;
