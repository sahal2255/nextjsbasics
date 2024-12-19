"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../public/mylogo.png';
import Link from 'next/link';
import { FcMenu } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleNavView = () => {
        setShowNav(!showNav);
    };

    return (
        <div className='fixed w-full h-24 shadow-xl bg-black z-50'>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <div>
                    <Link href='/'>
                        <Image 
                            src={Logo}
                            width='205'
                            height='75'
                            alt='mylogo'
                            priority
                        />
                    </Link>
                </div>
                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        <Link href='/product'>
                            <li className='text-white ml-10 uppercase text-xl hover:border-b'>Products</li>
                        </Link>
                        <Link href='/about'>
                            <li className='text-white ml-10 uppercase text-xl hover:border-b'>About Us</li>
                        </Link>
                        <Link href='/services'>
                            <li className='text-white ml-10 uppercase text-xl hover:border-b'>Services</li>
                        </Link>
                        <Link href='/contact'>
                            <li className='text-white ml-10 uppercase text-xl hover:border-b'>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                <div className='sm:hidden' onClick={handleNavView}>
                    <FcMenu className='text-white text-3xl cursor-pointer' />
                </div>
            </div>

            {/* Offcanvas Menu */}
            <div
                className={`fixed top-0 right-0 w-3/4 sm:hidden h-full bg-black text-white transform ${
                    showNav ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 z-50`}
            >
                <div className='flex justify-between items-center px-4 py-6'>
                    <Link href='/'>
                        <Image
                            src={Logo}
                            width='150'
                            height='50'
                            alt='mylogo'
                            priority
                        />
                    </Link>
                    <AiOutlineClose
                        className='text-3xl cursor-pointer'
                        onClick={handleNavView}
                    />
                </div>
                <ul className='flex flex-col items-center space-y-6 mt-10 overflow-y- h-[calc(100vh-72px)] px-4auto'>
                    <Link href='/product' onClick={handleNavView}>
                        <li className='text-xl uppercase hover:text-gray-400'>Products</li>
                    </Link>
                    <Link href='/about' onClick={handleNavView}>
                        <li className='text-xl uppercase hover:text-gray-400'>About Us</li>
                    </Link>
                    <Link href='/services' onClick={handleNavView}>
                        <li className='text-xl uppercase hover:text-gray-400'>Services</li>
                    </Link>
                    <Link href='/contact' onClick={handleNavView}>
                        <li className='text-xl uppercase hover:text-gray-400'>Contact Us</li>
                    </Link>
                </ul>
            </div>

            {/* Overlay */}
            {showNav && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-50 z-40'
                    onClick={handleNavView}
                ></div>
            )}
        </div>
    );
};

export default Navbar;
