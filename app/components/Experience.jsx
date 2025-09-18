'use client';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved system performance by 40%.',
      achievements: [
        'Architected and built 5+ production applications',
        'Mentored junior developers and conducted code reviews',
        'Reduced deployment time by 60% through CI/CD optimization'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Developed MVP for fintech startup from concept to launch. Built responsive web applications using React, Node.js, and PostgreSQL.',
      achievements: [
        'Built complete product from scratch in 6 months',
        'Implemented secure payment processing with Stripe',
        'Achieved 99.9% uptime with robust error handling'
      ]
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2020 - 2021',
      description: 'Created pixel-perfect, responsive websites for clients across various industries. Collaborated with designers and backend developers.',
      achievements: [
        'Delivered 20+ client projects on time and budget',
        'Improved website loading speeds by 50% on average',
        'Implemented modern CSS animations and interactions'
      ]
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      location: 'California, USA',
      period: '2016 - 2020',
      description: 'Graduated Magna Cum Laude with focus on Software Engineering and Web Development.',
      achievements: [
        'GPA: 3.8/4.0',
        'President of Computer Science Club',
        'Winner of Annual Hackathon 2019'
      ]
    },
    {
      type: 'education',
      title: 'Full Stack Web Development Bootcamp',
      company: 'CodeAcademy Pro',
      location: 'Online',
      period: '2020',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.',
      achievements: [
        'Top 5% of graduating class',
        'Built 10+ full-stack applications',
        'Specialized in React and Node.js'
      ]
    }
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[0]);
    const yearB = parseInt(b.period.split(' - ')[0]);
    return yearB - yearA;
  });

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
              Experience & Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey and educational background
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

            <div className="space-y-12">
              {allItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${inView ? 'animate-fade-in' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        {item.type === 'work' ? (
                          <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                        )}
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.period}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 gradient-text font-poppins">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center mb-3 text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">{item.company}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-2/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;