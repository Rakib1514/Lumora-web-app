const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      message: "Category name is required",
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const Category = mongoose.model("Category", categorySchema);

Category.init();

module.exports = Category;
