import { Product } from "../models/Product.js";

export const addProductService = (product) => {
  const createdProduct = new Product({
    price: product.price,
    title: product.title,
    img: product.img,
    category: product.category,
  });
  return createdProduct;
};

export const updateProductService = (id, newProduct) => {
  return Product.findOneAndUpdate(
    { _id: id },
    {
      price: newProduct.price,
      title: newProduct.title,
      img: newProduct.img,
      category: newProduct.category,
    },
    { new: true }
  );
};

export const getAllProductsService = () => {
  return Product.find({});
};

export const getOneProductService = (id) => {
  return Product.findOne({ _id: id });
};

export const deleteProductService = (id) => {
  return Product.findOneAndDelete({ _id: id });
};
