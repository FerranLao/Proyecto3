const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = new Schema(
  {
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    chat: { type: Schema.Types.ObjectId, ref: "Chat" },
    accepted:{type:Boolean,default:false}
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Friends = mongoose.model("Friend", friendSchema);
module.exports = Friends;
