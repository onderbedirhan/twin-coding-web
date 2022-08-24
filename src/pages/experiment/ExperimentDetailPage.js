import { Grid } from "@mui/material";
import React from "react";
import ExperimentSlider from "../../components/sliders/ExperimentSlider";
import ExperimentDetailAppBar from "../../layout/appbars/ExperimentDetailAppBar";

export default function ExperimentDetailPage() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      <ExperimentDetailAppBar />
      <ExperimentSlider />
    </Grid>
  );
}
