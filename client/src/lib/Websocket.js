
import io from 'socket.io-client';
import { addServerMessage } from './redux/actions';


export class WebsocketConnection {
    constructor(store){
        this.store = store;
        this.socket = io("http://localhost:3001");
        this.socket.on('mensaje',({text}) => {
            this.store.dispatch(addServerMessage(text))
        })
    }

    sendMessage(text){
        console.log(`Sending message: ${text}`);
        this.socket.emit('new_message', {text})
    }
}