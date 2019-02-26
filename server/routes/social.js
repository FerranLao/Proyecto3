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
  Friends.find({users:_id}).then(e=>{
    console.log(e)
    res.json(e)
  })
});

router.post("/addfriend", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  const { _id } = req.user;

  Friends.findOne({ users: [id, _id] }).then(e => {
    if (e) {
      if(!e.accepted){
        console.log("already invited")
        return res.json("already invited")
      }
      console.log("already friends")
      return res.json({ message: "already friends" });
    }
  
    Friends.create({users:[id,_id]}).then(e=>{
      Invitation.create({from:_id,to:id,for:e._id,type:"Friend"}).then(e=>res.json("invited"))
    })
  });
});

module.exports = router;
