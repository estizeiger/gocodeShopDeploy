import express from "express";
const app = express();
app.use(express.json());

console.log("hi there!!");

const arrayOfObj = [
  {
    id: 1,
    title: "necklace",
    price: "100",
    description: "16k Gold Necklace",
    isForFemales: true,
  },
  {
    id: 2,
    title: "ring",
    price: "500",
    description: "24k Gold Necklace",
    isForFemales: true,
  },
  {
    id: 3,
    title: "ring",
    price: "120",
    description: "goldfield",
    isForFemales: true,
  },
  {
    id: 4,
    title: "earings",
    price: "270",
    description: "rosegold",
    isForFemales: true,
  },
  {
    id: 5,
    title: "necklace",
    price: "500",
    description: "24k Gold Necklace",
    isForFemales: true,
  },
];

console.log(arrayOfObj);

// REST API
// CRUD
// create - post - more secured so login \ register will also go with post
// read - get
// update - put \ patch
// delete - delete

app.get("/api/greeting", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/product/:productId/", (req, res) => {
  const id = parseInt(req.params.productId);
  console.log("id", id);
  const wantedProduct = arrayOfObj.find((obj) => obj.id === id);
  console.log(wantedProduct);
  res.send(wantedProduct);
});

// app.get("/api/calculator", (req, res) => {
//   const { a, b } = req.query;
//   const sum = parseInt(a) + parseInt(b);
//   if (req.query.requestor.toLowerCase() === "tictac") {
//     console.log("hello there");
//   }
//   res.send(`the answer is ${sum}`);
// });

app.post("/api/addProduct", (req, res) => {
  const newProduct = { ...req.body };
  arrayOfObj.push(newProduct);
  res.send(newProduct);
});

app.put("/api/editProduct/:productId", (req, res) => {
  const id = parseInt(req.params.productId);
  const obj = arrayOfObj.find((obj) => obj.id === id);

  const newProductProperties = { ...req.body };
  const newProductAfterMerge = { ...obj, ...newProductProperties };
  res.send(newProductAfterMerge);
});

app.delete("/api/deleteProduct/:productId", (req, res) => {
  const id = parseInt(req.params.productId);
  const productIndex = arrayOfObj.findIndex((p) => p.id === parseInt(id));
  const clone = [...arrayOfObj];
  if (productIndex === -1) {
    res.send({
      error:
        "you have sent a wrong id of a product, there is no such product with this id",
      clone,
    });
  }
  clone.splice(productIndex, 1);
  res.send(clone);
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
