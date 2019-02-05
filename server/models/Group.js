const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupsSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId , ref: "User",required:true},
    party:[{ type: Schema.Types.ObjectId, ref: "User",default:[this.creator] }],
    chat:{type:Schema.Types.ObjectId, ref:"Chat"}
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Groups = mongoose.model("Groups", GroupsSchema);
module.exports = Groups;
