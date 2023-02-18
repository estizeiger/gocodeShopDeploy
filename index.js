import express from "express";
import mongoose from "mongoose";
import detenv from "dotenv";
detenv.config();
const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const app = express();
app.use(express.json());
app.use(express.static("client/build"));

console.log("hi there!!");
mongoose.set("strictQuery", true);

const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", productSchema);

// REST API
// CRUD
// create - post - more secured so login \ register will also go with post
// read - get
// update - put \ patch
// delete - delete

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

app.post("/api/addProduct", async (req, res) => {
  try {
    const prod = { ...req.body };
    const createdProd = new Product({
      title: prod.title,
      category: prod.category,
      price: prod.price,
      img: prod.img,
    });
    await createdProd.save();
    res.send(createdProd);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

//here we define db "shop", to connect mongoose to.
//the model "Products" we created the scheme for-> will be saved in db "shop".
// mongoose.connect("mongodb://localhost:27017/shop", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.listen(PORT, () => {
//   console.log("Example app listening on port " + PORT + "!");
// });

app.get("*", (req, res) => {
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
