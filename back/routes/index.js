const express = require("express");
const router = express.Router();

const {
  spotifyApi,
  spotiGetArtistRelatedArtists,
  spotiGetArtist,
} = require("./../lib/spotifyApi");

/* GET home page. */

router.get(
  "/",
  (req, res, next) => {
    // Refrescamos el access token de Spotify en cuanto un usuario llega a la Home
    spotifyApi
      .clientCredentialsGrant()
      .then(function (data) {
        console.log(
          "The access token expires in " +
            data.body["expires_in"] +
            " and is " +
            data.body["access_token"]
        );
        spotifyApi.setAccessToken(data.body["access_token"]);
        res.render("index", { user: req.user });
      })
      .catch(console.error);
  },
  function (err) {
    console.log("Something went wrong when retrieving an access token", err);
  }
);

const session = require("./gameSession.router");
router.use("/session", session);

const artist = require("./artist.router");
router.use("/artist", artist);

module.exports = router;
