
import React,{useState} from "react";
import Header from "./Header";
import { myVideos, myTweets, likedVideos } from "../data/Videodata";
import VideoGrid from "./Videogrid.jsx";
import VideoCard from "./VideoCard.jsx";
import MyTweets from "./MyTweets.jsx";
import LikedVideos from "./LikedVideos.jsx";
import MyVideos from "./MyVideos.jsx";


const Profile = () => {
  const [activeTab, setActiveTab] = useState("My Videos");
  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen w-full">
      <Header />

     
      <div className="coverImage">
        <img
          src="src/assets/coverImage.jpg"
          alt="cover-image"
          className="w-full h-60 object-cover"
        />
      </div>

      
      <div className="flex flex-col items-center mt-[-4rem]">
        
        {/* Profile Image */}
        <img
          src="src/assets/profileImage.jpg"
          alt="profile-image"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />

        {/* Profile Info */}
        <div className="text-center mt-4">
          <h1 className="font-bold text-2xl dark:text-white">YT-PubG</h1>
          <p className="text-gray-700 font-medium dark:text-gray-300 ">
            Web Developer || Gamer || Hustler
          </p>

          {/* Stats Section */}
          <div className="flex justify-center gap-10 mt-3">
            {/* Followers */}
            <div className="flex flex-col items-center">
              <p className="font-bold">Followers</p>
              <p className="text-gray-700 dark:text-white">1.5M</p>
            </div>
            {/* Following */}
            <div className="flex flex-col items-center">
              <p className="font-bold">Following</p>
              <p className="text-gray-700 dark:text-white">1.5K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Navigation Tabs */}
      <div className="mt-6 border-t-2 border-gray-300 dark:border-gray-700">
        <ul className="flex justify-around py-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          <li className="hover:text-blue-600 cursor-pointer" onClick={()=>setActiveTab("myVideos")}>
            My Videos
          </li>
          <li className="hover:text-blue-600 cursor-pointer"onClick={()=>setActiveTab("myTweets")}>
            My Tweets
          </li>
          <li className="hover:text-blue-600 cursor-pointer" onClick={()=>setActiveTab("likedVideos")}>
            Liked Videos
          </li>
        </ul>
      </div>
      <div className="p-5">
        {activeTab === "myVideos" && <MyVideos />}
        {activeTab === "myTweets" && <MyTweets />}
        {activeTab === "likedVideos" && <LikedVideos />}
      </div>
    </div>
  );
};

export default Profile;
