import { useContext } from "react";
import MyContext from "../MyContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, img_src, price, rating }) => {
  const arr = new Array(Math.floor(parseInt(rating["rate"]))).fill("*");
  const { handleRemoveFromCart, handleAddToCart } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="product-card">
      {/*<h4>{key}</h4> impossible, cannot access "key", its not a prop.  */}
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
        <h5>{title}</h5>
        <h6>{price}$</h6>
        <div>
          {" "}
          {arr.map((item, i) => {
            return (
              <h4 className="fas fa-star" key={i}>
                {" "}
              </h4>
            );
          })}
        </div>

        <AddRoundedIcon onClick={() => handleAddToCart(id)} />
        <RemoveRoundedIcon onClick={() => handleRemoveFromCart(id)} />
      </div>
    </div>
  );
};

export default ProductCard;
