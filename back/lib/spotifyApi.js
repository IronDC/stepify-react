require("dotenv").config();
const SpotifyWebApi = require("spotify-web-api-node");

const spotiClientId = process.env.SPOTICLIENTID;
const spotiSecret = process.env.SPOTICLIENTSECRET;

let credentials = {
  clientId: spotiClientId,
  clientSecret: spotiSecret,
};

const spotifyApi = new SpotifyWebApi(credentials);

// // Devuelve artistas relacionados

const spotiGetArtistRelatedArtists = (spotiID) => {
  return spotifyApi.getArtistRelatedArtists(spotiID);
};

// Devuelve datos de un artista

const spotiGetArtist = (artistID) => {
  return spotifyApi.getArtist(artistID);
};

module.exports = {
  spotifyApi,
  spotiGetArtistRelatedArtists,
  spotiGetArtist,
};
