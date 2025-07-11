"use client"
import React, { useState } from "react"
import { Mail } from "lucide-react"
import { assets } from "@/assets/assets"
import Image from "next/image"

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
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
      <div className="max-w-3xl mx-auto rounded-3xl shadow-2xl bg-white/80 backdrop-blur-xl p-10 border border-indigo-100 transition hover:shadow-indigo-200">
        {/* HEADINGS */}
        <h4 className="text-center mb-2 text-sm font-semibold text-indigo-500 tracking-widest uppercase animate-fade-in-down">
          Contact With Me
        </h4>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-down delay-100">
          Let’s work together
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 animate-fade-in-up delay-200">
          Want to build something amazing? Let’s talk! Whether you have an idea,
          a project, or just want to say hi, drop a message and I’ll get back to you soon.
        </p>

        {/* FORM */}
        <form className="space-y-6 animate-fade-in-up delay-300">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-5 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 bg-white/90 shadow-sm transition-all hover:shadow-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-5 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 bg-white/90 shadow-sm transition-all hover:shadow-md"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 bg-white/90 shadow-sm transition-all hover:shadow-md"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 bg-[#1f2937] hover:bg-[#374151]  text-white font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
             Send Message <Image src={assets.right_arrow_white} alt="Right arrow" 
             />
            </button>
          </div>
        </form>

       
        <div className="mt-10 flex justify-center gap-6 animate-fade-in-up delay-400">
          <a
            href="mailto:your.email@example.com"
            className="text-indigo-600 hover:text-indigo-800 transition"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition"
            aria-label="LinkedIn"
          >
          
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.554v-11.5h3.414v1.569h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.325zm-16.451-13.452c-1.144 0-2.072-.928-2.072-2.072 0-1.143.928-2.071 2.072-2.071s2.072.928 2.072 2.071c0 1.144-.928 2.072-2.072 2.072zm1.777 13.452h-3.554v-11.5h3.554v11.5zm18.223-20h-20c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
