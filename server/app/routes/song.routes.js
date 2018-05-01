module.exports = app => {
  const songs = require("../controllers/song.controller.js");
  app.post("/songs", playlists.create);
  app.get("/songs", playlists.findAll);
  app.get("/songs/:songId", playlists.findOne);
  app.put("/songs/:songId", playlists.update);
  app.delete("/songs/:songId", playlists.delete);
};
