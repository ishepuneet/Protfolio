'use client';
///////////////REACT ICONS/////////////////////
import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io5';
// import { LiaNode } from "react-icons/lia";




///////////////////IMAGES AND VIDEOS/////////////////////
import jquery from './images/jquery.png';
import boot from './images/boot.png';
import tail from './images/tailwind.png';
import react from './images/react.png';
import next from './images/next.png';
import video1 from './images/video1.mp4';

import video2 from './images/back-end.mp4'
import vite from './images/vite.png'
import node from './images/node.png'
import fire from './images/fire.png'
import mongo from './images/mongo.png'

import post from './images/post.png'
import vs from './images/code.png'
import thunder from './images/thunder.png'
import net from './images/net.png'
import figma from './images/figma.png'
import video3 from './images/tools.mp4'
import ver from './images/Ver.png'



export default function Skill() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal-on-scroll');
    const skills = document.querySelectorAll('.skill-box');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.2 });

    items.forEach((item) => observer.observe(item));

    skills.forEach((skill) => {
      const percentText = skill.querySelector('.skill-percent');
      const target = parseInt(percentText.getAttribute('data-percent'));
      let counted = false;

      const skillObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counted) {
          counted = true;
          let count = 0;
          const interval = setInterval(() => {
            if (count <= target) {
              percentText.textContent = count + '%';
              count++;
            } else {
              clearInterval(interval);
            }
          }, 15);
        }
      }, { threshold: 0.5 });

      skillObserver.observe(skill);
    });
  }, []);

  return (
    <section id="skills" className="lg:px-20  my-20">

      <div className="bg-[#137070] text-white lg:p-15  py-20 rounded-4xl shadow-2xl/100 skill-inner">
        <h1 className="text-center text-6xl mb-12 ">
          Tech Stack <span className="text-green-500">&</span> Skills..
        </h1>

        <div className="lg:flex lg:mt-20 lg:justify-around">
          {/* Skills Box */}
          <div className="lg:w-[480px] reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 lg:mt-20 p-5 front rounded-3xl">
            <h2 className="lg:text-4xl sm:text-3xl front-head reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Frontend Development 👨‍💻
            </h2>

            <ul className="lg:leading-10 mt-10 flex flex-wrap front-skills text-center gap-9 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              {/* Skill Item */}
              <li className="skill-box w-28 h-44 p-4 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <FaHtml5 className="text-red-600 text-[70px] mx-auto" />
                <p className="text-red-500 font-bold">HTML</p>
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 p-4 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <FaCss3Alt className="text-blue-600 text-[70px] mx-auto" />
                <p className="text-blue-600 font-bold">CSS</p>
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 p-4 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <IoLogoJavascript className="text-yellow-400 text-[70px] mx-auto" />
                <p className="text-yellow-500 font-bold">JavaScript</p>
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 py-5 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={jquery} alt="jQuery" className="object-contain mb-1" />
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 p-4 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={boot} alt="Bootstrap" className="object-contain mb-1" />
                <p className="text-[#7710f7] font-bold">Bootstrap</p>
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 py-2 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={tail} alt="Tailwind" className="object-contain -mb-2" />
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 p-5 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={react} alt="React" className="w-full h-14 object-contain mb-1" />
                <p className="text-[#10ecf7] font-bold">React.js</p>
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 p-5 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={next} alt="Next.js" className="w-full h-14 object-contain mb-1" />
                <p className="text-black font-bold">Next.js</p>
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 p-5 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={vite} alt="Next.js" className="w-full h-14 object-contain mb-1" />
                <p className="text-black font-bold">Vite</p>
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>
            </ul>

            <p className="mt-10 text-center text-lg">
              Responsive Design & UI/UX Implementation
            </p>
          </div>

          {/* Video Box */}
          <div className="border border-gray-400 p-5 my-10 mx-auto lg:h-[576px] rounded-lg overflow-hidden reveal-on-scroll opacity-0 translate-y-10 w-[300px]  transition-all duration-1000">
            <video
              src={video1}
              autoPlay
              loop
              muted
              width={300}
              className="rounded-lg object-cover"
            ></video>
          </div>
        </div>
      </div>

      <div className="my-20 bg-cyan-700  lg:p-15 py-20 rounded-4xl shadow-2xl/100">

        <div className="lg:flex lg:justify-around ">
          <div
            className="border border-gray-400 lg:h-[518px] p-5 video-tag rounded-lg overflow-hidden reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <video src={video2} loop autoPlay muted
              className="rounded-lg object-cover" width="300"></video>
          </div>


          <div
            className="text-white lg:w-[480px] lg:mt-20 p-5 front reveal-on-scroll opacity-0 translate-y-10 transition-all duration-3000">

            <h1
              className="text-4xl front-head reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Backend Development 🌐:
            </h1>

            <ul className="lg:leading-10 mt-10 flex flex-wrap front-skills gap-9 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              {/* Skill Item */}

              <li className="skill-box w-28 h-44 py-5 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={node} alt="node" className="object-contain -mb-2" />
                <p className="skill-percent text-lg text-gray-700" data-percent="60">0%</p>
              </li>

              <li className="skill-box w-28 h-44 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={fire} alt="firebase" className="object-contain mb-2" />
                <p className="skill-percent text-lg text-gray-700" data-percent="100">0%</p>
              </li>

              <li className="skill-box w-28 h-44 py-2 bg-white text-center rounded-xl shadow-xl border-4 border-gray-600">
                <img src={mongo} alt="mongo" className="object-contain mb-2" />
                <p className="skill-percent text-lg text-gray-700" data-percent="60">0%</p>
              </li>

              <li className="skill-box w-28 h-44 py-10 bg-white text-center rounded-xl shadow-xl border-4 text-black border-gray-600">
                <span className='flex ml-1'>Express.
                  <IoLogoJavascript className="text-yellow-400 text-[25px] mx-auto" /></span>
                <p className="skill-percent text-lg text-gray-700" data-percent="60">0%</p>
              </li>
            </ul>
          </div>
          <div
            className="border border-gray-400 p-5 my-10 mx-auto w-[300px] lg:hidden rounded-lg overflow-hidden reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <video src={video2} loop autoplay muted
              className="rounded-lg object-cover" width="300"></video>
          </div>
        </div>

        <a href="https:acrobat.adobe.com/id/urn:aaid:sc:AP:addd36b9-31eb-4767-a54d-a685d7634aa1">
          <button type="button"
            className="py-2.5 px-5 lg:ml-[50%] btn me-2  text-sm font-medium text-gray-900 rounded-full border border-green-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">Course
            Certificate</button>
        </a>
      </div>


      <div className="lg:flex lg:justify-center bg-[#269c9c] my-20 rounded-4xl shadow-2xl/100 py-20">

        <div
          className="text-white lg:w-[480px] lg:mt-20 front reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h1 className="text-4xl ">🛠️Tools & <span className="tools-head">Platforms</span></h1>

          <ul
            className="lg:leading-10 mt-10 flex flex-wrap front-tools gap-9 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <span
              className="w-28 border-3 border-gray-500 py-10 rounded-xl shadow-xl/20 shadow-white bg-[white] "><img
                src={vs} width="600" alt="" /></span>

            <span
              className="w-28 border-3 border-gray-500 pt-4 rounded-xl shadow-xl/20 shadow-white bg-[white] "><img
                src={post} width="600" alt="" /></span>
            <span
              className="w-28 border-3 border-gray-500 text-black py-5 rounded-xl shadow-xl/20 shadow-white bg-[white] text-[16px]"><img
                src={thunder} width="80" alt="" className='ml-3' />Thunder Client</span>
            <span
              className="w-28 border-3 border-gray-500 py-10 rounded-xl shadow-xl/20 shadow-white bg-[white] "><img
                src={net} alt="" />
            </span>
            <span
              className="w-28 border-3 border-gray-500 text-black p-5 text-center rounded-xl shadow-xl/20 shadow-white bg-[white] text-[25px]"><img
                src={ver} width="80" alt="" className='' />Vercel</span>
            <span
              className="w-28 border-3 border-gray-500 py-10 rounded-xl shadow-xl/20 shadow-white bg-[white] "><img
                src={figma} width="600" alt="" /></span>
          </ul>
        </div>

        <div className="border border-gray-400 p-5 mb-10 lg:h-[576px] mt-30 rounded-lg overflow-hidden reveal-on-scroll opacity-0 translate-y-10 w-[300px] mx-auto  transition-all duration-1000">
          <video
            src={video3}
            autoPlay
            loop
            muted
            width={300}
            className="rounded-lg object-cover"
          ></video>
        </div>
      </div>

    </section>
  );
}
