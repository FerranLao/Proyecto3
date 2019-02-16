const express = require("express");
const router = express.Router();
const SteamGames = require("../models/SteamGames");
const Events = require("../models/Events");
const { regularExp } = require("../bin/helper");
const { isLoggedIn } = require("../middlewares/IsLogged");
const Chat = require("../models/Chat");

router.post("/new", isLoggedIn(), (req, res, next) => {
  const { name, description, size, private, game } = req.body;
  Events.findOne({ name }).then(e => {
    if (e) {
      return res.json({ message: "Name already taken" });
    }
    Chat.create({messages:[]}).then(chat => {
      console.log(chat)
      const newEvent = {
        name,
        game,
        description,
        size,
        private,
        creator: req.user._id,
        party: [req.user._id],
        chat: chat._id
      };
      Events.create(newEvent).then(event => res.json(event));
    });
  });
});

router.post("/getevent", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  Events.findById(id)
    .populate("game creator party")
    .then(e => {
      res.json(e);
    });
});

router.post("/getpage", isLoggedIn(), (req, res, next) => {
  const { filter, page } = req.body;
  const reg = regularExp(filter);

  Events.find({ name: reg, private: false })
    .skip(page * 10)
    .limit(page * 10 + 10)
    .populate("game")
    .then(events => {
      Events.count({ name: reg, private: false }).then(count => {
        console.log(count);
        res.json({ events, count });
      });
    })
    .catch(e => res.json({ message: "Something went wrong" }));
});

router.post("/joinparty", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  Events.findByIdAndUpdate(id, { $push: { party: req.user._id } })
    .populate("game event party creator")
    .then(e => res.json(e));
});

module.exports = router;
