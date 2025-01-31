import React from 'react'
import { useState } from "react";
import { Search ,Mic,Plus,Bell,User,Menu,AlignJustify} from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  
    <header className="header top-0 z-50 sticky border-b-2 w-full p-3 flex flex-wrap items-center justify-between bg-white dark:bg-gray-900 shadow-md">
     
      {/* Left Section: Logo */}
      <div className="logo flex items-center space-x-2">
      <div className='dark:text-white'><AlignJustify/></div>
        <img src="src/assets/8-01.jpg" alt="orbit logo" className="h-10 w-10" />
        {/* <img src="/assets/8-01.jpg" alt="orbit logo" className="h-10 w-10" /> */}

        <h1 className="font-bold text-xl text-gray-800 dark:text-white">ORBIT</h1>
      </div>

      {/* Center Section: Searchbar */}
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-[250px] lg:w-[400px] px-2 mt-2 md:mt-0">
        <input
          type="text"
          className="w-full px-2 py-1 text-sm bg-transparent focus:outline-none dark:text-white"
          placeholder="Search..."
        />
        <Search className="text-gray-500 p-1 cursor-pointer" />
      </div>

      {/* Right Section: Icons */}
      <div className="flex  sm:justify-between space-x-4 mt-2 md:mt-0 ">
        {/* Voice Search */}
        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
          <Mic className="h-5 w-5 text-gray-600" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-4">
          <button className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition">
            <Plus className="w-5 h-5 mr-1" />
            <span className="text-sm">Create</span>
          </button>
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
          <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full mt-2 flex flex-col items-center space-y-2 sm:hidden">
          <button className="flex items-center bg-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-200">
            <Plus className="w-5 h-5 mr-1" />
            <span className="text-sm">Create</span>
          </button>
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 dark:text-white dark:hover:text-blue-600" />
          <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 dark:text-white dark:hover:text-blue-600" />
        </div>
      )}
    </header>

  )
}

export default Header
