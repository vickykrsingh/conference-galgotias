import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Function to detect the current section based on scroll position
  const handleScroll = () => {
    const sections = ['home', 'about', 'schedules', 'gallery', 'sponsors', 'contacts'];
    const scrollPosition = window.scrollY + 100; // Adding offset to make it more accurate

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement && sectionElement.offsetTop <= scrollPosition && sectionElement.offsetTop + sectionElement.offsetHeight > scrollPosition) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-primary text-white p-4 z-10 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold transition-transform duration-500 transform hover:scale-110">Conference</div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'transform rotate-90' : ''}`}
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
            <li>
              <a
                href="#home"
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md transition duration-300 ${activeSection === 'home' ? 'text-secondary font-semibold' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md transition duration-300 ${activeSection === 'about' ? 'text-secondary font-semibold' : ''}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#schedules"
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md transition duration-300 ${activeSection === 'schedules' ? 'text-secondary font-semibold' : ''}`}
              >
                Schedules
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md transition duration-300 ${activeSection === 'gallery' ? 'text-secondary font-semibold' : ''}`}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md transition duration-300 ${activeSection === 'sponsors' ? 'text-secondary font-semibold' : ''}`}
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md transition duration-300 ${activeSection === 'contacts' ? 'text-secondary font-semibold' : ''}`}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown Menu for Mobile Screens */}
      {isOpen && (
        <div className="lg:hidden mt-4 transition-opacity duration-300">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md w-full transition duration-300 ${activeSection === 'home' ? 'text-secondary font-semibold' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md w-full transition duration-300 ${activeSection === 'about' ? 'text-secondary font-semibold' : ''}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#schedules"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md w-full transition duration-300 ${activeSection === 'schedules' ? 'text-secondary font-semibold' : ''}`}
              >
                Schedules
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md w-full transition duration-300 ${activeSection === 'gallery' ? 'text-secondary font-semibold' : ''}`}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md w-full transition duration-300 ${activeSection === 'sponsors' ? 'text-secondary font-semibold' : ''}`}
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white h-full hover:bg-secondary py-2 px-4 rounded-md w-full transition duration-300 ${activeSection === 'contacts' ? 'text-secondary font-semibold' : ''}`}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
