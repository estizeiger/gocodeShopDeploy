import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <span>
            <h1 className="main-title">EasyShopping</h1>
            <h2>Shopping made easy:)</h2>
          </span>
        </div>
      </header>
      <Nav />

      <Products />
      <footer>
        <h6>all rights reserved to esti</h6>
      </footer>
    </div>
  );
}

export default App;
