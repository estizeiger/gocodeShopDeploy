import { Product } from "../models/Product";

export const addProductService = (product) => {
  return (createdProduct = new Product({ product }));
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
