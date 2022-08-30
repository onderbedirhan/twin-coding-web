import * as React from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { Button, Fab, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const ExperimentSlider = ({
  currentExperiment,
  maxSteps,
  activeStep,
  handleStepChange,
}) => {
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
        height: "100vh",
        // position: "fixed",
        alignItems: "center",
        justifyContent: "center",
        // background: "red",
      }}
    >
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {currentExperiment.tutorials.map((step, index) => (
          <Grid
            key={index}
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
                justifyContent="space-between"
                alignItems="center"
                spacing={5}
              >
                <Grid item xs="5">
                  <h3>{currentExperiment.tutorials[activeStep].title}</h3>
                  <br />
                  <div style={{ whiteSpace: "pre-line" }}>
                    {currentExperiment.tutorials[activeStep].desc}
                  </div>
                </Grid>
                <Grid item xs="7" sx={{ padding: 1 }}>
                  {fileExtention === "mp" ? (
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        // This code provide a automatic thumbnail for react-player
                        // Starts a accurate time of the video so that this shows a like thumbail
                        url={`${currentExperiment.tutorials[activeStep].media}#t=0.5`}
                        width="80%"
                        height="80%"
                        controls
                        // playing
                        // playIcon={
                        //   <Fab>
                        //     <PlayCircleIcon />
                        //   </Fab>
                        // }
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="experiment-image"
                        alt={currentExperiment.tutorials[activeStep].media}
                        // className="react-player"
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
};

export default ExperimentSlider;
