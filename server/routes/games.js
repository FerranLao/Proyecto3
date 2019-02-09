const express = require("express");
const router = express.Router();
const SteamGames = require("../models/SteamGames");
const { regularExp } = require("../bin/helper");
router.get("/getall", (req, res, next) => {
  SteamGames.find({ type: "game" })
    .then(games => {
      res.json({ games });
    })
    .catch(e => res.json({ message: "Something went wrong" }));
});

router.post("/getpage", (req, res, next) => {
  const { filter, page } = req.body;
  const reg = regularExp(filter);

  SteamGames.find({ name: reg, type: "game" })
    .skip(page * 10)
    .limit(page * 10 + 10)
    .then(games => {
      SteamGames.count({ name: reg, type: "game" }).then(count => {
        res.json({ games, count });
      });
    })
    .catch(e => res.json({ message: "Something went wrong" }));
});

module.exports = router;
