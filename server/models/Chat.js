const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema(
  {
    messages:[{type:Schema.Types.ObjectId,ref:"Message"}]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Chat = mongoose.model("Chat", ChatSchema);
module.exports = Chat;
