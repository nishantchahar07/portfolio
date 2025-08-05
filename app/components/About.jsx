import { assets,  toolsData } from '@/assets/assets'
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
          <div className="relative group w-64 sm:w-80 rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 animate-slide-in-left flex flex-col items-center">
            <Image
              src={assets.user_image}
              alt="user image"
              className="w-full h-full object-cover rounded-3xl group-hover:blur-[1px] transition-all duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          </div>

          <div className="flex-1 animate-slide-in-right">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-purple-200 transition-transform duration-300 hover:scale-[1.02]">
              <div className="space-y-4">
                <p className="text-gray-800 text-lg leading-8 font-semibold mb-2 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  Hey! I'm <span className="font-bold text-purple-700">Nishant Chahar</span> — a Full Stack Developer & founder of <span className="font-semibold text-blue-700">Revoluxx</span>.
                </p>
                <p className="text-gray-700 text-base leading-7 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  I specialize in building beautiful, fast, and scalable web apps using <span className="font-semibold text-blue-600">Java</span>, <span className="font-semibold text-blue-600">Python</span>, <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">Next.js</span>, <span className="font-semibold text-blue-600">Tailwind</span>, <span className="font-semibold text-blue-600">Prisma</span>, <span className="font-semibold text-blue-600">PostgreSQL</span>, and <span className="font-semibold text-blue-600">TypeScript</span>.
                </p>
                <p className="text-gray-700 text-base leading-7 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  From pixel-perfect UI to robust backend systems, I love crafting experiences that blend performance with design.
                </p>
                <p className="text-gray-700 text-base leading-7 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  I’ve contributed to several client-based projects, sharpening my problem-solving and teamwork skills in real-world environments.
                </p>
                <p className="text-gray-700 text-base leading-7 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                  My own projects include  <span className="font-semibold text-purple-700">Codeshala</span>, <span className="font-semibold text-purple-700">Dhatri</span>,  <span className="font-semibold text-purple-700">BaatChat</span> , <span className="font-semibold text-purple-700">Sublite</span> , and <span className="font-semibold text-purple-700">Auth_Junction</span>.
                </p>
                <p className="text-gray-700 text-base leading-7 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                  Currently, I'm building <span className="font-semibold text-blue-700">Revoluxx</span> and collaborating with startups to craft meaningful digital products.
                </p>
                <p className="text-gray-700 text-base leading-7 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                  Whether it's client work or experimenting with new tech, I aim to deliver elegant, efficient, and user-first solutions.
                </p>
                <p className="text-gray-700 text-base leading-7 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                  Currently exploring <span className="font-semibold text-purple-700">UI/UX design</span> to level up product storytelling and interface aesthetics.
                </p>
                <p className="text-purple-800 text-lg font-semibold mt-6 italic animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
                  Let’s create something impactful together.
                </p>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Tools I Use
                </h4>
                <ul className="flex flex-wrap gap-4 items-center">
                  {toolsData.map((tool, index) => (
                    <li
                      key={index}
                      className="bg-purple-50 rounded-xl shadow px-3 py-2 flex items-center gap-2 hover:bg-purple-100 transition-colors animate-fade-in"
                      style={{ animationDelay: `${1.1 + index * 0.07}s`, animationFillMode: 'both' }}
                    >
                      <Image src={tool} alt="Tool" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Video Section - Footer */}
        <div className="max-w-2xl mx-auto mt-16 mb-2 w-full animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <div className="bg-white/90 rounded-3xl shadow-2xl p-6 border border-purple-200 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">Portfolio Overview</h3>
            <video
              className="rounded-2xl w-full h-64 object-cover shadow-lg border border-purple-200"
              controls
              poster="/portfolio-video-poster.jpg"
              style={{ background: "#f3e8ff" }}
            >
              <source src="/portfolio-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center text-sm text-gray-600 mt-3">Watch my portfolio video for a quick overview of my work and skills.</p>
          </div>
        </div>
      </div>

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
