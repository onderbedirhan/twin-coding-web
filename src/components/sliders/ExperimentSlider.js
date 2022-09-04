import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import CustomSwipeableView from "./CustomSwipeableView";
import ExperimentDetailImage from "../images/ExperimentDetailImage";
import ExperimentVideoPlayer from "../videoplayer/ExperimentVideoPlayer";

const ExperimentSlider = ({
  currentExperiment,
  maxSteps,
  activeStep,
  handleStepChange,
  extraPageNumber,
}) => {
  const theme = useTheme();

  let fileExtention =
    activeStep !== 0
      ? currentExperiment.tutorials[activeStep - extraPageNumber].media.slice(
          -3,
          -1
        )
      : null;
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
                    <ExperimentDetailImage src={currentExperiment.chartImage} />
                  ) : (
                    <>
                      <h3>
                        {
                          currentExperiment.tutorials[
                            activeStep - extraPageNumber
                          ].title
                        }
                      </h3>
                      <br />
                      <div style={{ whiteSpace: "pre-line" }}>
                        {
                          currentExperiment.tutorials[
                            activeStep - extraPageNumber
                          ].desc
                        }
                      </div>
                    </>
                  )}
                </Grid>
                <Grid item xs={7}>
                  {activeStep === 0 ? (
                    <ExperimentVideoPlayer url={currentExperiment.media} />
                  ) : fileExtention === "mp" ? (
                    <ExperimentVideoPlayer
                      url={
                        currentExperiment.tutorials[
                          activeStep - extraPageNumber
                        ].media
                      }
                    />
                  ) : (
                    <ExperimentDetailImage
                      src={
                        currentExperiment.tutorials[
                          activeStep - extraPageNumber
                        ].media
                      }
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
