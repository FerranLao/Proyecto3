import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3000/chat",
    timeout:2000,
    withCredentials: true
  });

export class Chatapi{
    static getchat(id){
        console.log(id)
        return instance.post("/getchat",{id}).then(e=>e)
    }
    static sendMessage(id,message){
        return instance.post("/sendMessage",{id,message}).then(e=>e)
    }
}