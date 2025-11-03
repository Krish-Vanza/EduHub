import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-teal-100 to-white">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto">
            Welcome to <span className="text-teal-600">EduHub</span> — the official learning portal of 
            <span className="text-teal-600"> NIT Warangal</span>.
            <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0" />
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        Empower your academic journey with NITW’s EDU HUB — where innovation meets excellence.  
        Access curated courses, expert faculty guidance, and a collaborative digital learning experience designed to help you excel.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        Learn, grow, and achieve with NITW’s official EDU HUB platform.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
