import axios from "axios";
import { wsConn } from "./redux/store";
import {addClientMessage} from "./redux/actions"
const instance = axios.create({
  baseURL: "http://localhost:3000/chat",
  timeout: 2000,
  withCredentials: true
});

export class Chatapi {
  static getchat(id) {
    return instance.post("/getchat", { id }).then(e => e);
  }
  static sendMessage(id, message) {
    addClientMessage()
    wsConn.socket.emit("message","holi");
    //return instance.post("/sendMessage", { message }).then(e => e);
  }
  
}
