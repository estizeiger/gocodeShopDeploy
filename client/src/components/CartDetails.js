import { useContext } from "react";
import Button from "@mui/material/Button";
import MyContext from "../MyContext";
import CartItem from "./CartItem";
// import "./Products.css";
import "./ProductsInLine.css";

const CartDetails = () => {
  const { cartProducts } = useContext(MyContext);
  return (
    <div>
      <header>
        <span>
          <h1>Your Cart</h1>
          <h2>check your cart details, including the amount of each item.</h2>
        </span>
        <Button variant="outlined">go to payment</Button>
      </header>
      <section className="products-in-line">
        {cartProducts.map((item) => {
          return (
            <CartItem
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              amount={item.amount}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CartDetails;
