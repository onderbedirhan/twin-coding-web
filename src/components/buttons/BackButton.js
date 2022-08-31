import React from "react";
import { Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const BackButton = ({ onClick }) => {
  return (
    <Fab
      variant="extended"
      size="small"
      color="inherit"
      aria-label="add"
      onClick={onClick}
    >
      <ArrowBackIosNewIcon sx={{ mr: 1 }} />
      Back
    </Fab>
  );
};

export default BackButton;
