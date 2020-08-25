const express = require("express");
const GameSession = require("../models/gameSession");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const session = await GameSession.find();
    return res.json(session);
  } catch (error) {
    return res.status(500).json({ status: "Session not found" });
  }
});

router.post("/create",async (req, res, next) => {
    try {
      const { username } = req.body;
      console.log("hola");
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



module.exports = router;