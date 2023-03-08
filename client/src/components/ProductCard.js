import { useContext } from "react";
import MyContext from "../MyContext";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, title, img_src, price, rating }) => {
  // const arr = new Array(Math.floor(parseInt(rating["rate"]))).fill("*");
  const { handleRemoveFromCart, handleAddToCart } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          onClick={() => {
            navigate(`products/${id}`);
          }}
          alt="no img found"
          src={img_src}
        />
      </div>
      <div className="product-info">
        <h4>{title}</h4>
        <h5>{price}$</h5>
        <div>
          {" "}
          {/* {arr.map((item, i) => {
            return (
              <h4 className="fas fa-star" key={i}>
                {" "}
              </h4>
            );
          })} */}
        </div>
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

export default ProductCard;
