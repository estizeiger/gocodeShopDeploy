import {
  addProductService,
  deleteProductService,
  getAllProductsService,
  getOneProductService,
  updateProductService,
} from "../services/Product.js";

export const addProductController = async (req, res) => {
  try {
    const product = { ...req.body };
    const createdProduct = addProductService(product);
    await createdProduct.save();
    res.send(createdProduct);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

export const getAllProductsController = async (req, res) => {
  console.log("get all request");
  // console.log("req body: ", req.body);
  // console.log("req body: ", req.raw);
  try {
    const products = await getAllProductsService();
    res.send(products);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

export const getOneProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await getOneProductService(productId);
    if (!product) {
      res.status(404).send({ message: "no such product with the specific id" });
    } else {
      res.send(product);
    }
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const newProduct = { ...req.body };
    const updatedProduct = await updateProductService(productId, newProduct);

    if (!updatedProduct) {
      res.status(404).send({ message: "no such Product with the specific id" });
    } else {
      await updatedProduct.save();
      res.send(updatedProduct);
    }
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedTodo = await deleteProductService(productId);
    if (!deletedTodo) {
      res.status(404).send({ message: "no such product with the specific id" });
    } else {
      res.send(deletedTodo);
    }
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};
