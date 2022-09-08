import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';


function Navbar() {

const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex items-center justify-between px-4 py-2'>
      {/* left site */}
      <div className='flex items-center'>
         <div onClick={() => setNav(!nav)}>
            <AiOutlineMenu size={30} className="cursor-pointer"/>
         </div>
         <div className='flex justify-center items-center'>
            <h1 className='px-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Best <span className='font-bold'>Eats</span></h1>
         </div>
         <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[15px]'>
            <p className='text-white bg-black rounded-full p-2'>Delevary</p>
            <p className='p-2'>PickUp</p>
         </div>
      </div>
      {/* search input */}
      <div className='flex items-center px-2 py-2 bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]'>
         <AiOutlineSearch size={25} className='px-1'/> 
         <input 
            type="text" 
            placeholder='Search foood' 
            className='w-full bg-transparent outline-none'
         />
      </div>
      {/* cart */}
      <div className='hidden md:flex'>
         <button className='bg-black text-white flex items-center py-2 rounded-full hover:bg-gray-500'>
            <BsFillCartFill size={20} className="mr-2"/>
            Cart
         </button>
      </div>
      {/* mobile menu  */}
      <div 
         onClick={() => setNav(!nav)}
         className={nav ? 'w-full h-screen bg-black/80 fixed left-0 top-0 duration-200 z-10' : 'w-full h-screen bg-black/80 fixed left-[-100%] top-0 duration-300' }>
         <div 
            onClick={(e) => {
               e.stopPropagation();
            }}
            className={nav ? 'absolute top-0 left-0 w-[300px] h-screen bg-white duration-500 z-10' : 'absolute top-0 left-[-100%] w-[300px] h-screen bg-white duration-1000'}>
            <AiOutlineClose 
               onClick={() => setNav(!nav)}
               size={25} 
               className="absolute right-4 top-4 cursor-pointer"
            />
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav className='p-4'>
               <ul className='flex flex-col text-gray-800'>
                  <li className='text-xl py-4 flex items-center'>
                     <TbTruckDelivery size={20} className="mr-2"/>
                     <Link to='.././pages/orders'>Orders</Link>   
                  </li>
                  <li className='text-xl py-4 flex items-center'>
                     <MdFavorite size={20} className="mr-2"/>Favorites
                  </li>
                  <li className='text-xl py-4 flex items-center'>
                     <FaWallet size={20} className="mr-2"/>Wallet
                  </li>
                  <li className='text-xl py-4 flex items-center'>
                     <MdHelp size={20} className="mr-2"/>Help
                  </li>
                  <li className='text-xl py-4 flex items-center'>
                     <AiFillTag size={20} className="mr-2"/>Promotions
                  </li>
                  <li className='text-xl py-4 flex items-center'>
                     <BsFillSaveFill size={20} className="mr-2"/>Best one
                  </li>
                  <li className='text-xl py-4 flex items-center'>
                     <FaUserFriends size={20} className="mr-2"/>Invite Friends
                  </li>
               </ul>
            </nav>
         </div>
      </div>
    </div>
  );
};

export default Navbar;