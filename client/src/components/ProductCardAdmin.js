import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const ProductCardAdmin = ({ id, title, img_src, price, rating }) => {
  const arr = new Array(Math.floor(parseInt(rating["rate"]))).fill("*");
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
        <br />
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            onClick={() => {
              navigate(`updateProduct/${id}`);
            }}
          >
            update
          </Button>
          <Button>delete</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
