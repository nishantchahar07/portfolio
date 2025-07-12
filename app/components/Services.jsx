import React from 'react'

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] relative overflow-hidden"
    >

      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-indigo-200 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

      <h4 className="text-center mb-2 text-lg font-Ovo text-indigo-600 tracking-widest animate-fade-in-down">
        What I Offer
      </h4>
      <h2 className="text-center text-5xl font-Ovo font-bold text-gray-900 mb-4 animate-fade-in-down delay-100">
        My Services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 animate-fade-in-up delay-200">
        I provide a wide range of web development services to help your business grow and stand out online.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {[
          {
            icon: "🖥️",
            title: "Custom Website Development",
            desc: "Fast, responsive and fully functional websites built using React, Next.js, and modern technologies.",
          },
          {
            icon: "🛒",
            title: "E-commerce Solutions",
            desc: "Complete e-commerce setup with product management, payment integration, and admin dashboard.",
          },
          {
            icon: "⚙️",
            title: "Full-Stack Web Applications",
            desc: "From frontend to backend, I build complete web apps using Node.js, Express, MongoDB, and Prisma.",
          },
          {
            icon: "🎨",
            title: "UI/UX Design to Code",
            desc: "Convert your Figma or design files into pixel-perfect, responsive web pages.",
          },
          {
            icon: "📈",
            title: "Landing Pages for Marketing",
            desc: "High-converting, SEO-optimized landing pages to boost your business leads.",
          },
          {
            icon: "🌐",
            title: "Website Redesign / Optimization",
            desc: "Improve loading speed, design, and UX of your existing site for better user engagement.",
          },
          {
            icon: "🔐",
            title: "Authentication & Admin Panels",
            desc: "Secure login systems, user management, and custom admin dashboards using JWT, bcrypt, and Prisma.",
          },
          {
            icon: "☁️",
            title: "Cloud Integration & File Uploads",
            desc: "File/image uploading systems integrated with Cloudinary or AWS.",
          },
        ].map((service, idx) => (
          <div
            key={service.title}
            className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up`}
            style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
          >
            <div className="text-4xl mb-4 animate-bounce">{service.icon}</div>
            <h3 className="font-bold text-xl mb-2 text-indigo-700 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.7s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s both;
        }
      `}</style>
    </div>
    
  )
}

export default Services
