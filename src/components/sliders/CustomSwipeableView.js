import React from "react";
import SwipeableViews from "react-swipeable-views";

const CustomSwipeableView = ({
  theme,
  activeStep,
  handleStepChange,
  children,
}) => {
  return (
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
      {children}
    </SwipeableViews>
  );
};

export default CustomSwipeableView;
