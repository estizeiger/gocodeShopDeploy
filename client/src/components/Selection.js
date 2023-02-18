import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import MyContext from "../MyContext";

const Selection = () => {
  const { category, setCategory, categories } = useContext(MyContext);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          // color="secondary"
          onChange={handleChange}
        >
          <MenuItem value="All">All</MenuItem>
          {categories.map((title, i) => {
            return (
              <MenuItem key={i} value={title}>
                {title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
export default Selection;
