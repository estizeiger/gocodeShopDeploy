// import express from "express";
// import mongoose from "mongoose";
// import detenv from "dotenv";
// detenv.config();
// const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// const app = express();
// app.use(express.json());
// app.use(express.static("client/build"));

// console.log("hi there!!");
// mongoose.set("strictQuery", true);

// // //get all
// // app.get("/api/products", async (req, res) => {
// //   try {
// //     const products = await Product.find({});
// //     res.send(products);
// //   } catch (e) {
// //     console.log(e);
// //     res.status(500).send(e.message);
// //   }
// // });

// // //get one
// // app.get("/api/products/:id", async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const singleRroduct = await Product.findOne({ _id: id });
// //     if (!singleRroduct) {
// //       res.status(404).send({ message: "no such product with the specific id" });
// //     }
// //     res.send(singleRroduct);
// //   } catch (e) {
// //     console.log(e);
// //     res.send(e.message);
// //   }
// // });

// // //create
// // app.post("/api/products", async (req, res) => {
// //   try {
// //     const prod = { ...req.body };
// //     const createdProd = new Product({
// //       title: prod.title,
// //       category: prod.category,
// //       price: prod.price,
// //       img: prod.img,
// //     });
// //     await createdProd.save();
// //     res.send(createdProd);
// //   } catch (e) {
// //     console.log(e);
// //     res.status(500).send(e.message);
// //   }
// // });

// // //update
// // app.put("/api/updateProduct/:productId", async (req, res) => {
// //   try {
// //     const newProduct = req.body;
// //     const { productId } = req.params;

// //     const product = await Product.findOneAndUpdate(
// //       { _id: productId },
// //       {
// //         price: newProduct.price,
// //         title: newProduct.title,
// //         img: newProduct.img,
// //         category: newProduct.category,
// //       },
// //       { new: true }
// //     );

// //     if (!product) {
// //       res.status(404).send({ message: "no such Product with the specific id" });
// //     }

// //     await product.save();
// //     res.send(product);
// //   } catch (e) {
// //     console.log(e);
// //     res.send(e.message);
// //   }
// // });

// // //delete
// // app.delete("/api/deleteProduct/:productId", async (req, res) => {
// //   try {
// //     const { productId } = req.params;
// //     const product = await Product.findOneAndDelete({ _id: productId });
// //     if (!product) {
// //       res.status(404).send({ message: "no such product with the specific id" });
// //     }
// //     res.send(product);
// //   } catch (e) {
// //     console.log(e);
// //     res.send(e.message);
// //   }
// // });

// //here we define db "shop", to connect mongoose to.
// //the model "Products" we created the scheme for-> will be saved in db "shop".
// // mongoose.connect("mongodb://localhost:27017/shop", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // app.listen(PORT, () => {
// //   console.log("Example app listening on port " + PORT + "!");
// // });

// // app.get("*", (req, res) => {
// //   res.sendFile(__dirname + "/client/build/index.html");
// // });

// mongoose.connect(
//   `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     app.listen(PORT || 8000, () => {
//       console.log("err", err);
//       console.log("Example app listening on port " + PORT + "!");
//     });
//   }
// );

//------------------------------------------------------
//new index.js:

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  addProductController,
  deleteProductController,
  getAllProductsController,
  getOneProductController,
  updateProductController,
} from "./controllers/Product";

dotenv.config();
const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const app = express();

mongoose.set("strictQuery", true);
app.use(express.json());
app.use(express.static("client/build"));
console.log("hi there!!");

//routes to controllers
app.post("/api/addProduct", addProductController);
app.get("/api/products", getAllProductsController);
app.get("/api/product/:productId", getOneProductController);
app.put("/api/updateProduct/:productId", updateProductController);
app.delete("/api/deleteProduct/:productId", deleteProductController);

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/client/build/index.html");
// });

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
