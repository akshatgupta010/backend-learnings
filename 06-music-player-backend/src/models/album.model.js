const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  musics: [
    {
      title: mongoose.Schema.Types.ObjectId,
      ref: "music",
    },
  ],
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "true",
    required: true,
  },
});

const albumModel = mongooose.model("album", albumSchema);

module.exports = albumModel;