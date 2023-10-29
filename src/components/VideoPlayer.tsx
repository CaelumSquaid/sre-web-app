import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <video
      className="h-full w-full object-fill"
      src="./sample-trailer.mp4"
      preload="metadata"
      controls={true}
      autoPlay={true}
    />
  );
}

export default VideoPlayer;
