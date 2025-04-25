const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect("mongodb://localhost:27017/e-commerce");
  const productSchema = new mongoose.Schema({});
  const product = mongoose.model("shop", productSchema);
  const data = await product.find();
  console.log(data);
};
connectDB();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
