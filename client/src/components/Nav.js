import "./Nav.css";
import Selection from "./Selection";
import RangeSlider from "./RangeSlider";

const Nav = () => {
  return (
    <nav className="product-filter">
      <h1>Products</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter</label>
          <Selection />
        </div>

        <div className="collection-sort">
          <label>Sort by price:</label>
          <RangeSlider />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
