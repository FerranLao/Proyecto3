const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    SteamUser: { type: Schema.Types.ObjectId , ref: "SteamUser"},
    image: String,
    friends: [{ type: Schema.Types.ObjectId, ref: "Events" }],
    events: [{ type: Schema.Types.ObjectId, ref: "Events" }],
    groups: [{ type: Schema.Types.ObjectId, ref: "Groups" }],
    rating: Array
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
