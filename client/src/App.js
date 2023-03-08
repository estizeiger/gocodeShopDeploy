import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <header>
        <div className="main-title">
          <span>
            <h1>EasyShopping</h1>
            <h2>shop your favorite products online, easily and efficiently!</h2>
          </span>
        </div>
      </header>
      <Nav />

      <Products />
      <footer>
        <h6>@all rights reserved to esti</h6>
      </footer>
    </div>
  );
}

export default App;
