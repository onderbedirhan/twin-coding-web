import * as React from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";

export default function ExperimentSlider({
  currentExperiment,
  maxSteps,
  activeStep,
  handleStepChange,
}) {
  const theme = useTheme();

  let fileExtention = currentExperiment.tutorials[activeStep].media.slice(
    -3,
    -1
  );

  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {currentExperiment.tutorials.map((step, index) => (
          <Grid
            container
            sx={{
              pl: 2,
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item xs="4">
                  <h3>{currentExperiment.tutorials[activeStep].title}</h3>
                  <br />
                  <div style={{ whiteSpace: "pre-line" }}>
                    {currentExperiment.tutorials[activeStep].desc}
                  </div>
                </Grid>
                <Grid item xs="8" sx={{ padding: 1 }}>
                  {fileExtention === "mp" ? (
                    <div className="player-wrapper">
                      <ReactPlayer
                        controls
                        className="react-player"
                        url={currentExperiment.tutorials[activeStep].media}
                        width="80%"
                        height="80%"
                      />
                    </div>
                  ) : (
                    <div className="player-wrapper">
                      <img
                        alt={currentExperiment.tutorials[activeStep].media}
                        className="react-player"
                        src={currentExperiment.tutorials[activeStep].media}
                        style={{ width: "80%", height: "80%" }}
                      />
                    </div>
                  )}
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        ))}
      </SwipeableViews>
    </Grid>
  );
}
