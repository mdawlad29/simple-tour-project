const express = require("express");

// const publicRoutes = require("./routes/v1/publicRoutes");
const tourRoutes = require("./routes/v1/tourRoutes");
const userRoutes = require("./routes/v1/userRoutes");
const publicRoutes = require("./routes/v1/publicRoutes");

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log("Middleware");
  next();
});

/*<------------ Public Routes ------------->*/
app.use("/api/v1", publicRoutes);
/*<------------ Tour Routes ------------->*/
app.use("/api/v1/tours", tourRoutes);
/*<------------ User Routes ------------->*/
app.use("/api/v1/users", userRoutes);

module.exports = app;
