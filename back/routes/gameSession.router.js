const express = require("express");
const GameSession = require("../models/gameSession");
const router = express.Router();

router.post("/",async (req, res, next) => {
  try {
    console.log(req.body)
    const { username } = req.body;
    console.log(username);
    const newSession = await GameSession.create({
      username
      // spotifyId,
      // spotifyToken,
      // score,
      // initArtist,
      // endArtist,
      // artistArray,
    });

    console.log(`${req.body.username} creado`);
    return res.json({ status: "New Session Created", newSession });
  } catch (error) {
    return res.status(500).json({ status: "Error Creating Session" });
  }
}
);

router.get("/", async (req, res, next) => {
  try {
    const session = await GameSession.find();
    return res.json(session);
  } catch (error) {
    return res.status(500).json({ status: "Session not found" });
  }
});





module.exports = router;