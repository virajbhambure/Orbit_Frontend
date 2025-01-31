// import React from 'react'
// import Header from './Header'

// const Profile = () => {
//   return (
//     <div className='dark:bg-gray-800 dark:text-white h-screen absolute w-full'> 
//       <Header />
//       {/* cover image */}
//       <div className="coverImage ">
//         <img src="src\assets\coverImage.jpg" alt="cover-image" className=' w-full h-50' />
//       </div>
//         {/* profile image */}
//         <div className="profileImage  absolute top-60 left-10 flex ">
//             <img src="src\assets\profileImage.jpg" alt="profile-image"className='w-50 h-50 rounded-full  border-4 border-white shadow-lg  ' />
//             {/* profile info */}
//             <div className="profileInfo relative top-15 left-5">
                
//                 <h1 className='font-bold text-2xl dark:text-white'>YT-PubG</h1>
//                 <p className='text-gray-700 font-medium dark:text-white'>Web Developer || Gamer || Hustler</p>
//                 <div className="stats flex ">
//                     <div className="flex flex-col">
//                         <p className='font-bold'>Followers</p>
//                         <p className='text-gray-700 dark:text-white'>1.5M</p>
//                     </div>
//                     <div className="flex flex-col">
//                         <p className='font-bold ml-5'>Following</p>                       
//                         <p className='text-gray-700 dark:text-white ml-5'>1.5K</p>
//                     </div>
//                 </div>
                

//             </div>
            
//         </div>
//         {/* profile nav */}
//         <div className="profileNav mt-50 border-t-2 border-gray-300 dark:border-gray-700">
//             <ul className='flex justify-around p-5'>
//             <li className='hover:border-b-2 hover:border-blue-600 transition-all '>My Videos</li>
//             <li className='hover:border-b-2 hover:border-blue-600 transition-all '>My Tweets</li>
//             <li className='hover:border-b-2 hover:border-blue-600 transition-all '>Like Videos</li>
//             </ul>
//         </div>
        
        
//     </div>
//   )
// }

// export default Profile


import React from "react";
import Header from "./Header";

const Profile = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen w-full">
      <Header />

      {/* Cover Image */}
      <div className="coverImage">
        <img
          src="src/assets/coverImage.jpg"
          alt="cover-image"
          className="w-full h-60 object-cover"
        />
      </div>

      {/* Profile Section */}
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
          <p className="text-gray-700 font-medium dark:text-white">
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
          <li className="hover:border-b-2 hover:border-blue-600 transition-all cursor-pointer">
            My Videos
          </li>
          <li className="hover:border-b-2 hover:border-blue-600 transition-all cursor-pointer">
            My Tweets
          </li>
          <li className="hover:border-b-2 hover:border-blue-600 transition-all cursor-pointer">
            Liked Videos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
