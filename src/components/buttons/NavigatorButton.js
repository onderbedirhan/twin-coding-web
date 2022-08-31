import React from "react";
import { Fab } from "@mui/material";

const NavigatorButton = ({ onClick, buttonText }) => {
  return (
    <Fab
      variant="extended"
      size="small"
      aria-label="add"
      style={{ backgroundColor: "#00FFDA", color: "white" }}
      onClick={onClick}
    >
      {buttonText}
    </Fab>
  );
};

export default NavigatorButton;
