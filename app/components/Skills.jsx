'use client';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Vue.js', level: 85, icon: '💚' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '🔧' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Figma', level: 85, icon: '🎯' },
      ]
    }
  ];

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const animated = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            animated[skill.name] = skill.level;
          });
        });
        setAnimatedSkills(animated);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 ${
                  inView ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text font-poppins text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-bold gradient-text">
                          {animatedSkills[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: `${animatedSkills[skill.name] || 0}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text font-poppins">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                '⚛️', '📘', '🟢', '🐍', '🎨', '🐘', '🍃', '🔧', 
                '🐳', '☁️', '🎯', '📱', '🚀', '⚡', '🔥', '💎'
              ].map((icon, index) => (
                <div
                  key={index}
                  className={`glass w-16 h-16 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 animate-float ${
                    inView ? 'animate-fade-in' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: `${3 + (index % 3)}s`
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;