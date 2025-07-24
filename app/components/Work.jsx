import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    const [activeIndex, setActiveIndex] = React.useState(null);

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
                {workData.map((project, index) => (
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
                                    className={`inline-flex items-center px-4 py-2 rounded-full font-semibold shadow-lg transition-colors duration-300 ${
                                        activeIndex === index
                                            ? 'bg-indigo-800 text-white'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                    }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    View Project
                                    <Image
                                        src={assets.send_icon}
                                        alt="Open"
                                        className="ml-2 w-5 h-5 animate-bounce"
                                    />
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

            <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-600 px-10 py-3 rounded-full my-20 mx-auto hover:bg-gray-200 transition-colors duration-500">
                show more
                <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-5 h-5" />
            </a>
        </section>
    )
}

export default Work
