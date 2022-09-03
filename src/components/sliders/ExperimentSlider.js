import * as React from "react";
import { useTheme } from "@mui/material/styles";
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

  let fileExtention =
    activeStep !== 0
      ? currentExperiment.tutorials[activeStep - 1].media.slice(-3, -1)
      : null;
  console.log(activeStep);
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
        {[...Array(maxSteps)].map((step, index) => (
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
                  {activeStep === 0 ? (
                    <>
                      <img
                        className="experiment-image"
                        alt={currentExperiment.chartImage}
                        // className="react-player"
                        src={currentExperiment.chartImage}
                        style={{ width: "80%", height: "80%" }}
                      />
                    </>
                  ) : (
                    <>
                      <h3>
                        {currentExperiment.tutorials[activeStep - 1].title}
                      </h3>
                      <br />
                      <div style={{ whiteSpace: "pre-line" }}>
                        {currentExperiment.tutorials[activeStep - 1].desc}
                      </div>
                    </>
                  )}
                </Grid>
                <Grid item xs={7}>
                  {activeStep === 0 ? (
                    <>
                      <div className="player-wrapper">
                        <ReactPlayer
                          className="react-player"
                          // This code provide a automatic thumbnail for react-player
                          // Starts a accurate time of the video so that this shows a like thumbail
                          url={`${currentExperiment.media}#t=0.5`}
                          width="80%"
                          height="80%"
                          controls
                        />
                      </div>
                    </>
                  ) : fileExtention === "mp" ? (
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        // This code provide a automatic thumbnail for react-player
                        // Starts a accurate time of the video so that this shows a like thumbail
                        url={`${
                          currentExperiment.tutorials[activeStep - 1].media
                        }#t=0.5`}
                        width="80%"
                        height="80%"
                        controls
                      />
                    </div>
                  ) : (
                    <img
                      className="experiment-image"
                      alt={currentExperiment.tutorials[activeStep - 1].media}
                      // className="react-player"
                      src={currentExperiment.tutorials[activeStep - 1].media}
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
