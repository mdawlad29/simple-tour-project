const express = require("express");
const router = express.Router();
const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../../dev-data/data/tours-simple.json`)
);

router.get("/tours", (req, res) => {
  res.status(200).json({
    message: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

module.exports = router;
