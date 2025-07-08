'use client';
import React from 'react';
import pro from './images/pro.jpg'; // Make sure this path is valid (e.g., public/images/pro.png if in public folder)
import { Link } from 'react-router-dom';
import cv from './images/Cv.pdf'


export default function About() {
  return (
    <section
      id="about-section"
      className="about-sec rounded-4xl shadow-2xl/100 lg:mx-20 my-20 bg-gradient-to-r from-[#243949] to-[#517fa4] lg:p-10 md:p-10 opacity-100 translate-y-0 transition-all duration-1000" >
      <div id="about">
        <h1 className="text-white text-center md:text-7xl lg:text-7xl">
          About <span className="text-green-600 about">MySelf</span>..
        </h1>

        <div className="mt-20 lg:flex justify-around lg:p-10">
          <div className="border border-gray-500 w-2xs h-[445px] ml-4 p-3">
            <img src={pro} alt="profile" className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="text-white mt-20 lg:w-[500px]  lg:tracking-widest p-5">
            <h1 className="mb-5 about text-4xl">
              Hello, I am <span className="text-green-600 name">Puneet</span>
            </h1>

            <p class="bio">a passionate MERN Stack Developer from Jalandhar Cantt, Punjab. I am a MERN
              Stack
              Developer with
              expertise
              in both front-end and back-end development. I specialize in JavaScript, Tailwind CSS,
              React.js,
              Next.js, Bootstrap, and jQuery.
              I have developed multiple projects and web applications, including more than 10 mini
              projects
              and 5
              real-time database projects using Firebase.

              My focus is on building responsive, user-friendly, and efficient web solutions. In
              addition
              to
              web
              development, I also have training in hardware, which enhances my understanding of
              system-level
              optimizations.

              I am passionate about coding and always eager to learn new technologies. I am currently
              seeking
              opportunities to apply my skills in a professional setting.
            </p>
          </div>
        </div>

        <a href={cv} download>
          <button
            type="button"
            className="py-2.5 px-5 lg:ml-[50%] btn me-2 mb-2 text-sm font-medium text-gray-900 rounded-full border border-green-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 cursor-pointer"
          >
            Download CV
          </button>
        </a>

        <div className="flex justify-between lg:ml-50 lg:w-[370px] font-light font-sans p-5 bio text-white">
          <ul className="leading-10">
            <li>Name :</li>
            <li>Age :</li>
            <li>Address :</li>
            <li>Phone No :</li>
            <li>E-mail :</li>
            <li>Country :</li>
          </ul>
          <ul className="leading-10">
            <li>Puneet</li>
            <li>23</li>
            <li>Jalandhar Cantt, Punjab</li>
            <li>+91-7526889964</li>
            <li>puneetkohli1102@gmail.com</li>
            <li>India</li>
          </ul>
        </div> 
      </div>
    </section>
  );
}
