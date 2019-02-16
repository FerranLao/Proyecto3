import { wsConn } from "./store";
import { Chatapi } from "../Chatapi";


export const addClientMessage = text => {
  Chatapi.sendMessage(text)
  wsConn.sendMessage(text);
  return {
    type: "ADD_MESSAGE",
    message: {
      from: "me",
      text
    }
  };
};

export const addServerMessage = text => {
  return {
    type: "ADD_MESSAGE",
    message: {
      from: "server",
      text
    }
  };
};
