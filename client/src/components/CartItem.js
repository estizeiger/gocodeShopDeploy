import { useContext } from "react";
import MyContext from "../MyContext";
import "./ProductCard.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const CartItem = ({ id, title, price, image, amount }) => {
  const { handleAddToCart, handleRemoveFromCart } = useContext(MyContext);
  return (
    <div className="product-card">
      <div className="product-image">
        <img alt="no img found" src={image} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        <h6>amount: {amount}</h6>

        <AddRoundedIcon onClick={() => handleAddToCart(id)} />
        <RemoveRoundedIcon onClick={() => handleRemoveFromCart(id)} />
      </div>
    </div>
  );
};

export default CartItem;
