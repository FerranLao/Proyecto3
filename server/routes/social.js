const express = require("express");
const router = express.Router();
const { regularExp } = require("../bin/helper");
const { isLoggedIn } = require("../middlewares/IsLogged");
const User = require("../models/User");
const Chat = require("../models/Chat");
const Friends = require("../models/Friends");
const Invitation = require("../models/Invitation");

router.get("/getfriends", isLoggedIn(), (req, res, next) => {
  const { _id } = req.user;
  Friends.find({ users: _id }).then(e => {
    console.log(e);
    res.json(e);
  });
});

router.get("/getinvites", isLoggedIn(), (req, res, next) => {
  const { _id } = req.user;
  Invitation.find({ to: _id })
    .populate("for from")
    .then(e => res.json(e));
});

router.get("/getmyinvites", isLoggedIn(), (req, res, next) => {
  const { _id } = req.user;
  Invitation.find({ from: _id })
    .populate("for from")
    .then(e => res.json(e));
});

router.post("/addfriend", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  const { _id } = req.user;

  Friends.findOne({ users: [id, _id] }).then(e => {
    if (e) {
      if (!e.accepted) {
        console.log("already invited");
        return res.json("already invited");
      }
      console.log("already friends");
      return res.json({ message: "already friends" });
    }

    Friends.create({ users: [id, _id] }).then(e => {
      Invitation.create({ from: _id, to: id, for: e._id, type: "Friend" }).then(
        e => res.json("invited")
      );
    });
  });
});

router.post("/accept", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  Invitation.findById(id).then(e => {
    const { type, from, to } = e;
    if (type == "Friend") {
      Friends.findByIdAndUpdate(e.for, { accepted: true })
        .then(friend =>
          User.findOneAndUpdate(to, { push: { friends: friend } })
        )
        .then(e => {
          Invitation.findByIdAndDelete(id);
        })
        .then(e => res.json("done"));
    }
  });
});


router.post("/reject",isLoggedIn(),(req,res,next)=>{
  const {id}= req.body;
  Invitation.findById(id).then(e=>{
    const {type,from,to}=e;
    if(type=="Friend"){
      User.findByIdAndUpdate(from,{$pull:{friends:e.for}})
    }
  })
})

module.exports = router;
