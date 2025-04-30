const express = require("express");
const app = express();
const User = require("./db/users");
const Product = require("./db/products");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

require("./db/config");

// register api
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

// login api
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send({ status: "ok", data: user });
    } else {
      resp.send({ status: "error", message: "No User Found" });
    }
  } else {
    resp.send({ status: "error", message: "Email and Password are required" });
  }
});

// add product api
app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

// fetch the products api
app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No Products Found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
