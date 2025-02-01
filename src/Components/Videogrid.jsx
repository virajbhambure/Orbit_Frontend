import React from "react";
import VideoCard from "./VideoCard";
import {videoData} from "../data/videodata"; 

const VideoGrid = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen p-4 shrink-auto m-2">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {videoData.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
   
  );
};

export default VideoGrid;
