import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/social",
  timeout: 2000,
  withCredentials: true
});

export class SocialApi {


  static addfriend(id) {
    console.log("eeeii")
    return instance.post("/addfriend", { id }).then(e => {console.log(e)
    return e});
  }

  static getfriends() {
    return instance.get("/getfriends").then(e => e);
  }

  static getinvites(){
    return instance.get("/getinvites").then(e=>e)
  }
  static getmyinvites(){
    return instance.get("/getmyinvites").then(e=>e)
  }

  static accept(id){
    return instance.post("/accept",{id}).then(e=>e)
  }

  static reject(id){
    return instance.post("/reject",{id}).then(e=>e)
  }
}
