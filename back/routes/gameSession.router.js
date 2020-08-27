const express = require("express");
const GameSession = require("../models/gameSession");
const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    console.log(req.body);
    const { username } = req.body;
    const existinUser = await GameSession.findOne({ username });
    if (!existinUser) {
      const newSession = await GameSession.create(req.body);
      console.log(`${req.body.username} creado`);
      return res.json({ status: "New user and session created", newSession });
    } else {
      console.log(`${req.body.username} logueado`);
      return res.json({ status: "User exists, logged in", existinUser });
    }
  } catch (error) {
    return res.status(500).json({ status: "Error Creating Session" });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const session = await GameSession.find();
    return res.json(session);
  } catch (error) {
    return res.status(500).json({ status: "Session not found" });
  }
});

module.exports = router;
