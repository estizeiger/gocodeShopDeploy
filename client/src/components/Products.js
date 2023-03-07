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
            id={item._id}
            key={item._id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            img_src={item.img}
          />
        );
      })}
    </section>
  );
};

export default Products;
