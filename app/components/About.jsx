import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-[8%] py-16 bg-gradient-to-br from-white via-blue-50 to-purple-100 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <h4 className="text-center mb-2 text-lg font-Ovo text-blue-700 tracking-widest uppercase animate-fade-in-down">
          Introduction
        </h4>
        <h2 className="text-center text-5xl font-Ovo font-bold text-purple-900 drop-shadow-lg mb-10 animate-fade-in-up">
          About Me
        </h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-24 my-12">
          {/* Left Image Section */}
          <div className="relative group w-64 sm:w-80 rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 animate-slide-in-left">
            <Image
              src={assets.user_image}
              alt="user image"
              className="w-full h-full object-cover rounded-3xl group-hover:blur-[1px] transition-all duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          </div>

          {/* Right Text Section */}
          <div className="flex-1 animate-slide-in-right">
            <div className="bg-white/80 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-purple-100">
              <p className="text-gray-800 text-lg leading-8 font-medium mb-4 transition-opacity duration-700 delay-100 animate-fade-in">
                Hey! I'm <span className="font-bold text-purple-700">Nishant Chahar</span> — a Full Stack Developer and founder of <span className="font-semibold text-blue-700">Revoluxx</span>, a creative development agency.
              </p>
              <p className="text-gray-700 text-base leading-7 mb-3 transition-opacity duration-700 delay-200 animate-fade-in">
                I specialize in building beautiful, fast, and scalable web applications using modern tools like <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">Next.js</span>, <span className="font-semibold text-blue-600">Tailwind</span>, <span className="font-semibold text-blue-600">Prisma</span>, and <span className="font-semibold text-blue-600">TypeScript</span>.
              </p>
              <p className="text-gray-700 text-base leading-7 mb-3 transition-opacity duration-700 delay-300 animate-fade-in">
                From pixel-perfect UI to robust backend systems, I love crafting experiences that blend performance with design. My work is powered by clean code, eye-catching animations, and real-world problem solving.
              </p>
              <p className="text-gray-700 text-base leading-7 mb-3 transition-opacity duration-700 delay-400 animate-fade-in">
                Whether it's building client projects with my team or experimenting with new tech stacks, I aim to deliver work that’s elegant, efficient, and user-first.
              </p>
              <p className="text-gray-700 text-base leading-7 mb-3 transition-opacity duration-700 delay-500 animate-fade-in">
                Currently exploring the world of <span className="font-semibold text-purple-700">UI/UX design</span> to level up product storytelling and interface aesthetics.
              </p>
              <p className="text-purple-800 text-lg font-semibold mt-6 italic transition-opacity duration-700 delay-600 animate-fade-in">
                Let’s create something impactful together.
              </p>

             
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s ease forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease forwards;
        }
      `}</style>
    </section>
  )
}

export default About
