import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3000/events",
    timeout:2000,
    withCredentials: true
  });

export class Events{
    static newEvent (event){
       return instance.post("/new",event).then(e=>e)
    }
}