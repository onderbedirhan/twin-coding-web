import * as React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Fab, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ExperimentDetailBottomBar({
  activeStep,
  maxSteps,
  handleBack,
  handleNext,
}) {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        mr: 0,
        ml: 0,
      }}
      style={{ position: "fixed", bottom: 0, backgroundColor: "#00FFDA" }}
    >
      <Grid item sx={{ ml: 2, mt: 1, mb: 1, color: "white" }}>
        <h3>Start</h3>
      </Grid>
      <Grid item sx={{ mt: 1, mb: 1, color: "white" }}>
        <h3>
          {activeStep + 1}/{maxSteps}
        </h3>
      </Grid>

      {
        <Grid item sx={{ mt: 1, mb: 1, mr: 2, ml: 2 }}>
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
              Back
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
              Next
            </Fab>
          ) : null}
        </Grid>
      }
    </Grid>
  );
}
