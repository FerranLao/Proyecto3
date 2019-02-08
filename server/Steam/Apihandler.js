const axios = require("axios");
require("dotenv").config();
module.exports= class Steam {
  static getUser(id) {
    return axios
      .get(
        ` http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${
          process.env.STEAM_KEY
        }&steamids=${id}`
      )
      .then(e => e);
  }
  

  static getOwned(id){
      return axios
      .get(
        `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${ process.env.STEAM_KEY}&steamid=${id}&format=json`
      ).then(e=>e)
  }
}
