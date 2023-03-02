import { useContext } from "react";
import MyContext from "../MyContext";
import ProductCardAdmin from "./ProductCardAdmin";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./Products.css";

const ProductsAdmin = () => {
  const { currProductList } = useContext(MyContext);
  return (
    <div>
      <div>
        <h1>Products- Admin</h1>
        <h2>add, update and delete your products</h2>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => {}}>add new product</Button>
        </ButtonGroup>
      </div>
      {/* <section className="products"> */}
      <section className="products">
        {currProductList.map((item) => {
          return (
            <ProductCardAdmin
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              img_src={item.image}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ProductsAdmin;
