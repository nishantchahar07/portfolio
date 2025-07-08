
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
return (
    <nav className="w-full flex justify-between items-center py-4 px-5 lg:px-8 xl:px-[8%] fixed top-0 z-50 bg-white/80 backdrop-blur shadow-md transition-all duration-300">
        <a href="#top" className="flex items-center">
            <Image
                src={assets.logo}
                alt="logo"
                className="cursor-pointer mr-14 w-28 hover:scale-105 transition-transform duration-300"
            />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-100/70 shadow-sm backdrop-blur-md">
            <li>
                <a href="#top" className="font-medium text-gray-700 hover:text-primary transition-colors duration-200">Home</a>
            </li>
            <li>
                <a href="#about" className="font-medium text-gray-700 hover:text-primary transition-colors duration-200">About me</a>
            </li>
            <li>
                <a href="#Services" className="font-medium text-gray-700 hover:text-primary transition-colors duration-200">Services</a>
            </li>
            <li>
                <a href="#work" className="font-medium text-gray-700 hover:text-primary transition-colors duration-200">My Work</a>
            </li>
            <li>
                <a href="#contact" className="font-medium text-gray-700 hover:text-primary transition-colors duration-200">Contact me</a>
            </li>
        </ul>
        <div>
            <a
                href="#contact"
                className="flex items-center gap-2 bg-primary text-black px-6 py-2 rounded-lg shadow hover:bg-secondary transition-all duration-300"
            >
                <Image src={assets.arrow_icon} alt="" className="w-3" />
                Contact
            </a>
        </div>
    </nav>
)
}

export default Navbar
