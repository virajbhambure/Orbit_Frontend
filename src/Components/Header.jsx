import React from 'react'
import { useState } from "react";
import { Home, MessagesSquare, History,Search ,Mic,Plus,Bell,User,Menu,AlignJustify,BadgeCheck} from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
  
    <header className="header top-0 z-50 sticky border-b-2 w-full p-3 flex flex-wrap items-center justify-between bg-white dark:bg-gray-900 shadow-md">
      
      
      <div className="logo flex items-center space-x-2">
      <div ><AlignJustify className='dark:text-white hover:text-blue-600 cursor-pointer' onClick={()=>setIsSidebarOpen(!isSidebarOpen)} /></div>
        <img src="src/assets/8-01.jpg" alt="orbit logo" className="h-10 w-10 cursor-pointer" />
       

        <h1 className="font-bold text-xl text-gray-800 dark:text-white cursor-pointer">ORBIT</h1>
      </div>

      <div className='flex space-x-3'>
        
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-[250px] lg:w-[400px] px-2 mt-2 md:mt-0">
        <input
          type="text"
          className="w-full px-2 py-1 text-sm bg-transparent focus:outline-none dark:text-white"
          placeholder="Search..."
        />
        <Search className="text-gray-500 p-1 cursor-pointer" />
       
      </div>
      <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
          <Mic className="h-5 w-5 text-gray-600" />
        </div>

      </div>
      

    
      <div className="flex  sm:justify-between space-x-4 mt-2 md:mt-0 ">
 
        

  
        <div className="hidden sm:flex items-center space-x-4">
          <button className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-200 transition">
            <Plus className="w-5 h-5 mr-1" />
            <span className="text-sm">Create</span>
          </button>
          <Bell className="w-6 h-6 cursor-pointer  dark:text-white hover:text-blue-600" />
          <User className="w-6 h-6  cursor-pointer dark:text-white hover:text-blue-600" />
        </div>

     
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>


      {menuOpen && (
        <div className="w-full mt-2 flex flex-col items-center space-y-2 sm:hidden">
          <button className="flex items-center bg-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-200">
            <Plus className="w-5 h-5 mr-1" />
            <span className="text-sm">Create</span>
          </button>
          <Bell className="w-6 h-6 text-primary-600  cursor-pointer hover:text-gray-800 dark:text-white dark:hover:text-blue-600" />
          <User className="w-6 h-6 text-primary-600  cursor-pointer hover:text-gray-800 dark:text-white dark:hover:text-blue-600" />
        </div>
      )}



{isSidebarOpen && (
  <>
    
    <div 
      className="fixed inset-0 bg-blurred bg-opacity-50 z-40"
      onClick={() => setIsSidebarOpen(false)} // Clicking outside closes the sidebar
    ></div>

    
    <div className="fixed left-0 top-0 h-full w-60 bg-white dark:bg-gray-900 shadow-lg p-4 z-50">
      
      <div className="flex justify-between items-center mb-4">
        
        <AlignJustify
          className="dark:text-white cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className='flex items-center space-x-1 '>
        <img src="src/assets/8-01.jpg"  alt="orbit logo" className="h-10 w-10 cursor-pointer" />
        <h1 className="font-bold text-xl cursor-pointer text-gray-800 dark:text-white">ORBIT</h1>
        </div>
      </div>

      
      <ul className="flex flex-col space-y-4 dark:text-white ">
        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
          <Home /> <span>Home</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
          <MessagesSquare /> <span>Tweets</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
          <History /> <span>History</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
          <Plus /> <span>Create</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
          <User /> <span>Channel</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
          <BadgeCheck /> <span>Subscription</span>
        </li>
      </ul>
    </div>
  </>
)}


    </header>

  )
}

export default Header
