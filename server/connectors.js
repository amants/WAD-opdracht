const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { dburl } = require("./config/");

mongoose.Promise = global.Promise;

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Succesfully connected to db");
  })
  .catch(err => {
    console.log("Kan niet connecten");
    process.exit();
  });

const PlaylistSchema = mongoose.Schema(
  {
    title: String,
    user: String
  },
  {
    timestamps: true
  }
);

const SongSchema = mongoose.Schema(
  {
    title: String,
    artist: String,
    playlist: String,
    user: String
  },
  {
    timestamps: true
  }
);

const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, index: { unique: true } },
  passwordHash: { type: String, required: true }
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual("password").set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, 12);
});

const Playlist = mongoose.model("playlist", PlaylistSchema);
const Song = mongoose.model("song", SongSchema);
const User = mongoose.model("user", UserSchema);

module.exports = { Playlist, Song, User };
