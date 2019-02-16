const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middlewares/IsLogged");
const Chat = require("../models/Chat");

router.post("/getchat", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  Chat.findById(id).populate("messages")
    .then(e => res.json(e));
});

module.exports = router;
