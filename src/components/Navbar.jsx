import React, {  useState } from 'react'
import Menu from '../assets/img/menu.svg'
import Logo from '../assets/img/Logo.svg'
import { NavLink } from 'react-router-dom'
import Vector from '../assets/img/Vector.svg'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsBasket3Fill } from "react-icons/bs";
import { FaBellConcierge } from "react-icons/fa6";
  
const Navbar = ( {user} ) => {
  let[burger,setBurger]=useState(false)
return (
  <nav className='pt-[33px] w-full bg-white'>
   <div className="container">
      <div className='w-full flex items-center justify-between sm:justify-start sm:gap-[73.4px] md:gap-[103.12px] border-b pb-[30px]'>
          <img className='sm:w-[80px] sm:h-[30.09px]' src={Logo} alt="alt" />
          <button onClick={()=>setBurger(!burger)} className=' sm:hidden'>

          <img className='bx-menu text-[45px] font-normal' src={Menu} alt="" />
          </button>
          <div className='hidden  sm:flex justify-between items-center w-[1022px]'>
              <ul className='flex w-[115.03px] justify-between lg:w-[162.49px]'>
                  <NavLink to="/" className=' font-medium text-[12.68px] text-[#606060] hover:text-[#6C5FBC] lg:text-[17.83px]'>Home</NavLink>
                  <NavLink to="/dishes" className=' font-medium text-[12.68px] text-[#606060] hover:text-[#6C5FBC] lg:text-[17.83px]'>Dishes</NavLink>
              </ul>
              <div className='flex md:w-[208.74px] w-[200px] justify-between'>
                    <NavLink to="/korzinka">
                  <button >
                  <img  className='bx bx-cart text-[#606060] text-[25px] hover:text-[#6C5FBC]' src={Vector} alt="" /></button>
                    </NavLink>
                  <div className='flex justify-between w-[165.41px] '>
                        

                                {user ? <span className='text-[20px] ml-3'>{user}</span> :<NavLink to='/login'>
                                                      <NavLink to="/login">
                        
                  <button className='w-[73.03px] h-[45.36px] text-[12.68px] font-semibold rounded-[12.68px] text-[#606060] hover:bg-[#6C5FBC] hover:text-white'>Login</button>
                    </NavLink>
                                <NavLink to="signin">

<button className='pl-[15.02px] pr-[15.02px] text-[12.68px] font-semibold  w-[106.03px] h-[45.36px] rounded-[12.68px] text-[#606060] hover:bg-[#6C5FBC] hover:text-white'>Sigin Up</button>
  </NavLink>
            </NavLink>}
                  </div>
              </div>
          </div>
      </div>
  </div> 
  <div className={burger?'isopen sm:hidden p-3':'close sm:hidden'}>
      <div className='flex flex-col gap-4 w-full '>
      <NavLink to="/korzinka" className='open flex w-full justify-between text-white border-b'>
          <p>Korzinka </p>
          <button className=''><BsBasket3Fill className='w-[60px] h-[22px] '/></button>
      </NavLink>
      <NavLink className='open flex w-full justify-between text-white border-b' to="/">
          <p>Home </p>
          <button className=''><SiHomeassistantcommunitystore className='w-[60px] h-[22px] '/></button>
      </NavLink>
      <NavLink className='open flex w-full justify-between text-white border-b' to="/dishes">
          <p>Dishes </p>
          <button className=''><FaBellConcierge className='w-[60px] h-[22px]'/></button>
      </NavLink>
      <button className='text-white bg-[#344e4e] h-[45px] rounded-lg hover:bg-gray-200 hover:text-blue-600'>Sigin Up</button>
      <button className='text-white bg-[#344e4e] h-[45px] rounded-lg hover:bg-gray-200 hover:text-blue-600'>Login</button>
      </div>
  </div>
  </nav>
)
}


export default Navbar