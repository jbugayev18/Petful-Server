const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  const pets = Pets.get();
  res.status(200).json(pets);
});

// router.get('/cat') testing to see for a cat.

router.delete("/", json, (req, res) => {
  // Remove a pet from adoption.
  const { pets } = req.body;
  Pets.dequeue(pets);
  res.status(204);
});

module.exports = router;
