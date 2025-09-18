'use client';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Working with John was a game-changer for our startup. He built our MVP from scratch and helped us launch successfully. Highly recommended!',
      rating: 5,
      project: 'SaaS MVP Development'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, CreativeAgency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'The website John created for us is not only beautiful but also performs incredibly well. Our conversion rates increased by 40% after the launch.',
      rating: 5,
      project: 'Corporate Website'
    },
    {
      name: 'David Park',
      role: 'Founder, FitnessTech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'John\'s expertise in both frontend and backend development made him the perfect choice for our fitness app. The result speaks for itself.',
      rating: 5,
      project: 'Mobile Fitness App'
    },
    {
      name: 'Lisa Thompson',
      role: 'CTO, DataFlow Solutions',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      content: 'Professional, reliable, and incredibly skilled. John transformed our complex requirements into an elegant, scalable solution.',
      rating: 5,
      project: 'Analytics Dashboard'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Testimonials from satisfied clients who trusted me with their projects
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-400 opacity-20" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 glow-blue"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    <div>
                      <div className="font-bold text-xl gradient-text font-poppins">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm text-blue-400 mt-1">
                        Project: {testimonials[currentIndex].project}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="glass p-3 rounded-full hover:scale-110 transition-all duration-300 glow-blue"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-blue-400" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-400 scale-125'
                        : 'bg-gray-400 hover:bg-blue-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="glass p-3 rounded-full hover:scale-110 transition-all duration-300 glow-blue"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;