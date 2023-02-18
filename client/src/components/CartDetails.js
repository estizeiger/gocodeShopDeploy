import { useContext } from "react";
import MyContext from "../MyContext";
import CartItem from "./CartItem";
import "./Products.css";

const CartDetails = () => {
  const { cartProducts } = useContext(MyContext);
  return (
    <div>
      <h1>Cart Details</h1>
      <section className="products">
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
