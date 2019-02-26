import io from "socket.io-client";
import { addServerMessage } from "./redux/actions";

export class WebsocketConnection {
    constructor(store){
        this.store = store;
        this.socket = io("http://localhost:3000");
    }

    connect(id){
        console.log(id)
        this.socket.on(id,({text,from}) => {
            console.log("connected to "+id)
            this.store.dispatch(addServerMessage(text,from))
        })
    }
    disconnect(id){
        this.socket.removeListener(id)
        console.log("disconected")
    }
}