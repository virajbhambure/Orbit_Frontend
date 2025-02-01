import React from "react";
import { likedVideos } from "../data/Videodata";

const LikedVideos = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {likedVideos.map((video) => (
        <div key={video.id} className="border p-4 rounded-lg shadow-md">
          <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-semibold mt-2">{video.title}</h3>
          <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
            Watch Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default LikedVideos;
