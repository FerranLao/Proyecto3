import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/games",
  timeout:2000,
  withCredentials: true
});

export class Games{
    static getall(){
       return instance.get("/getall").then(e=>e)
    }

    static getpage(filter,page){
      return instance.post("/getpage",{filter:filter,page}).then(e=>e)
    }
    
    static getbyID(id){
      return instance.post("/getbyId",{id}).then(e=>e)
    }


}