'use client';
import { useInView } from 'react-intersection-observer';
import { User, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '25+' },
    { icon: User, label: 'Years Experience', value: '3+' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover my journey, passion, and the skills that drive my work
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white opacity-50 font-poppins">JD</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-xl p-4">
                      <p className="text-white font-semibold">Full Stack Developer</p>
                      <p className="text-blue-200 text-sm">Passionate about creating amazing experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text font-poppins">My Story</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Full Stack Developer with over 3 years of experience in creating 
                  digital solutions that make a difference. My journey began with a curiosity about 
                  how things work on the web, and it has evolved into a deep love for crafting 
                  exceptional user experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I specialize in modern web technologies including React, Node.js, Python, and 
                  cloud platforms. I believe in writing clean, maintainable code and creating 
                  intuitive interfaces that users love to interact with.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="glass rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold gradient-text font-poppins">{value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;