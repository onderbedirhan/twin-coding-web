import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { routes } from "../../router/routeList";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Fab, Grid, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";
import ExperimentDetailAppBar from "../../layout/appbars/ExperimentDetailAppBar";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function ExperimentSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const materials = "1) Kodlama Modülü\n2) USB Kablosu\n3) Buzzer";
  const navigate = useNavigate();
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
        {images.map((step, index) => (
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
                // sx={{
                //   pl: 2,
                //   backgroundColor: "pink",
                //   width: "100%",
                //   height: "100%",
                // }}
              >
                <Grid item xs="6">
                  <h3>Malzemeler</h3>
                  <Typography>
                    <pre style={{ fontFamily: "inherit" }}>{materials}</pre>
                  </Typography>
                </Grid>
                <Grid item xs="6">
                  <ReactPlayer
                    controls
                    url="https://twinner.blob.core.windows.net/app/experiments/02.disko_topu/disko_topu_01.mp4"
                    width="300px"
                    height="200px"
                  />
                  {/* <ReactPlayer
                    controls
                    width="300px"
                    height="200px"
                    url={
                      "https://twinner.blob.core.windows.net/app/experiments/02.disko_topu/disko_topu_01.mp4"
                    }
                  /> */}
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
