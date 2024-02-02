const { mongoose, Schema } = require("mongoose");

const tourSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const MyData = mongoose.model("users", tourSchema);
module.exports = MyData;
