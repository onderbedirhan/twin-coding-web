import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { routes } from "../../router/routeList";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Fab, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";

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

function SwipeableTextMobileStepper() {
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

  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid container style={{ position: "fixed", top: 0 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Fab
              variant="extended"
              size="small"
              color="inherit"
              aria-label="add"
              onClick={() => navigate(routes.EXPERIMENT_PAGE)}
            >
              <ArrowBackIosNewIcon sx={{ mr: 1 }} />
              Back
            </Fab>
          </Paper>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  // <Box
                  //   component="img"
                  //   sx={{
                  //     height: "100%",
                  //     display: "block",
                  //     //   maxWidth: 400,
                  //     maxHeight: 300,
                  //     overflow: "hidden",
                  //     width: "100%",
                  //   }}
                  //   src={step.imgPath}
                  //   alt={step.label}
                  // />

                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item xs="4">
                      <Typography variant="h6">Malzemeler</Typography>
                      <Typography variant="h7">1- Makas</Typography>
                      <Typography variant="h7">2- Makas</Typography>
                      <Typography variant="h7">3- Makas</Typography>
                      <Typography variant="h7">4- Makas</Typography>
                    </Grid>
                    <Grid item xs="8">
                      <ReactPlayer
                        controls
                        width="250px"
                        height="150px"
                        url={
                          "https://twinner.blob.core.windows.net/app/experiments/02.disko_topu/disko_topu_01.mp4"
                        }
                      />
                    </Grid>
                  </Grid>
                ) : null}
              </div>
            ))}
          </SwipeableViews>
        </Box>
      </Grid>

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

export default SwipeableTextMobileStepper;
