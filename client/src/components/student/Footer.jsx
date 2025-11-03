import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        <div className="flex flex-col md:items-start items-center w-full">
          {/* Changed text to "Nitw EDU hub" */}
          <h2 className="font-semibold text-white text-2xl mb-4">NITW EduHub</h2>
          
          {/* Added motivational text for NITW students */}
          <p className="text-center md:text-left text-sm text-white/80">
            Embrace the challenge, cherish the learning, and innovate with passion. Your journey at NITW is the foundation for a future where you don't just find success—you define it.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
          </ul>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © Nitw  Eduhub. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;