const { default: mongoose } = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    message: "Title is required",
  },
  description: {
    type: String,
    required: true,
    message: "Description is required",
  },
  image: [{ type: String }],
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: [0, "Stock cannot be negative"],
  },
  material: {
    type: String,
    required: true,
    enum: {
      values: ["gold", "silver", "diamond", "platinum", "bronze"],
      message: "Material must be gold, silver, or diamond",
    },
  },
  brand: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
    message: "Category is required",
  },
  artist: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, "Rating cannot be negative"],
    max: [5, "Rating cannot exceed 5"],
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
