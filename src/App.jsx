import React from 'react'

import { useEffect, useRef } from 'react';
import './App.css';

import About from './About';
import Skill from './Skill';
import Project from './Project';
import Services from './Services';
import Contact from './Contact';







import { FaBarsStaggered } from 'react-icons/fa6';

import Overview from './Overview';
import Head from './Head';


function App() {
  const navMenuRef = useRef(null);
  const typingRef = useRef(null);

  const handleToggle = () => {
    navMenuRef.current.classList.toggle('hidden');
  };

  useEffect(() => {
    const textElement = typingRef.current;

    const roles = [
      'Web Developer',
      'UI Designer',
      'Freelancer',
      'Coder',
      'Back-end Dev',
      'Front-end Dev',
    ];

    let roleIndex = 0;
    const speed = 100;

    function typeText(text, callback) {
      textElement.innerHTML = 'I am a <br><span class="roled"></span>..';
      const roleSpan = textElement.querySelector('.roled');
      let index = 0;

      function typeChar() {
        if (index < text.length) {
          roleSpan.textContent += text.charAt(index);
          index++;
          setTimeout(typeChar, speed);
        } else {
          setTimeout(callback, 1000);
        }
      }

      typeChar();
    }

    function loopRoles() {
      typeText(roles[roleIndex], () => {
        roleIndex = (roleIndex + 1) % roles.length;
        loopRoles();
      });
    }

    loopRoles();
  }, []);

  return (
    <div className="bg-gradient-to-r lg:pb-10 from-[#243B55] to-[#141E30]">
      <div className="background bg-fixed h-[100vh] bg-center p-4 bg-no-repeat bg-cover">
        <nav className="fixed top-5 left-5 z-50 text-white text-base">
          {/* Toggle Button */}
          <div> 
            <button
              onClick={handleToggle}
              className="p-2 bg-white/20 rounded-lg backdrop-blur"
            >
              <FaBarsStaggered className="text-2xl" />
            </button>
          </div>

          {/* Menu */}
          <ul
            ref={navMenuRef}
            className="mt-2 md:mt-0 hidden md:bg-white/10 bg-white/20 md:backdrop-blur p-4 rounded-xl space-y-2 md:space-y-2"
          >
            <li><a href="" className="block px-4 py-2 rounded hover:bg-white/40">Home</a></li>
            <li><a href="#about" className="block px-4 py-2 rounded hover:bg-white/40">About</a></li>
            <li><a href="#skills" className="block px-4 py-2 rounded hover:bg-white/40">Skills</a></li>
            <li><a href="#projects" className="block px-4 py-2 rounded hover:bg-white/40">Projects</a></li>
            <li><a href="#services" className="block px-4 py-2 rounded hover:bg-white/40">Services</a></li>
            <li><a href="#overview" className="block px-4 py-2 rounded hover:bg-white/40">OverView</a></li>
            <li><a href="#contact" className="block px-4 py-2 rounded hover:bg-white/40">Contact</a></li>
          </ul>
        </nav>



        {/* Typing Text */}
        <div className="typing lg:my-[10%]">
          <h1
            ref={typingRef}
            className="typing-text text-white lg:text-9xl text-center"
          ></h1>
        </div>

      </div>

      {/* Uncomment to use sections */}

      <div className="max-w-screen-2xl m-auto">

        <Head />
        <About />
        <Skill />
        <Project />
        <Services />
        <Overview />
        <Contact />
      </div>

    </div>
  );
}

export default App;
