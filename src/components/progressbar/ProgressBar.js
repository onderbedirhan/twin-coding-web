import { Fab, Grid } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ProgressBar({
  activeStep,
  maxSteps,
  handleBack,
  handleNext,
}) {
  const changeColor = (index) => {
    if (activeStep > index) {
      return "lightgreen";
    } else {
      return "white";
    }
  };

  return (
    <Grid
      container
      sx={{
        position: "fixed",
        bottom: 0,
        padding: 1,
        backgroundColor: "lightblue",
      }}
    >
      <Grid
        container
        item
        xs="9"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          // border: 2,
          // borderRadius: 2,
          // backgroundColor: "red",
        }}
      >
        {[...Array(maxSteps - 1)].map((elementInArray, index) => (
          <Grid
            item
            justifyContent="center"
            xs={12 / (maxSteps - 1)}
            sx={{
              backgroundColor: changeColor(index),
              border: 2,
              borderRadius: 2,
              minHeight: "20px",
            }}
          ></Grid>
        ))}
      </Grid>
      <Grid container item xs="3" sx={{ justifyContent: "end" }}>
        {activeStep !== 0 ? (
          <Fab
            variant="extended"
            size="small"
            color="inherit"
            aria-label="add"
            sx={{ mr: 1 }}
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon sx={{ mr: 1 }} />
          </Fab>
        ) : null}
        {activeStep !== maxSteps - 1 ? (
          <Fab
            variant="extended"
            size="small"
            color="inherit"
            aria-label="add"
            onClick={handleNext}
          >
            <ArrowForwardIosIcon sx={{ mr: 1 }} />
          </Fab>
        ) : null}
      </Grid>
    </Grid>
  );
}
