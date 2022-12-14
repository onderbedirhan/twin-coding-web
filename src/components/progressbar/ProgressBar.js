import { Fab, Grid } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import NavigatorButton from "../buttons/NavigatorButton";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routeList";

const ProgressBar = ({ activeStep, maxSteps, handleBack, handleNext }) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        position: "fixed",
        bottom: 0,
        padding: 1,
      }}
    >
      <Grid
        container
        item
        xs={9}
        sx={{
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {[...Array(maxSteps)].map((label, index) => (
              <Step key={index}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </Grid>
      <Grid container item xs={3} sx={{ justifyContent: "end" }}>
        {activeStep !== maxSteps - 1 ? (
          <>
            <Fab
              variant="extended"
              size="small"
              color="inherit"
              aria-label="add"
              disabled={activeStep !== 0 ? false : true}
              sx={{ mr: 1 }}
              onClick={handleBack}
            >
              <ArrowBackIosNewIcon />
            </Fab>

            <Fab
              variant="extended"
              size="small"
              color="inherit"
              aria-label="add"
              disabled={activeStep !== maxSteps - 1 ? false : true}
              onClick={handleNext}
            >
              <ArrowForwardIosIcon />
            </Fab>
          </>
        ) : (
          <NavigatorButton
            buttonText="Finish"
            onClick={() => navigate(routes.EXPERIMENT_PAGE)}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
