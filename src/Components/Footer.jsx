import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10 px-4 sm:px-8">
        {/* Contact Info */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
          <p>Galgotias University, Greater Noida</p>
          <p>Email: info@galgotiasuniversity.edu</p>
          <p>Phone: +91 1234-567-890</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="hover:text-secondary">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="hover:text-secondary">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-secondary">
                About Us
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-secondary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-secondary text-center mt-6 py-4 text-sm">
        <p>© 2024 Galgotias University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
