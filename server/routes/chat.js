const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middlewares/IsLogged");
const Chat = require("../models/Chat");

router.post("/getchat", isLoggedIn(), (req, res, next) => {
  
  const { id } = req.body;
  Chat.findById(id)
    .then(e => res.json(e));
});

router.get("/enterchatroom/:id", isLoggedIn(), (req, res, next) => {
  const { id } = req.params;
 
  io.on("connection", function(socket) {
    socket.join(id);
    socket.emit(id,"hola")
  });
});

router.get("/chatroom/:id",isLoggedIn(),(req,res,next)=>{

})

module.exports = router;
