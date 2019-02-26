const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
   from:{type:Schema.Types.ObjectId,ref:"User",required:true},
   text:{type:String,required:true}
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
