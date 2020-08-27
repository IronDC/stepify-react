const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

const session = require("./gameSession.router");
router.use("/session", session);

module.exports = router;
