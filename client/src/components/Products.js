import { useContext } from "react";
import MyContext from "../MyContext";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  const { currProductList } = useContext(MyContext);
  return (
    <section className="products">
      {currProductList.map((item) => {
        return (
          <ProductCard
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
  );
};

export default Products;
