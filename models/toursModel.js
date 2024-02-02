const { mongoose, Schema } = require("mongoose");

const tourSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    ratting: {
      type: String,
      default: 4.5,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("tours", tourSchema);
module.exports = Tour;
