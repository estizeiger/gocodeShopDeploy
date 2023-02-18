import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <div className="App">
      <Nav />
      <CartDrawer />
      <Products />
    </div>
  );
}

export default App;
