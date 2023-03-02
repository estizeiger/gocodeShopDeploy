import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate, useParams } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ProductUpdate = () => {
  const [chosenProduct, setChosenProduct] = useState({});
  // const [rate, setRate] = useState([]);
  const { id } = useParams();

  const fetchSingleProduct = async () => {
    const response = await fetch(`http://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    setChosenProduct(data);
  };

  useEffect(() => {
    console.log(id);
    fetchSingleProduct();
    // setRate(
    //   new Array(Math.floor(parseInt(chosenProduct.rating["rate"]))).fill("*")
    // );
  }, [id]);

  const navigate = useNavigate();

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-multiline-static"
          label="title"
          multiline
          rows={3}
          defaultValue={chosenProduct.title}
          variant="standard"
          // value={}
          // onChange={(event) => {
          //   setChosenProduct(event.target.value);
          // }}
        />

        <div>
          <TextField
            id="standard-number"
            label="price"
            type="number"
            defaultValue={chosenProduct.price}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
        </div>
      </Box>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          save update
          <BsCheck2All />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ProductUpdate;
