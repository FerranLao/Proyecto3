import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/social",
  timeout: 2000,
  withCredentials: true
});

export class SocialApi {
  static addfriend(id) {
    return instance.post("/addfriend", { id }).then(e => e);
  }
  static getfriends() {
      console.log("hola")
    return instance.get("/getfriends").then(e => e);
  }
}
