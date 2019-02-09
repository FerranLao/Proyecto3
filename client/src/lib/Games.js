import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export class Games{
    static getall(){
       return instance.get("/games/getall").then(e=>e)
    }

    static getpage(filter,page){
      return instance.post("games/getpage",{filter:filter,page}).then(e=>e)
    }
}