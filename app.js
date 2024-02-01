const express = require("express");
const app = express();
const publicRoutes = require("./routes/v1/publicRoutes");

app.use(publicRoutes);

module.exports = app;
