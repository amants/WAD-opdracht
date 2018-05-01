const Song = require("../models/song.model.js");

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Song title can not be empty"
    });
  }

  if (!req.body.artist) {
    return res.status(400).send({
      message: "Song artist can not be empty"
    });
  }

  if (!req.body.playlistid) {
    return res.status(400).send({
      message: "Song playlistid can not be empty"
    });
  }

  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    playlistid: req.body.playlistid
  });

  song
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findAll = (req, res) => {
  Song.find()
    .then(songs => {
      res.send(songs);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findOne = (req, res) => {
  Songs.findById(req.params.songId)
    .then(song => {
      if (!song) {
        return res.status(404).send({
          message: "Song not found with id " + req.params.songId
        });
      }
      res.send(song);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Song not found with id " + req.params.songId
        });
      }
      return res.status(500).send({
        message: "Error retrieving song with id " + req.params.songId
      });
    });
};

exports.update = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Song title can not be empty"
    });
  }

  if (!req.body.artist) {
    return res.status(400).send({
      message: "Song artist can not be empty"
    });
  }

  if (!req.body.playlistid) {
    return res.status(400).send({
      message: "Song playlistid can not be empty"
    });
  }

  Song.findByIdAndUpdate(
    req.params.songId,
    {
      title: req.body.title,
      artist: req.body.artist,
      playlistid: req.body.playlistid
    },
    { new: true }
  )
    .then(song => {
      if (!song) {
        return res.status(404).send({
          message: "Song not found with id " + req.params.songId
        });
      }
      res.send(song);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Song not found with id " + req.params.songId
        });
      }
      return res.status(500).send({
        message: "Error updating song with id " + req.params.songId
      });
    });
};

exports.delete = (req, res) => {
  Song.findByIdAndRemove(req.params.songId)
    .then(song => {
      if (!song) {
        return res.status(404).send({
          message: "Song not found with id " + req.params.songId
        });
      }
      res.send({ message: "Song deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Song not found with id " + req.params.songId
        });
      }
      return res.status(500).send({
        message: "Could not delete song with id " + req.params.songId
      });
    });
};
