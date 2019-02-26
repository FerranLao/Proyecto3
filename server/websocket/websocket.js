module.exports = io => {
  console.log("Websocket Ready");
  io.on("connection", function(socket) {
    console.log("a user connected");
    socket.on("message", obj => {
      io.emit(obj.to, obj);
    });
    socket.on("disconnect", function() {
      console.log("user disconected");
    });
  });
};
