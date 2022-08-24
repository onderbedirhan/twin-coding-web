import * as React from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Fab, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux/es/exports";

export default function ExperimentSlider() {
  const currentExperiment = useSelector(
    (state) => state.experimentSelection.value
  );
  const maxSteps = currentExperiment.tutorials.length;

  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  let fileExtention = currentExperiment.tutorials[activeStep].media;
  console.log(fileExtention.slice(-3, -1));
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        {currentExperiment.tutorials.map((step, index) => (
          <Grid
            container
            sx={{
              pl: 2,
              width: "100%",
              height: "100%",
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item xs="6">
                  <h3>{currentExperiment.tutorials[activeStep].title}</h3>
                  <Typography>
                    {currentExperiment.tutorials[activeStep].desc}
                  </Typography>
                </Grid>
                <Grid item xs="6">
                  {fileExtention === "jp" ? (
                    <img src={currentExperiment.tutorials[activeStep].media} />
                  ) : (
                    <ReactPlayer
                      controls
                      url={currentExperiment.tutorials[activeStep].media}
                      width="300px"
                      height="200px"
                    />
                  )}
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        ))}
      </SwipeableViews>

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
    </Grid>
  );
}
