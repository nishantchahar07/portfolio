"use client"
import React, { useState } from "react"
import { assets } from "@/assets/assets"
import Image from "next/image"

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(result);
    const formData = new FormData(event.target);

    formData.append("access_key", "7a50ef2c-4dbf-412f-96aa-85ad4ed41f59");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section
      id="contact"
      className="w-full px-6 md:px-[12%] py-20 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto rounded-3xl shadow-2xl bg-white/80 backdrop-blur-xl p-10 border border-indigo-100 transition hover:shadow-indigo-200 animate__animated animate__fadeInUp">
       
        <h4 className="text-center mb-2 text-sm font-semibold text-indigo-500 tracking-widest uppercase animate__animated animate__fadeInDown">
          Contact With Me
        </h4>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate__animated animate__fadeInDown animate__delay-1s">
          Get In Touch
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 animate__animated animate__fadeInUp animate__delay-2s">
          Want to build something amazing? Let’s talk! Whether you have an idea,
          a project, or just want to say hi, drop a message and I’ll get back to you soon.
        </p>

        <form onSubmit={onSubmit} className="space-y-6 animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-5 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 bg-white/90 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-5 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 bg-white/90 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300"
              required
              name="email"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 bg-white/90 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300"
            required
            name="message"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex items-center gap-2"
            >
              <span className="animate__animated animate__pulse animate__infinite">Send Message</span>
              <Image src={assets.right_arrow_white} alt="Right arrow" width={24} height={24} />
            </button>
          </div>
          {result && (
            <div className="text-center mt-4 text-green-600 animate__animated animate__fadeIn">
              {result}
            </div>
          )}
        </form>

        
      <div className="mt-10 flex justify-center gap-6 animate__animated animate__fadeInUp animate__delay-4s">
  
  <a
    href="mailto:nishantchahar20@gmail.com"
    className="transition transform hover:scale-125 duration-300"
    aria-label="Email"
  >
    <Image
      src='/gmail.png'
      alt="Gmail"
      width={32}
      height={32}
    />
  </a>
  <a
    href="http://linkedin.com/in/nishant-chahar-a0b505290"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-125 duration-300"
    aria-label="LinkedIn"
  >
    <Image
      src='/linkedin.png'
      alt="LinkedIn"
      width={32}
      height={32}
    />
  </a>


  <a
    href="https://www.instagram.com/nishantchahar07/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-125 duration-300"
    aria-label="Instagram"
  >
     <Image
      src='/instagram.png'
      alt="instagram"
      width={32}
      height={32}
    />
  </a>
  <a
    href="https://github.com/nishantchahar07"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-125 duration-300"
    aria-label="github"
  >
    <Image
      src='/github-logo.png'
      alt="github"
      width={32}
      height={32}
    />
  </a>
</div>

      </div>
    </section>
  )
}

export default Contact
