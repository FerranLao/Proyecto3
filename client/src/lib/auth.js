import axios from "axios";

const instance = axios.create({
  baseURL:  process.env.NODE_ENV === "production" ? "/auth":"http://localhost:3000/auth",
  withCredentials: true
});
export class AuthAPI {
  static errorHandler(e) {
    console.error("AUTH API ERROR");
    console.error(e);
    throw e;
  }

  static signup(user) {
    return instance
      .post("/signup", user)
      .then(res => res)
      .catch(AuthAPI.errorHandler);
  }

  static login(username, password) {
    console.log(username)
    return instance
      .post("/login", { username, password })
      .then(res => res)
      .catch(AuthAPI.errorHandler);
  }

  static upload(file) {
    return instance
      .post("/image", file, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => res)
      .catch(AuthAPI.errorHandler);
  }

  static logout() {
    return instance.get("/logout").then(e => e);
  }

  static currentUser() {
    return instance
      .get("/currentuser")
      .then(res => res.data.user)
      .catch(AuthAPI.errorHandler);
  }

  static AddSteamId(id){
    return instance.post("/SteamId",{id}).then(e=>e)
  }
}
