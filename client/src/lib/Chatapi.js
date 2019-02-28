import axios from "axios";
import { wsConn } from "./redux/store";
import { addClientMessage } from "./redux/actions";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "":"http://localhost:3000/chat",
  timeout: 2000,
  withCredentials: true
});

export class Chatapi {
  static getchat(id) {
    wsConn.connect(id);
    return instance.post("/getchat", { id }).then(e => e);
  }
  static sendMessage(text, to, from) {
    addClientMessage();
    wsConn.socket.emit("message", { text, to, from });
    return instance.post("/newmessage", { text,to }).then(e => e);
  }
  static exitchat(id){
    wsConn.disconnect(id)
  }
}
