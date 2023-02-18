import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductCard.css";

const ProductDetails = () => {
  const [chosenProduct, setChosenProduct] = useState({});
  const { id } = useParams();

  const fetchSingleProduct = async () => {
    const response = await fetch(`http://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    setChosenProduct(data);
  };

  useEffect(() => {
    console.log(id);
    fetchSingleProduct();
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      <div className="product-image">
        <img alt="no img found" src={chosenProduct.image} />
      </div>
      <div className="product-info">
        <h5>{chosenProduct.title}</h5>
        <h6>{chosenProduct.price}$</h6>
      </div>
    </div>
  );
};

export default ProductDetails;
