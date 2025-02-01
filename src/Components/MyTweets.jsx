import React from "react";
import { myTweets } from "../data/Videodata";

const MyTweets = () => {
  return (
    <div className="p-4">
      {myTweets.map((tweet) => (
        <div key={tweet.id} className="p-3 border rounded-lg shadow-md my-2">
          <p className="text-black dark:text-gray-300">{tweet.tweet}</p>
          <small className="text-gray-500">{tweet.date}</small>
        </div>
      ))}
    </div>
  );
};

export default MyTweets;
