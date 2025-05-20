import React, { useState } from 'react'
import { Link } from 'react-router-dom'



 


const Navbar = () => {
  return (
   
    <header className="bg-blue-300 w-full mx-auto p-5 flex justify-between items-center flex-wrap shadow-md">

      <Link className="text-green-600 font-[risque] text-2xl" to={'/'}>
        AI Agent
      </Link>

      <div className="items-center space-x-5 md:block hidden">
        <Link to={'/mybids'} className="text-gray-600">
          My Bids
        </Link>
        <Link to={'/myjobs'} className="text-gray-600">
          My Jobs
        </Link>
        <Link to={'/myprojects'} className="text-gray-600">
          My Projects
        </Link>
        <Link to={'/messages'} className="text-gray-600">
          Messages
        </Link>
        
        
        </div>

       </header>

    
  )
}

export default Navbar;