import {
  addProductService,
  deleteProductService,
  getAllProductsService,
  getOneProductService,
  updateProductService,
} from "../services/Product";

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
    }
    res.send(product);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const updatedProduct = await updateProductService(productId);

    if (!updatedProduct) {
      res.status(404).send({ message: "no such Product with the specific id" });
    }
    await updatedProduct.save();
    res.send(updatedProduct);
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
    }
    res.send(deletedTodo);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};
