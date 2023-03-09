import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import {
  addProductController,
  deleteProductController,
  getAllProductsController,
  getOneProductController,
  updateProductController,
} from "./controllers/Product.js";

dotenv.config();
const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const app = express();

mongoose.set("strictQuery", true);
app.use(express.json());
app.use(express.static("client/build"));

app.use(cors());

console.log("hi there!!");

//routes to controllers
app.post("/api/addProduct", addProductController);
app.get("/api/products", getAllProductsController);
app.get("/api/products/:productId", getOneProductController);
app.put("/api/updateProduct/:productId", updateProductController);
app.delete("/api/deleteProduct/:productId", deleteProductController);

app.get("*", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  res.sendFile(__dirname + "/client/build/index.html");
});

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    app.listen(PORT || 8000, () => {
      console.log("err", err);
      console.log("Example app listening on port " + PORT + "!");
    });
  }
);
