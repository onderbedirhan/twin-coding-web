import React from "react";
import { Fab } from "@mui/material";
import twinColors from "../../assets/colors/colors";

const NavigatorButton = ({ onClick, buttonText }) => {
  return (
    <Fab
      variant="extended"
      size="small"
      aria-label="add"
      style={{ backgroundColor: twinColors.activeColor, color: "white" }}
      onClick={onClick}
    >
      {buttonText}
    </Fab>
  );
};

export default NavigatorButton;
