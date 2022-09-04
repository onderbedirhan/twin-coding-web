import React from "react";

const ExperimentDetailImage = ({ src }) => {
  return (
    <img
      className="experiment-image"
      alt={src}
      // className="react-player"
      src={src}
      style={{ width: "80%", height: "80%" }}
    />
  );
};

export default ExperimentDetailImage;
