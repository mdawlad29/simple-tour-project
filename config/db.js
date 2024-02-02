const mongoose = require("mongoose");

const MongoDBConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);

    mongoose.connection.on("error", (error) => {
      console.log(`Mongodb connection is failed!, ${error}`);
    });
  } catch (error) {
    console.log(`Could not connect database, ${error}`);
  }
};

module.exports = MongoDBConnect;
