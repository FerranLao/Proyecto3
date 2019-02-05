const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SteamUserSchema = new Schema(
  {
    OwnedGames: { type: [Schema.Types.ObjectId], ref: "SteamGames" },
    profile: Object
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const SteamUser = mongoose.model("SteamUser", SteamUserSchema);
module.exports = SteamUser;
