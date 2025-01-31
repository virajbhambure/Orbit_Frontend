import React from "react";

const VideoCard = ({ thumbnail, avatar, title, channel, description, views, duration, uploaded }) => {
  return (
    <div className="w-[300px] p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-lg" />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
          {duration}
        </span>
      </div>
      <div className="flex mt-2 overflow-hidden  dark:text-white">
        <img src={avatar} alt={channel} className="w-10 h-10 rounded-full mr-2" />
        <div className="">
          <h3 className="text-gray-800 font-bold">{title}</h3>
          <p className="text-gray-400 text-sm">{channel}</p>         
        </div>
      </div>
      <div className="mt-2 space-x-2">
      
      <p className="text-gray-500 text-xs truncate ">{description}</p>
      <div className="flex  mt-2 justify-between  ">
      <p className="text-gray-400 text-xs">{views} •{uploaded}  </p>
      {/* <p className="text-gray-400 text-xs">• {uploaded}</p> */}
      </div>
      </div>
    </div>
  );
};

export default VideoCard;
