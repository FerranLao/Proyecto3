const express = require("express");
const router = express.Router();
const SteamGames = require("../models/SteamGames");
const Events = require("../models/Events");
const { regularExp } = require("../bin/helper");

router.post("/new", (req, res, next) => {
  const { name, description, size, private, game } = req.body;
  Events.findOne({ name }).then(e => {
    if (e) {
      return res.json({ message: "Name already taken" });
    }
    const newEvent = {
      name,
      game,
      description,
      size,
      private,
      creator: req.user._id
    };
    Events.create(newEvent).then(event => res.json(event));
  });
});

module.exports = router;
