import "./Nav.css";
import Selection from "./Selection";
import RangeSlider from "./RangeSlider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { RiAdminLine } from "react-icons/ri";
// import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const Nav = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="product-filter">
      <div className="sort">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            <CartDrawer />
            cart
          </Button>
          <Button onClick={handleClickOpen}>
            <RiAdminLine color="#C6DCEF" size={30} />
            admin
          </Button>
        </ButtonGroup>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Manager Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To login to this website as a manager, please enter a manager's
              password here
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              helperText="enter correct manager password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                if (password == "admin!902Sk") navigate(`admin/products`);
              }}
            >
              log in
            </Button>
            <Button onClick={handleClose}>cancel</Button>
          </DialogActions>
        </Dialog>
      </div>

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
