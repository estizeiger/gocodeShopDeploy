import { useContext, useEffect, useState } from "react";
import MyContext from "../MyContext";
import ProductCardAdmin from "./ProductCardAdmin";
import Button from "@mui/material/Button";
import "./Products.css";
import { BsFilterCircle } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { RxImage } from "react-icons/rx";
import { AiOutlineDollarCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";

const ProductsAdmin = () => {
  const { currProductList, postProduct, fetchDataNew, categories } =
    useContext(MyContext);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
    await fetchDataNew();
  };

  useEffect(() => {
    // fetchDataOld();
    fetchDataNew();
  }, []);

  useEffect(() => {
    console.log("currProductList ", currProductList);
  }, [currProductList]);

  const [newTitle, setNewTitle] = useState("the amazing title");
  const [newCategory, setNewCategory] = useState("men's clothing");
  const [newPrice, setNewPrice] = useState(0);
  const [newImg, setNewImg] = useState(
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  );

  const handleAdd = async () => {
    await postProduct({
      title: newTitle,
      category: newCategory,
      price: newPrice,
      img: newImg,
    });
    await handleClose();
  };

  useEffect(() => {
    console.log("currProductList ", currProductList);
  }, [currProductList]);

  return (
    <div>
      <div>
        <header>
          <span>
            <h1>Products- Admin</h1>
            <h2>add, update and delete your products</h2>
          </span>
          <Button variant="outlined" onClick={handleClickOpen}>
            add new product
          </Button>
        </header>
      </div>
      {/* <section className="products"> */}
      <section className="products">
        {currProductList.map((item) => {
          return (
            <ProductCardAdmin
              id={item._id}
              key={item._id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              img_src={item.img}
              category={item.category}
            />
          );
        })}
      </section>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please enter the wanted fields of the new product.
          </DialogContentText>
          <BsFilterCircle color="#71bbff" />
          <TextField
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            defaultValue={"the amazing title"}
            fullWidth
            variant="standard"
          />
          <br />
          <BsInfoCircle color="#71bbff" />
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="category"
              onChange={(e) => {
                setNewCategory(e.target.value);
              }}
              defaultValue={"men's clothing"}
              helperText="Please select your currency"
            >
              {categories.map((title, i) => {
                return (
                  <MenuItem key={i} value={title}>
                    {title}
                  </MenuItem>
                );
              })}
            </TextField>
          </div>
          <RxImage color="#71bbff" />
          <TextField
            onChange={(e) => {
              setNewImg(e.target.value);
            }}
            autoFocus
            margin="dense"
            id="name"
            label="image url"
            type="text"
            defaultValue={
              "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            }
            fullWidth
            maxRows={4}
            multiline
            variant="standard"
          />
          <AiOutlineDollarCircle color="#71bbff" />
          <TextField
            onChange={(e) => {
              setNewPrice(e.target.valueAsNumber);
            }}
            autoFocus
            margin="dense"
            id="name"
            label="price"
            type="number"
            defaultValue={0}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>add</Button>
          <Button onClick={handleClose}>cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductsAdmin;
