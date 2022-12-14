import React from "react";
import ExperimentSlider from "../../components/sliders/ExperimentSlider";
import ExperimentDetailAppBar from "../../layout/appbars/ExperimentDetailAppBar";
import { useSelector } from "react-redux/es/exports";
import ProgressBar from "../../components/progressbar/ProgressBar";

const ExperimentDetailPage = () => {
  const extraPageNumber = 1;

  const currentExperiment = useSelector(
    (state) => state.experimentSelection.value
  );

  const maxSteps = currentExperiment.tutorials.length + extraPageNumber;

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

  return (
    <>
      <ExperimentDetailAppBar />
      <ExperimentSlider
        currentExperiment={currentExperiment}
        maxSteps={maxSteps}
        activeStep={activeStep}
        handleStepChange={handleStepChange}
        extraPageNumber={extraPageNumber}
      />
      <ProgressBar
        activeStep={activeStep}
        maxSteps={maxSteps}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </>
  );
};

export default ExperimentDetailPage;
