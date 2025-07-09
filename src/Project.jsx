import React, { useEffect, useRef } from 'react';

// Images
import pack from './images/pack.png';
import meta from './images/meta.png';
import todo from './images/todo.png';
import movie from './images/movie.png';
import ws from './images/ws.png';
import weather from './images/weather.jpg';
import age from './images/a.png';
import one from './images/one.png';

export default function Project() {
  const projectRef = useRef(null);

  useEffect(() => {
    const cards = projectRef.current.querySelectorAll('.project-card, #viewMoreBtn');
    const popup = document.getElementById('popupMessage');
    const btn = document.getElementById('viewMoreBtn');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        } else {
          entry.target.classList.remove('opacity-100', 'translate-y-0');
          entry.target.classList.add('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach((card) => observer.observe(card));

    // ✅ Button click handler to show popup
    if (btn && popup) {
      btn.addEventListener('click', () => {
        popup.classList.remove('hidden');
        popup.classList.add('opacity-100');

        // Auto-hide after 3 seconds
        setTimeout(() => {
          popup.classList.remove('opacity-100');
          popup.classList.add('opacity-0');
          setTimeout(() => popup.classList.add('hidden'), 500);
        }, 3000);
      });
    }
  }, []);


  return (
    <section
      id="projects"
      ref={projectRef}
      className="bg-gradient-to-br from-[#2b5876] to-[#4e4376] rounded-4xl lg:mx-20 my-20 shadow-2xl text-white"
    >
      <div className="lg:p-10 text-center">
        <h1 className="text-6xl text-white text-center">
          <span className="text-green-600 font-bold">My</span> Projects..
        </h1>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {[{ src: pack, label: 'Pack & Shifts responsive', link: 'https://pack-shifts.netlify.app/' },
          { src: meta, label: 'Meta Newsroom', link: 'https://byteroomnews.netlify.app' },
          { src: todo, label: 'To-Do List responsive', link: 'https://taskripple.netlify.app' },
          { src: movie, label: 'Movie App responsive', link: 'https://moviemorph.netlify.app' },
          { src: ws, label: 'WsCube Tech Project', link: 'https://mini-multiple-page-website.netlify.app' },
          { src: weather, label: 'Weather App responsive', link: 'https://app-api-weather-forcast.netlify.app' },
          { src: age, label: 'Age Calculator responsive', link: 'https://jsagecalculate.netlify.app' },
          { src: one, label: 'My First Project', link: 'https://ws-first-project.vercel.app' }
          ].map((project, i) => ( 
            <a href={project.link} key={i} target="_blank" rel="noopener noreferrer">
              <div className="project-card bg-cyan-950 opacity-0 translate-y-10 hover:border hover:scale-105 transition-all duration-700 transform p-3 w-[250px] rounded-3xl shadow-md">
                <img src={project.src} alt={project.label} className="h-[200px] w-[300px] rounded-3xl object-cover" />
                <p className="text-2xl my-2">{project.label}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <button
            id="viewMoreBtn"
            type="button"
            className="py-2.5 px-5 opacity-0 translate-y-10 btn text-sm font-medium text-gray-900 rounded-full border border-green-600 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 transition-all cursor-pointer duration-1000"
          >
            View More
          </button>
        </div>

        {/* Popup Message */}
        <div
          id="popupMessage"
          className="fixed right-5 top-1/2 opacity-0 transform -translate-y-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hidden z-50 transition-opacity duration-500"
        >
          🚀 Some projects are already deployed—check them out. <br /> Others are under development.
        </div>
      </div>
    </section>
  );
}
