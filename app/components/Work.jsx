'use client'

import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [showAll, setShowAll] = React.useState(false);

    const VISIBLE_COUNT = 3;
    const displayedProjects = showAll ? workData : workData.slice(0, VISIBLE_COUNT);

    return (
        <section
            id="work"
            className="w-full px-[8%] py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-100 scroll-mt-20"
        >
            <h4 className="text-center mb-2 text-lg font-Ovo text-indigo-600 tracking-widest animate-fade-in-down">
                My Portfolio
            </h4>
            <h2 className="text-center text-5xl font-Ovo font-bold text-gray-900 mb-4 animate-fade-in-down delay-100">
                My Latest Work
            </h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 animate-fade-in-up delay-200">
                Welcome to my portfolio! Here, you can explore a selection of my recent projects that showcase my skills in web development. Each project reflects my commitment to quality and innovation. Feel free to reach out if you have any questions or would like to collaborate!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up delay-300">
                {displayedProjects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative rounded-3xl shadow-xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300"
                        style={{
                            background: `linear-gradient(135deg, ${project.bgColor} 60%, #fff0 100%)`,
                        }}
                    >
                        <div className="p-8 flex flex-col h-full">
                            <h3 className="text-2xl font-bold font-Ovo text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-6 font-Ovo">{project.description}</p>
                            <div className="mt-auto flex items-center gap-3">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center px-5 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-slate-900 to-gray-800 text-white hover:from-slate-800 hover:to-gray-700 hover:border-indigo-400 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-200 ${
                                        activeIndex === index ? 'scale-105 ring-2 ring-indigo-300' : ''
                                    }`}
                                    onClick={() => setActiveIndex(index)}
                                    style={{ boxShadow: '0 4px 20px 0 rgba(99,102,241,0.15)' }}
                                >
                                    <span className="mr-2">View Project</span>
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                                        <Image
                                            src={assets.send_icon}
                                            alt="Open"
                                            className="w-5 h-5 animate-bounce"
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                        {project.bgImage && (
                            <div className="absolute right-4 bottom-4 w-24 h-24 opacity-80 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={project.bgImage}
                                    alt={project.title}
                                    fill
                                    className="object-contain rounded-xl shadow-lg"
                                />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>

            {workData.length > VISIBLE_COUNT && (
                <div className="flex justify-center mt-16">
                    <button
                        type="button"
                        onClick={() => setShowAll((prev) => !prev)}
                        className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-slate-900 to-gray-800 text-white font-semibold text-base shadow-lg border-2 border-transparent hover:from-slate-800 hover:to-gray-700 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 group"
                        style={{ boxShadow: '0 3px 16px 0 rgba(99,102,241,0.15)' }}
                    >
                        <span className="transition-all duration-200 group-hover:scale-105">
                            {showAll ? 'Show Less' : 'Show More'}
                        </span>
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                            <Image
                                src={showAll ? (assets.up_arrow_bold || assets.right_arrow_bold) : assets.right_arrow_bold}
                                alt={showAll ? "Up arrow" : "Right arrow"}
                                className="w-4 h-4"
                            />
                        </span>
                        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                    </button>
                </div>
            )}
        </section>
    )
}

export default Work
