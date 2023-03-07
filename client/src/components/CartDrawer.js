import { useContext, useState } from "react";
import MyContext from "../MyContext";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { cartProducts } = useContext(MyContext);
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {cartProducts.map((item) => {
          return (
            <ListItem key={item.id} disablePadding>
              <CartItem
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <ShoppingCartIcon onClick={toggleDrawer(true)} color="primary" />
      <div className="cart-drawer">
        <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
          <h2>Your Cart</h2>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("cartDetails");
            }}
          >
            Show Full Cart
          </Button>
          {list()}
        </Drawer>
      </div>
    </div>
  );
};
export default CartDrawer;
