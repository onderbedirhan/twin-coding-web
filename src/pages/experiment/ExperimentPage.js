import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import ExperimentAppBar from "../../layout/appbars/ExperimentAppBar";

export default function ExperimentPage() {
  return (
    <Grid container>
      <ExperimentAppBar />
    </Grid>
  );
}
