const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.error("MongoDB Connection Failed:", error));

// mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
//   .then(() => console.log("MongoDB Connected Successfully"))
//   .catch((error) => console.error("MongoDB Connection Failed:", error));
