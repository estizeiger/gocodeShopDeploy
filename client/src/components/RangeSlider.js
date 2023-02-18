import { useContext } from "react";
import MyContext from "../MyContext";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

const RangeSlider = () => {
  const { valueRange, setValueRange } = useContext(MyContext);

  const handleChange = (e, newValue) => {
    setValueRange(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "prices range"}
        value={valueRange}
        max={1000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        // color="secondary"
      />
    </Box>
  );
};
export default RangeSlider;
