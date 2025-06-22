const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    const result = await Category.create({
      name,
      image,
    });

    res.status(201).json({
      success: true,
      message: `Category ${result.name} created successfully`,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};

module.exports = {
  createCategory,
};
