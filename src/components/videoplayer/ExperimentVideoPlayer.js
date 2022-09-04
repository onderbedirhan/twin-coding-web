import React from "react";
import ReactPlayer from "react-player";

const ExperimentVideoPlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        // This code provide a automatic thumbnail for react-player
        // Starts a accurate time of the video so that this shows a like thumbail
        url={`${url}#t=0.5`}
        width="80%"
        height="80%"
        controls
      />
    </div>
  );
};

export default ExperimentVideoPlayer;
