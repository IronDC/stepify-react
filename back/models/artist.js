const mongoose = require("mongoose");
mongoose.Promise = global.Promise // <--
const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    idSpotify: String,
    name: String,
    image: String,   
  },
  {
    timestamps: true
  }
);

const Artist = mongoose.model("artist", artistSchema);
module.exports = Artist;