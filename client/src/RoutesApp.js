import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  postProduct,
  putProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} from "./apiRequests";
import App from "./App";
import AdminDialog from "./components/AdminDialog";
import CartDetails from "./components/CartDetails";
import NotFoundPage from "./components/NotFoundPage";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsAdmin from "./components/ProductDetailsAdmin";
import ProductsAdmin from "./components/ProductsAdmin";
import MyContext from "./MyContext";

const RoutesApp = () => {
  const [productsList, setProductsList] = useState([]);
  const [currProductList, setCurrProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");
  const [valueRange, setValueRange] = useState([1, 1000]);
  const [cartProducts, setCartProducts] = useState([]);

  const fetchDataOld = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    const { title, category, price, image } = json[8];
    console.log("json[0]", JSON.stringify({ title, category, price, image }));
    postProduct({
      title: title,
      category: category,
      price: price,
      img: image,
    }).then((response) => {
      console.log(response); // JSON data parsed by `data.json()` call
    });
    setProductsList(json);
    setCurrProductList(json);
    setCategories(
      json
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
  };

  const fetchDataNew = async () => {
    const json = await getAllProducts();
    setProductsList(json);
    setCurrProductList(json);
    setCategories(
      json
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
    console.log("done getting all");
  };

  useEffect(() => {
    // fetchDataOld();
    fetchDataNew();
  }, []);

  useEffect(() => {
    console.log("productsList ", productsList);
  }, [productsList]);

  useEffect(() => {
    console.log("currProductList ", currProductList);
  }, [currProductList]);

  useEffect(() => {
    console.log("cartProducts ", cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    console.log("category ", category);
    console.log("valueRange ", valueRange);
    const copyProductsList = productsList;
    if (category === "All") {
      setCurrProductList(
        copyProductsList.filter(
          (item) => item.price >= valueRange[0] && item.price <= valueRange[1]
        )
      );
    } else {
      setCurrProductList(
        copyProductsList.filter(
          (item) =>
            item.category === category &&
            item.price >= valueRange[0] &&
            item.price <= valueRange[1]
        )
      );
    }
  }, [category, valueRange]);

  const handleAddToCart = (id) => {
    const ind = cartProducts.findIndex((item) => item.id === id);
    const copy = cartProducts;

    if (ind !== -1) {
      copy[ind].amount += 1;
      setCartProducts([copy[ind], ...copy.filter((item) => item.id !== id)]);
    } else {
      const newItem = productsList.find((item) => item._id === id);
      setCartProducts(
        copy.concat({
          id: id,
          title: newItem.title,
          image: newItem.img,
          price: newItem.price,
          amount: 1,
        })
      );
    }
  };

  const handleRemoveFromCart = (id) => {
    const ind = cartProducts.findIndex((item) => item.id === id);

    if (ind !== -1) {
      const copy = cartProducts;
      if (copy[ind].amount === 1) {
        setCartProducts(copy.filter((item) => item.id !== id));
      } else {
        copy[ind].amount -= 1;
        setCartProducts([copy[ind], ...copy.filter((item) => item.id !== id)]);
      }
    }
  };

  return (
    <MyContext.Provider
      value={{
        currProductList,
        setCurrProductList,
        categories,
        category,
        setCategory,
        valueRange,
        setValueRange,
        handleAddToCart,
        handleRemoveFromCart,
        cartProducts,
        // getAllProducts,
        getSingleProduct,
        fetchDataNew,
        postProduct,
        putProduct,
        deleteProduct,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="admin/login" element={<AdminDialog />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cartDetails" element={<CartDetails />} />
          <Route path="admin/products" element={<ProductsAdmin />} />
          <Route
            path="admin/products/single/:id"
            element={<ProductDetailsAdmin />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default RoutesApp;
