
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const steamgamesSchema = new Schema({
  steam_appid: Number,
  short_description:String,
  genres:Array,
  header_image:String,
  name:String,
  publishers:Array,
  developers:Array,
  categories:Array,
  type:String,
  supported_languages:String,
  website:String,
  is_free:Boolean,
  about_the_game:String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const SteamGames = mongoose.model('SteamGames', steamgamesSchema);
module.exports = SteamGames;
