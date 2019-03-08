const express = require("express");
const router = express.Router();
const SteamGames = require("../models/SteamGames");
const Events = require("../models/Events");
const { regularExp } = require("../bin/helper");
const { isLoggedIn } = require("../middlewares/IsLogged");
const Chat = require("../models/Chat");

router.post("/new", isLoggedIn(), (req, res, next) => {
  const { name, description, size, private, game, date, time } = req.body;
  Events.findOne({ name }).then(e => {
    if (e) {
      return res.json({ message: "Name already taken" });
    }
    Chat.create({ messages: [] }).then(chat => {
      const newEvent = {
        name,
        game,
        description,
        size,
        private,
        creator: req.user._id,
        party: [req.user._id],
        chat: chat._id,
        date,
        time: Number(time)
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
  const { _id } = req.user;
  const actualtime = Number(new Date().getTime());
  const reg = regularExp(filter);
  Events.find({
    name: reg,
    party: { $ne: _id },
    private: false,
    isFull: false,
    time: { $gte: actualtime }
  })
    .skip(page * 10)
    .limit(10)
    .populate("game")
    .then(events => {
      console.log(events);
      Events.count({
        name: reg,
        party: { $ne: _id },
        private: false,
        isFull: false,
        time: { $gte: actualtime }
      }).then(count => {
        res.json({ events, count });
      });
    })
    .catch(e => res.json({ message: "Something went wrong" }));
});

router.post("/getOwnPage", isLoggedIn(), (req, res, next) => {
  const { _id } = req.user;
  const { filter, page } = req.body;
  const reg = regularExp(filter);
  const actualtime = Number(new Date().getTime());

  Events.find({ party: { $in: _id }, name: reg, time: { $gte: actualtime } })
    .skip(page * 10)
    .limit(page * 10 + 10)
    .populate("game")
    .then(events => {
      Events.count({
        party: { $in: _id },
        name: reg,
        time: { $gte: actualtime }
      }).then(count => {
        res.json({ events, count });
      });
    })
    .catch(e => {
      res.json({ message: "Something went wrong" });
    });
});

router.post("/joinparty", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  Events.findByIdAndUpdate(
    id,
    { $push: { party: req.user._id } },
    { new: true }
  )
    .populate("game event party creator")
    .then(e => {
      console.log(e.party.length, e.size, e.isFull);
      if (e.size <= e.party.length) {
        Events.findByIdAndUpdate(id, { isFull: true }).then(e =>
          console.log("party full")
        );
      }
      res.json(e);
    });
});


module.exports = router;
