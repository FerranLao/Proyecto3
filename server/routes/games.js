const express = require("express");
const router = express.Router();
const SteamGames = require("../models/SteamGames");
const Events = require("../models/Events");
const { regularExp } = require("../bin/helper");
const { isLoggedIn } = require("../middlewares/IsLogged");
const SteamUser = require("../models/SteamUser");

router.post("/getpage", isLoggedIn(), (req, res, next) => {
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

router.post("/getmygames", isLoggedIn(), (req, res, next) => {
  const { steam, filter, page } = req.body;
  SteamUser.findById(steam)
    .populate("OwnedGames")
    .then(e => {
      const games = e.OwnedGames.filter(el => el.name.includes(filter));
      res.json({ games:games.slice(page*10,page*10+10), count: games.length });
    });
});

router.post("/getbyId", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  SteamGames.findById(id).then(e => {
    res.json(e);
  });
});

module.exports = router;
