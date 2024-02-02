const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const MongoDBConnect = require("./config/db");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;

app.listen(port, async () => {
  await MongoDBConnect();
  console.log(`Natours app listening on port ${port}`);
});
