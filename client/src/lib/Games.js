import axios from "axios";

const instance = axios.create({
  baseURL:  process.env.NODE_ENV === "production" ? "/games":"http://localhost:3000/games",
  timeout: 2000,
  withCredentials: true
});

export class Games {
  static getall() {
    return instance.get("/getall").then(e => e);
  }

  static getpage(filter, page, steam) {
    if (!steam) {
      return instance.post("/getpage", { filter: filter, page }).then(e => e);
    }
    return instance
      .post("/getmygames", { filter: filter, page, steam })
      .then(e => e);
  }

  static getbyID(id) {
    return instance.post("/getbyId", { id }).then(e => e);
  }
}
