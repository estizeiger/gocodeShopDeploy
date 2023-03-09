import { useContext } from "react";
import Button from "@mui/material/Button";
import MyContext from "../MyContext";
import "./CartDetails.css";
import CartItem from "./CartItem";

const CartDetails = () => {
  const { cartProducts } = useContext(MyContext);
  return (
    <div>
      <header>
        <span>
          <h1>Your Cart</h1>
          <h2>check your cart details, including the amount of each item.</h2>
        </span>
        <span>
          <Button variant="outlined">go to payment</Button>
          <h3>
            total price:{" "}
            {cartProducts.reduce((acc, curItem) => {
              return acc + curItem.amount * curItem.price;
            }, 0)}
            {"$"}
          </h3>
        </span>
      </header>
      <section className="cart-details">
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
