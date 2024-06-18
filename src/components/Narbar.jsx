import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const [navOpen, setNavOpen] = useState(false)

  return (
    <div class="flex items-center justify-between p-[30bupx] bg-[#b9dcdd] px-[20px] py-[18px]">
        <img src="./images/logo.svg" alt="" />
       
            <div class="sm:flex items-center justify-between gap-20 my-67px hidden"  >
           
              <Link to='/'>Home</Link>
          
              <Link to='/about'>About Us</Link>
            
              <Link to='/blog'>Blogs</Link>
            </div>
       {
        navOpen &&
        <div class="flex sm:hidden items-center w-[45%] gap-[45px] bg-gray-500 text-white flex-col justify-between translate-x-[50%] top-[15%] fixed py-[25px]">
          
          <Link to='/'>Home</Link>
      
          <Link to='/about'>About Us</Link>
        
          <Link to='/blog'>Blogs</Link>
        </div>
       }
          <button onClick={()=> setNavOpen(!navOpen)} className='block sm:hidden'>=</button>
         <button class="bg-[#083f08] text-white rounded-2xl p-[6px] hidden md:block ">Request Invite</button>
    </div>
  )
}

export default Navbar