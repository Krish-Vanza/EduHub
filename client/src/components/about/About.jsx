import React from 'react';
import Footer from '../student/Footer'; // <-- 1. IMPORT YOUR FOOTER (adjust path if needed)

function AboutUs() {
  return (
    <> {/* <-- 2. ADD REACT FRAGMENT WRAPPER */}

      {/* Page container (Your original code) */}
      <div className="flex justify-center bg-gradient-to-b from-teal-100 to-teal-60 py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Content card */}
        <div className="w-full max-w-4xl rounded-xl bg-gradient-to-b from-teal-100 to-teal-60 p-8 shadow-lg md:p-12">
          
          {/* Header */}
          <h2 className="mb-6 text-center text-4xl font-bold text-gray-800">
            About EduHub
          </h2>
          
          <p className="mb-4 text-base leading-relaxed text-gray-600">
            Welcome to <strong className="font-semibold text-gray-900">EduHub</strong>, a modern Learning Management System (LMS)
            {/* <-- CHANGED: Added NITW context here --> */}
            <strong className="font-semibold text-gray-900"> developed by students at the National Institute of Technology, Warangal (NITW)</strong>,
            designed to create a seamless and engaging educational experience. 
            Our platform provides a centralized, intuitive, and powerful 
            environment for new students and instructors to manage courses, 
            share resources, and foster collaborative learning.
          </p>

          <hr className="my-8 border-gray-200" />

          {/* Mission Section */}
          <h3 className="mb-4 mt-8 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-700">
            Our Mission
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            Our mission is to simplify and enhance the academic journey for every student and educator at NIT Warangal. We believe that technology should be an enabler, not a barrier, in the pursuit of technical excellence. EduHub is built to be a fast, reliable, and deeply relevant solution that empowers NITW's educators to teach cutting-edge subjects and inspires its students to learn, collaborate, and excel in their demanding curriculum.
          </p>

          <hr className="my-8 border-gray-200" />

          {/* Team Section */}
          <h3 className="mb-4 mt-8 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-700">
            Meet the Team
          </h3>
          <p className="mb-6 text-base leading-relaxed text-gray-600">
            {/* <-- CHANGED: Added NITW context here --> */}
            EduHub is the proud creation of a dedicated team of student
            developers from the <strong className="font-semibold text-gray-900">National Institute of Technology, Warangal (NITW)</strong>, 
            who are passionate about building the next generation
            of educational tools.
          </p>

          <ul className="list-none p-0">
            <li className="py-2 text-lg text-gray-700">
              <span className="font-semibold text-blue-700">Biswojit</span> 
              <span className="text-gray-500"> (Roll No.: 23CSB0B61)</span>
            </li>
            <li className="py-2 text-lg text-gray-700">
              <span className="font-semibold text-blue-700">Krish Vanza</span>
              <span className="text-gray-500"> (Roll No.: 23CSB0B62)</span>
            </li>
            <li className="py-2 text-lg text-gray-700">
              <span className="font-semibold text-blue-700">Aravind Banothu</span>
              <span className="text-gray-500"> (Roll No.: 23CSB0B63)</span>
            </li>
          </ul>

          {/* Footer Note */}
          <p className="mt-10 text-center italic text-gray-500">
            We hope you enjoy using EduHub as much as we enjoyed building it!
          </p>
          
        </div>
      </div>

      <Footer />

    </>
  );
}

export default AboutUs;