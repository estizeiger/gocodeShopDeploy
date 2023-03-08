import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import MyContext from "../MyContext";

const ProductCardAdmin = ({ id, title, img_src, price, rating, category }) => {
  const navigate = useNavigate();
  const {
    putProduct,
    deleteProduct,
    currProductList,
    fetchDataNew,
    categories,
  } = useContext(MyContext);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async () => {
    setOpen(false);
    await fetchDataNew();
  };

  useEffect(() => {
    console.log("currProductList ", currProductList);
  }, [currProductList]);

  const [newTitle, setNewTitle] = useState(title);
  const [newCategory, setNewCategory] = useState(category);
  const [newPrice, setNewPrice] = useState(price);
  const [newImg, setNewImg] = useState(img_src);

  const handleUpdate = async () => {
    await putProduct(id, {
      title: newTitle,
      category: newCategory,
      price: newPrice,
      img: newImg,
    });
    await handleClose();
  };

  const handleDelete = () => {
    deleteProduct(id);
    handleClose();
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          onClick={() => {
            navigate(`single/${id}`);
          }}
          alt="no img found"
          src={img_src}
        />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        <br />
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={handleClickOpen}>update</Button>
          <Button onClick={handleDelete}>delete</Button>
        </ButtonGroup>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update Product</DialogTitle>
          <DialogContent>
            <DialogContentText>
              please update the wanted fields of the selected product.
            </DialogContentText>
            <TextField
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              defaultValue={title}
              fullWidth
              variant="standard"
            />
            <br />
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="category"
                onChange={(e) => {
                  setNewCategory(e.target.value);
                }}
                defaultValue={category}
                helperText="Please select category"
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
            <TextField
              onChange={(e) => {
                setNewImg(e.target.value);
              }}
              autoFocus
              margin="dense"
              id="name"
              label="image url"
              type="text"
              defaultValue={img_src}
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={(e) => {
                setNewPrice(e.target.valueAsNumber);
              }}
              autoFocus
              margin="dense"
              id="name"
              label="price"
              type="number"
              defaultValue={price}
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleUpdate}>update</Button>
            <Button onClick={handleClose}>cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
