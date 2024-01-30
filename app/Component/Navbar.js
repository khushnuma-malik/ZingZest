"use client"
import React, { useInsertionEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRe } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
  const toggleCart = () => {

    if (ref.current && ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');

    } else if (ref.current && ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  }
  const ref = useRef()
  return (

      <div className=' flex flex-col md:flex-row md:justify-start justify-between items-center  py-2 shadow-xl'>
        <div className='logo mx-5'>
          <Link href={'/'}><h1 className=' text-rose-950 font-bold'> ZingyZest</h1></Link>
        </div>
    
        <div className=''>
          <ul className='flex items-center space-x-2 font-bold md:text-md '>
            <Link href='/Tshirt'><li>T-shirt</li></Link>
            <Link href='/Hoodies'><li>Hoodies</li></Link>
            <Link href='/Stickers'><li>Stickers</li></Link>
            <Link href='/Mugs'><li>Mugs</li></Link>
          </ul>
        </div>
        <div onClick={toggleCart} className=' cursor-pointer cart absolute right-0 top-4 mx-5'>
          <FaCartArrowDown className=' text-xl md:text-2xl' />

        </div>

        <div ref={ref} className='w-72 h-full  sidebar absolute top-0 right-0 bg-pink-200 px-8 py-10 transition-transform translate-x-full'>
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><IoCloseCircle /> </span>
          <ol className='list-decimal font-semibold' >
            <li>
              <div className='flex my-3'>
                <div className='w-2/3 font-semibold'>Tshirt</div>
                <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><FaCircleMinus className='curser-pointer bg-white text-pink-500 text-sm' /> <span className='mx-2'>1 </span><FaCirclePlus className='curser-pointer  bg-white text-pink-500 text-sm' /> </div>
              </div>
            </li>

            <li>
              <div className='flex my-3'>
                <div className='w-2/3 font-semibold'>Hoodies</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'> <FaCircleMinus className='curser-pointer bg-white text-pink-500 text-sm' /> <span className='mx-2'>1 </span><FaCirclePlus className='curser-pointer  bg-white text-pink-500 text-sm' /> </div>
              </div>
            </li>

            <li>
              <div className='flex my-3'>
                <div className='w-2/3 font-semibold'>Stickers</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'><FaCircleMinus className='curser-pointer bg-white text-pink-500 text-sm' /> <span className='mx-2'>1 </span><FaCirclePlus className='curser-pointer  bg-white text-pink-500 text-sm' /> </div>
              </div>
            </li>


            <li>
              <div className='flex my-3'>
                <div className='w-2/3 font-semibold'>Mugs</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'><FaCircleMinus className='curser-pointer bg-white text-pink-500 text-sm' /> <span className='mx-2'>1 </span><FaCirclePlus className='curser-pointer  bg-white text-pink-500 text-sm' /> </div>
              </div>
            </li>
          </ol>
          <div className='flex'>
            <button class="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><IoBagCheckOutline className='m-1' />
              Checkout</button>
            <button class="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
              Clear Cart</button>
          </div>

        </div>
        </div>

    

  )
}

export default Navbar
