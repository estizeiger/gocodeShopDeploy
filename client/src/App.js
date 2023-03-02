import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import CartDrawer from "./components/CartDrawer";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { RiAdminLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Nav />
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>
          <CartDrawer />
          cart
        </Button>
        <Button
          onClick={() => {
            navigate(`admin/login`);
          }}
        >
          <RiAdminLine size={30} />
          admin
        </Button>
        <Button>
          <CgDetailsMore size={30} />
          about
        </Button>
      </ButtonGroup>
      <Products />
    </div>
  );
}

export default App;
