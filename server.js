const dotenv = require("dotenv");
const publicRoutes = require("./routes/v1/publicRoutes");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Natours app listening on port ${port}`);
});
