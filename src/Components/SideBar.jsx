import React from 'react'
import {House,MessagesSquare,History,User} from 'lucide-react'

const SideBar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 w-15 dark:text-white  text-sm  fixed h-full pt-6 items-center flex flex-col space-y-6'>
     
     <ul className='flex flex-col items-center space-y-6 '>
      <li className='flex flex-col items-center hover:text-blue-600  cursor-pointer'><House/> Home</li>
      <li className='flex flex-col items-center hover:text-blue-600 cursor-pointer' ><MessagesSquare/>Tweets</li>
      <li  className='flex flex-col items-center hover:text-blue-600 cursor-pointer'><History/>History</li>
      <li  className='flex flex-col items-center hover:text-blue-600 cursor-pointer'><User/>Account</li>
     </ul>
     
      
    </div>
  )
}

export default SideBar
