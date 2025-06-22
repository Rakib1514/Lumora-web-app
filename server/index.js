const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Lumora's API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
