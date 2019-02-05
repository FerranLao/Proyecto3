const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventsSchema = new Schema(
  {
    name:{type:String,required:true},
    creator:{ type: Schema.Types.ObjectId , ref: "User",required:true},
    party:[{ type: Schema.Types.ObjectId, ref: "User",default:[this.creator] }],
    game:{type:Schema.Types.ObjectId,ref:"SteamGames", required:true},
    chat:{type:Schema.Types.ObjectId, ref:"Chat"},
    Schedule:{ type: Date, default: Date.now },
    private:{type:Boolean,default:false}
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Events = mongoose.model("Events", EventsSchema);
module.exports = Events;
