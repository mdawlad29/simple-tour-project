const express = require("express");
const router = express.Router();

router.get("/api/v1/users", (req, res) => {
  res.end("user Routes");
});

module.exports = router;
