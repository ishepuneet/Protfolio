import React from 'react';

export default function Overview() {
  return (
    <section
      className="bg-gradient-to-r from-[#012956] to-[#045252] lg:m-20 text-white my-20 rounded-4xl shadow-2xl/100 py-16 px-4 md:px-10"
      id="overview"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
        🌐 Personal <span className="text-green-500">Portfolio</span> Overview..
      </h1>

      <p className="text-center text-base md:text-lg max-w-4xl mx-auto mb-12">
        I have developed a fully responsive portfolio website using modern technologies like Vite, React, and Tailwind CSS. The website works seamlessly across all devices and screen sizes, offering a smooth user experience.
      </p>

      <div className="flex flex-col lg:flex-row justify-center gap-10">
        {/* Tech Stack Card */}
        <div className="w-full lg:w-[480px] bg-white/30 border border-white rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5">🔧 Tech Stack Used</h2>
          <ul className="list-disc list-inside text-base sm:text-lg leading-8">
            <li>Frontend: Vite + React</li>
            <li>Styling: Tailwind CSS (fully responsive layout)</li>
            <li>Backend / Database: Google Firebase Realtime Database</li>
            <li>Authentication: Firebase Authentication with Google Sign-In integration</li>
          </ul>
        </div>

        {/* Key Features Card */}
        <div className="w-full lg:w-[480px] bg-white/30 border border-white rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5">📂 Key Features</h2>
          <ul className="list-disc list-inside text-base sm:text-lg leading-8">
            <li>💼 Downloadable CV and Certificates (linked via Firebase)</li>
            <li>🔐 Secure Login System using Firebase Authentication</li>
            <li>🔄 Google Sign-In connected for easy access</li>
            <li>🔥 Live Data Management using Firebase Realtime Database</li>
            <li>📱 Fully Responsive – optimized for all screen sizes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
