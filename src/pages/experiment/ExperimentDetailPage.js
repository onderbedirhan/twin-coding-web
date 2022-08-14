import { Fab, Grid } from "@mui/material";
import React from "react";
import ExperimentDetailAppBar from "../../layout/appbars/ExperimentDetailAppBar";
import ExperimentSlider from "../../components/sliders/ExperimentSlider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ExperimentDetailPage() {
  return (
    <Grid container>
      <ExperimentDetailAppBar />
      {/* <ExperimentSlider /> */}
      <Grid
        container
        sx={{ justifyContent: "space-between", mr: 0, ml: 0 }}
        style={{ position: "fixed", bottom: 0, backgroundColor: "#00FFDA" }}
      >
        <Grid item sx={{ ml: 2, mt: 2, mb: 2 }}>
          Start
        </Grid>
        <Grid item sx={{ mt: 2, mb: 2 }}>
          1/7
        </Grid>
        <Grid item sx={{ mt: 2, mb: 2, mr: 2 }}>
          <Fab
            variant="extended"
            size="small"
            color="inherit"
            aria-label="add"
            // onClick={() => navigate("/")}
          >
            <ArrowForwardIosIcon sx={{ mr: 1 }} />
            Next
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
}
