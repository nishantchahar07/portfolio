import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center px-4 py-10 overflow-hidden relative">
    
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
      
        <div className="mb-6">
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="rounded-full w-36 h-36 border-4 border-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-2xl object-cover"
            priority
          />
        </div>

        <h3 className="flex items-end gap-2 text-2xl md:text-3xl mb-2 font-Ovo bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x font-semibold">
          Hi! I'm Nishant Chahar
          <Image src={assets.hand_icon} alt="Waving hand" className="w-7 animate-wave" />
        </h3>

        <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-Ovo font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
          FullStack Developer
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mt-3 mb-6 animate-fade-in-up max-w-xl">
          I build beautiful, performant web experiences with modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#contact"
            className="px-8 py-3 border-none rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
          </a>
          <a
            href="/nishant-resume.pdf"
            download
            className="px-8 py-3 border rounded-full border-gray-300 bg-white text-gray-800 font-semibold flex items-center gap-2 shadow hover:bg-gray-50 hover:scale-105 transition-transform duration-200"
          >
            My CV
            <Image src={assets.download_icon} alt="Download" className="w-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 3s ease infinite;
        }
        .animate-wave {
          display: inline-block;
          animation: wave 1.2s infinite;
          transform-origin: 70% 70%;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientX {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes wave {
          0%,
          60%,
          100% {
            transform: rotate(0deg);
          }
          10%,
          30% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }
      `}</style>
    </section>
  )
}

export default Header
