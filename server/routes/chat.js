const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/IsLogged");
const Chat = require("../models/Chat");
const Message = require("../models/Message")
router.post("/getchat", isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  Chat.findById(id).populate("messages").then(e => {
    const{messages}=e
    res.json(messages)
  });
});

router.post("/newmessage",isLoggedIn(),(req,res,next)=>{
  const {text, to}=req.body
  Message.create({text,from:req.user._id}).then(e=>{
    Chat.findByIdAndUpdate(to,{$push:{messages:e._id}}).then(e=>console.log("done"))
  })
})
module.exports = router;
