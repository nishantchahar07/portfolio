
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const [isDark, setIsDark] = useState(false);

useEffect(() => {
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}, [isDark]);

return (
    <nav className="w-full flex justify-between items-center py-4 px-6 lg:px-12 xl:px-[10%] fixed top-0 z-50 bg-gradient-to-r from-white/70 via-white/20 to-blue-100/60 backdrop-blur-lg shadow-lg transition-all duration-400">
        <a href="#top" className="flex items-center group">
            <Image
                src={assets.logo}
                alt="logo"
                className="cursor-pointer mr-10 w-15 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                priority
            />
        </a>
        <ul className="hidden md:flex items-center gap-8 lg:gap-12 rounded-full px-14 py-3 bg-white/80 shadow-md backdrop-blur-xl border border-blue-100">
            <li>
                <a href="#top" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
            </li>
            <li>
                <a href="#about" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
            </li>
            <li>
                <a href="#services" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
            </li>
            <li>
                <a href="#work" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">Work</a>
            </li>
            <li>
                <a href="#contact" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </li>
        </ul>
        <div className="flex items-center gap-4">
            <button
                className="p-2 rounded-full bg-white/80 hover:bg-blue-100 transition-colors duration-200 shadow"
                aria-label="Toggle theme"
                onClick={() => setIsDark(!isDark)}
            >
                <Image
                    src={isDark ? assets.sun_icon : assets.moon_icon}
                    alt="Toggle theme"
                    className="w-6"
                />
            </button>
            <a
                href="#contact"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white px-7 py-2 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-400 transition-all duration-300 font-semibold"
            >
                <Image src={assets.arrow_icon} alt="Contact" className="w-4" />
                Contact
            </a>
            <button
                className="block md:hidden ml-3 p-2 rounded-full bg-white/80 hover:bg-blue-100 transition-colors duration-200 shadow"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
            >
                <Image src={assets.menu_black} alt="menu-button" className="w-6" />
            </button>
        </div>
        {/* Mobile menu */}
        <ul
            className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 shadow-2xl z-50 transition-transform duration-500 ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <button
                className="absolute top-6 right-6 p-2 rounded-full bg-white/80 hover:bg-blue-100 transition-colors duration-200 shadow"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M6 18L18 6" />
                </svg>
            </button>
            <li>
                <a
                    href="#top"
                    className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="#about"
                    className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </a>
            </li>
            <li>
                <a
                    href="#services"
                    className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                >
                    Services
                </a>
            </li>
            <li>
                <a
                    href="#work"
                    className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                >
                    Work
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </a>
            </li>
        </ul>
        {/* Overlay for mobile menu */}
        {menuOpen && (
            <div
                className="fixed inset-0 bg-black/30 z-40 md:hidden"
                onClick={() => setMenuOpen(false)}
            />
        )}
    </nav>
)
}

export default Navbar
