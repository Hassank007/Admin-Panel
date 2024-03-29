"use client";
import React from 'react'
import { navLinks } from '../lib'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
     {/*DESKTOP NAV */}<div className="hidden sm:flex  flex-col bg-gray-800 w-[20rem] h-auto z-10 ">
      <div className='flex flex-col items-center py-4'>
        
        <h1 className='text-white text-4xl'>
          ADMIN PANEL
        </h1>
        
      </div>
      <div className='px-10 '>
        <ul className="flex flex-col gap-14 text-white py-16 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-sans font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                handleToggle();
              } }
            >
              <Link href={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

      </div>

    </div>
     {/* Mobile NAV */}
    <div className='sm:hidden w-full bg-gray-800 h-12'>
    <div className="sm:hidden flex flex-1 justify-start items-center py-2">
        <img
          src={isOpen ? "close.svg" : "menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer mx-4"
          onClick={handleToggle} />

        <div
          className={`${!isOpen ? "hidden" : "flex"} p-6 bg-gray-900 absolute top-20 right-30 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-sans font-medium cursor-pointer  text-white text-[16px]`}
                onClick={() => {
                  handleToggle();
                } }
              >
                <Link href={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-0.5'>

<h1 className='text-white text-2xl font-bold'>ADMIN PANEL</h1>
</div>
      </div>
     
      </div></>
  )
}

export default Navbar