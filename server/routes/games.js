const express = require("express");
const router = express.Router();
const SteamGames = require("../models/SteamGames");

router.get("/getall", (req, res, next) => {
  SteamGames.find({ type: "game" })
    .then(games => {res.json({games})})
    .catch(e => res.json({ message: "Something went wrong" }));
});

module.exports = router;
