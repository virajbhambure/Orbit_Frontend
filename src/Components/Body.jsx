import React from 'react'
import VideoGrid from './VideoGrid'
// import Header from './Header'

import SideBar from './SideBar'

function Body() {
  return (
   <div className='bg-white dark:bg-gray-900'>
     
   
     <SideBar />       
    <div className='flex justify-center '>     
      <VideoGrid />
    </div>
   </div>
  )
}

export default Body
