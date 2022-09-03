import * as React from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { Grid } from "@mui/material";
import ReactPlayer from "react-player";
import CustomSwipeableView from "./CustomSwipeableView";

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
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomSwipeableView
        theme={theme}
        activeStep={activeStep}
        handleStepChange={handleStepChange}
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
                spacing="5px"
                style={{ padding: "10px" }}
              >
                <Grid item xs={5}>
                  <h3>{currentExperiment.tutorials[activeStep].title}</h3>
                  <br />
                  <div style={{ whiteSpace: "pre-line" }}>
                    {currentExperiment.tutorials[activeStep].desc}
                  </div>
                </Grid>
                <Grid item xs={7}>
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
                      />
                    </div>
                  ) : (
                    <img
                      className="experiment-image"
                      alt={currentExperiment.tutorials[activeStep].media}
                      // className="react-player"
                      src={currentExperiment.tutorials[activeStep].media}
                      style={{ width: "80%", height: "80%" }}
                    />
                  )}
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        ))}
      </CustomSwipeableView>
    </Grid>
  );
};

export default ExperimentSlider;
