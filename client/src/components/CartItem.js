import { useContext } from "react";
import MyContext from "../MyContext";
import "./CartItem.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const CartItem = ({ id, title, price, image, amount }) => {
  const { handleAddToCart, handleRemoveFromCart } = useContext(MyContext);
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img alt="no img found" src={image} />
      </div>
      <div className="cart-item-info">
        <h4>{title}</h4>
        <h5>{price}$</h5>
        <h5>amount: {amount}</h5>
        <br />
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            <AddRoundedIcon onClick={() => handleAddToCart(id)} />
          </Button>
          <Button>
            <RemoveRoundedIcon onClick={() => handleRemoveFromCart(id)} />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default CartItem;
