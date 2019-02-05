const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
   user:{type:Schema.Types.ObjectId,ref:"User",required:true},
   message:[{type:String,required:true}]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
