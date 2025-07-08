'use client'
import React from 'react'

export default function Services() {
  return (
    <section
      className="shadow-2xl/100  bg-gradient-to-r from-[#2b5876] to-[#6713d2]  text-white py-16 px-4 rounded-4xl lg:m-20 sm:mb-10 service-sec sm:px-6 lg:px-20"
      id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-center lg:text-6xl service-head ">What I Can <span
          className="text-green-600 font-bold">Do
          for</span> You.. </h1>
        <p className="text-gray-400 mb-12">Helping clients bring their ideas to life with clean and scalable
          code.</p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* <!-- Service 1 --> */}
          <div
            className="bg-gray-800 rounded-2xl p-6 shadow-lg/50 shadow-white hover:scale-105 transition transform duration-300">
            <div className="text-indigo-400 text-4xl mb-4">
              💻
            </div> 
            <h3 className="text-xl font-semibold mb-2">Custom Web Development</h3>
            <p className="text-gray-400 text-sm">Building fully responsive websites using React,
              Node.js, and Tailwind CSS tailored to your business needs.</p>
          </div>

          {/* <!-- Service 2 --> */}
          <div
            className="bg-gray-800 rounded-2xl p-6 shadow-lg/50 shadow-white hover:scale-105 transition transform duration-300">
            <div className="text-indigo-400 text-4xl mb-4">
              ⚙️
            </div>
            <h3 className="text-xl font-semibold mb-2">API Integration & Backend</h3>
            <p className="text-gray-400 text-sm">RESTful API setup, database design with MongoDB, and
              secure backend architecture using Express.js.</p>
          </div>

          {/* <!-- Service 3 --> */}
          <div
            className="bg-gray-800 rounded-2xl p-6 shadow-lg/50 shadow-white hover:scale-105 transition transform duration-300">
            <div className="text-indigo-400 text-4xl mb-4">
              🚀
            </div>
            <h3 className="text-xl font-semibold mb-2">React.js / Bootstarp</h3>
            <p className="text-gray-400 text-sm">Built a responsive Services section using React components
              and Bootstrap classes to showcase offerings with clean design and smooth layout.</p>
          </div>

          {/* <!-- Service 4 --> */}
          <div
            className="bg-gray-800 rounded-2xl p-6 shadow-lg/50 shadow-white hover:scale-105 transition transform duration-300">
            <div className="text-indigo-400 text-4xl mb-4">
              🌐
            </div>
            <h3 className="text-xl font-semibold mb-2">Bug Fixes / Code Review</h3>
            <p className="text-gray-400 text-sm">Identify and resolve code issues for smooth functionality
              with thorough bug fixing and clean code reviews</p>
          </div>

          {/* <!-- Service 5 --> */}
          <div
            className="bg-gray-800 rounded-2xl p-6 shadow-lg/50 shadow-white hover:scale-105 transition transform duration-300">
            <div className="text-indigo-400 text-4xl mb-4">
              👨‍💻
            </div>
            <h3 className="text-xl font-semibold mb-2">UI Design with Tailwind</h3>
            <p className="text-gray-400 text-sm">Crafted a modern, responsive Services section using
              Tailwind CSS, with clean cards, hover effects, and clear iconography for enhanced UI/UX.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
