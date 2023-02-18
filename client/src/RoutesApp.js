import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CartDetails from "./components/CartDetails";
import NotFoundPage from "./components/NotFoundPage";
import ProductDetails from "./components/ProductDetails";
import MyContext from "./MyContext";

const RoutesApp = () => {
  const [productsList, setProductsList] = useState([]);
  const [currProductList, setCurrProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");
  const [valueRange, setValueRange] = useState([1, 1000]);
  const [cartProducts, setCartProducts] = useState([]);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setProductsList(json);
    setCurrProductList(json);
    // setCartProducts(json);
    //we want it to happen only once and be nagish outside->
    //we can do it here, its called in useEffect in begining of component's life:
    setCategories(
      json
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
  }
  useEffect(() => {
    fetchData();
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
      const newItem = productsList.find((item) => item.id === id);
      setCartProducts(
        copy.concat({
          id: id,
          title: newItem.title,
          image: newItem.image,
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
        categories,
        category,
        setCategory,
        valueRange,
        setValueRange,
        handleAddToCart,
        handleRemoveFromCart,
        cartProducts,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cartDetails" element={<CartDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default RoutesApp;
