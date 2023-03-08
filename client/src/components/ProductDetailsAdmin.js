import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../MyContext";
import "./ProductDetails.css";

const ProductDetailsAdmin = () => {
  const { getSingleProduct } = useContext(MyContext);

  const [chosenProduct, setChosenProduct] = useState({});
  const { id } = useParams();

  const fetchSingleProduct = async () => {
    const data = await getSingleProduct(id);
    setChosenProduct(data);
  };

  useEffect(() => {
    console.log(id);
    fetchSingleProduct();
  }, []);

  return (
    <div>
      <h1>Admin- Product details</h1>
      <div className="product-details">
        <div className="product-details-image">
          <img alt="no img found" src={chosenProduct.img} />
        </div>
        <div className="product-details-info">
          <h4>{chosenProduct.title}</h4>
          <h5>{chosenProduct.price}$</h5>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsAdmin;
