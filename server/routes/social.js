const express = require("express");
const router = express.Router();
const { regularExp } = require("../bin/helper");
const { isLoggedIn } = require("../middlewares/IsLogged");
const User = require("../models/User");


router.get("/getfriends",isLoggedIn(),(req,res,next)=>{
  const{friends}=req.user
  User.find({friends}).populate("SteamUser").then(e=>res.json(e))
})

router.post("/addfriend", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  const { _id } = req.user;
  User.findById(_id).then(e => {
    if (!e.friends.includes(id)) {
      User.findByIdAndUpdate(_id, { $push: { friends: id } }).then(e =>
        res.json({ message: "added" })
      );
    } else {
      res.json({ message: "already friends" });
    }
  });
});

module.exports = router;
