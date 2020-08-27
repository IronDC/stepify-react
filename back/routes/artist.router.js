const express = require("express");
//const GameSession = require("../models/gameSession");
const Artist = require("../models/artist");
const router = express.Router();
//const spotifyApi = require("../lib/spotifyApi");

router.get("/", async (req, res, next) => {
  try {
    const artist = await Artist.find();
    const cloneArtist = [...artist];
    const selectRandom = (array) =>
      array[Math.floor(Math.random() * array.length)];

    let initialArtist = selectRandom(cloneArtist);

    let index = cloneArtist.indexOf(initialArtist);

    if (index > -1) {
      cloneArtist.splice(index, 1);
    }
    const finalArtist = selectRandom(cloneArtist);

    return res.json({
      initialArtist,
      finalArtist,
    });
  } catch (err) {
    res.send(`Error listing artist": ${err}`);
    next();
  }
});

module.exports = router;
