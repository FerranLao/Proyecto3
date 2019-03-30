import axios from "axios";

const instance = axios.create({
  baseURL:  process.env.NODE_ENV === "production" ? "/social": "http://localhost:3000/social",
  timeout: 2000,
  withCredentials: true
});

export class SocialApi {
  static addfriend(id) {
    return instance.post("/addfriend", { id }).then(e => {
      console.log(e);
      return e;
    });
  }

  static getfriends() {
    return instance.get("/getfriends").then(e => e);
  }

  static getinvites() {
    return instance.get("/getinvites").then(e => e);
  }

  static getmyinvites() {
    return instance.get("/getmyinvites").then(e => e);
  }

  static acceptinvite(id) {
    return instance.post("/accept", { id }).then(e => e);
  }

  static rejectinvite(id) {
    return instance.post("/reject", { id }).then(e => e);
  }

  static getSteamUser(id){
    return instance.post("/getSteamUser",{id}).then(e=>e)
  }
  
  static inviteParty(to,event){
    return instance.post("/inviteParty",{event,to}).then(e=>e)
  }
}
