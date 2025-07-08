import React, { useEffect, useRef } from 'react';

import insta from './images/insta.png';
import git from './images/git.jpg';
import link from './images/link.png';
import you from './images/you.png';
import main from './images/code.jpg';

export default function Head() {
  const slideTextRef = useRef(null);
  const typingRef = useRef(null);

  // Slide-in animation
  useEffect(() => {
    const slideText = slideTextRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            slideText.classList.remove('opacity-0', '-translate-x-96');
            slideText.classList.add('opacity-100', 'translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (slideText) observer.observe(slideText);
  }, []);

  // Typing animation
  useEffect(() => {
    const textElement = typingRef.current;

    const roles = ['PUNEET', 'ME'];
    let roleIndex = 0;
    const speed = 100;

    function typeText(text, callback) {
      textElement.innerHTML = 'Code With <br><span class="role ml-3 sm:ml-6"></span>..';
      const roleSpan = textElement.querySelector('.role');
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
    <section className="relative px-6 py-12 lg:m-20 md:px-16 lg:px-24 bg-gradient-to-br from-[#2b5876] to-[#4e4376] rounded-4xl shadow-4xl/100">
     
     
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <img
          src={main}
          alt="Profile"
          className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-3xl border-4 border-white"
        />

        {/* Typing Text */}
        <h1
          ref={slideTextRef}
          className="text-white text-4xl lg:mt-50 sm:text-5xl lg:text-6xl opacity-0 transform -translate-x-96 transition-all duration-1000 leading-snug text-center md:text-left" 
        >
          <span ref={typingRef}></span>
        </h1>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center lg:absolute top-7/12 right-50 md:justify-start gap-6 mt-10 text-white">
        <a
          href="https://www.instagram.com/ishepuneet_/"
          className="flex items-center hover:text-green-400"
          target="_blank" rel="noopener noreferrer"
        >
          <img className="mr-2" src={insta} alt="Instagram" width="30" />
          Instagram
        </a>
        <a
          href="https://github.com/ishepuneet"
          className="flex items-center hover:text-green-400"
          target="_blank" rel="noopener noreferrer"
        >
          <img className="mr-2" src={git} alt="GitHub" width="30" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/puneetmernstackdeveloper/"
          className="flex items-center hover:text-green-400"
          target="_blank" rel="noopener noreferrer"
        >
          <img className="mr-2" src={link} alt="LinkedIn" width="30" />
          LinkedIn
        </a>
        <a
          href="https://www.youtube.com/@Puneetkohli1102"
          className="flex items-center hover:text-green-400"
          target="_blank" rel="noopener noreferrer"
        >
          <img className="mr-2" src={you} alt="YouTube" width="30" />
          YouTube
        </a>
      </div>
    </section>
  );
}
