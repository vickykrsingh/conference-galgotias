import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu open/close

  return (
    <nav className="sticky top-0 bg-primary text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Conference</div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-secondary">Home</a></li>
            <li><a href="#about" className="hover:text-secondary">About</a></li>
            <li><a href="#schedules" className="hover:text-secondary">Schedules</a></li>
            <li><a href="#gallery" className="hover:text-secondary">Gallery</a></li>
            <li><a href="#sponsors" className="hover:text-secondary">Sponsors</a></li>
            <li><a href="#contacts" className="hover:text-secondary">Contacts</a></li>
          </ul>
        </div>
      </div>

      {/* Dropdown Menu for Mobile Screens */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li><a href="#home" className="hover:text-secondary">Home</a></li>
            <li><a href="#about" className="hover:text-secondary">About</a></li>
            <li><a href="#schedules" className="hover:text-secondary">Schedules</a></li>
            <li><a href="#gallery" className="hover:text-secondary">Gallery</a></li>
            <li><a href="#sponsors" className="hover:text-secondary">Sponsors</a></li>
            <li><a href="#contacts" className="hover:text-secondary">Contacts</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
