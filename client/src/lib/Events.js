import axios from "axios"

const instance = axios.create({
    baseURL:  process.env.NODE_ENV === "production" ? "/events":"http://localhost:3000/events",
    timeout:2000,
    withCredentials: true
  });

export class Events{
    static newEvent (event){
       return instance.post("/new",event).then(e=>e)
    }

    static leave(id){
        return instance.post("/leave",{id}).then(e=>e)
    }

    static getEvent(id){
        return instance.post("/getevent",{id}).then(e=>e)
    }

    static getpage(filter,page){
        return instance.post("/getpage",{filter,page}).then(e=>e)
    }

    static getOwnPage(filter,page){
        return instance.post("/getOwnPage",{filter:filter,page}).then(e=>e)
      }
    static join(id){
        return instance.post("/joinparty",{id}).then(e=>e)
    }

}