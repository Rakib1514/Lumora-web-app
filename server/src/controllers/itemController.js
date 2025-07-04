const Item = require("../models/itemModel");

// GET /items?page=1&limit=20&category=60f7b2d5c45e4a3f6c8a4b2e
const getItems = async (req, res) => {
  // parse and sanitize pagination parameters
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const limit = Math.max(1, parseInt(req.query.limit, 10) || 20);

  // build a dynamic filter object
  const filter = {};
  if (req.query.category) {
    filter.category = req.query.category;
  }

  try {
    const items = await Item.find(filter)
      .select("title price image stock material brand artist discount rating")
      .populate("category", "-_id -__v")
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return res.status(200).json({
      success: true,
      message: "Item fetched",
      collections: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);

    if (error.name === "CastError" || error.name === "SyntaxError") {
      return res.status(400).json({ message: "Bad request" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

const addItem = async (req, res) => {
  const newItem = req.body;

  try {
    const result = await Item.create(newItem);

    res.status(200).json({
      success: true,
      message: "New Item added to db",
      newItem: result,
    });
  } catch (error) {
    console.log("ERROR posting new item", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const getSingleItem = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Item.findById(id).select(
      "title price image stock material brand artist discount rating description"
    ).populate("category", "-_id -__v")

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item fetched successfully",
      product: result,
    });
  } catch (error) {
    console.error("Error fetching single item:", error);

    if (error.name === "CastError") {
      // This occurs if the ID format is invalid (not a valid ObjectId)
      return res.status(400).json({
        success: false,
        message: "Invalid item ID format",
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  getItems,
  addItem,
  getSingleItem,
};
