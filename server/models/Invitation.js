const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvitationSchema = new Schema(
  {
    from:{type: Schema.Types.ObjectId, ref: "User"},
    to:{type: Schema.Types.ObjectId, ref: "User"},
    for:String,
    resolved:{type:Boolean,default:false},
    type:String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Invitation = mongoose.model("Invitation", InvitationSchema);
module.exports = Invitation;
