import io from "socket.io-client";
import { addServerMessage } from "./redux/actions";

export class WebsocketConnection {
  constructor(store) {
    this.store = store;
    this.socket = "";
  }

  connect(id) {
    this.socket = io( process.env.NODE_ENV === "production" ? "":"http://localhost:3000");
    this.socket.on(id, ({ text, from }) => {
      console.log("connected to " + id);
      this.store.dispatch(addServerMessage(text, from));
    });
  }
  disconnect(id) {
    this.socket.removeListener(id);
    this.socket = "";
  }
}
