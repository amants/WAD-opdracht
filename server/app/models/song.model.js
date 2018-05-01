const mongoose = require("mongoose");

const SongSchema = mongoose.Schema(
  {
    title: String,
    artist: String,
    playlistid: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Song", SongSchema);
