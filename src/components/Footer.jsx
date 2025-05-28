import React, { useState, useEffect } from "react";
import {  FaArrowUp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled beyond 400px (approx "About" section)
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-400 px-6 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-700 pt-6">
          {/* Logo + Brand */}
         <div className="flex items-center space-x-3 ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 841.9 595.3"
    fill="none"
    stroke="#8b5cf6"
    strokeWidth="8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12"
  >
    <circle cx="420.9" cy="296.5" r="45.7" fill="#8b5cf6" />
    <g stroke="#8b5cf6">
      <ellipse rx="183.7" ry="84.9" cx="420.9" cy="296.5" fill="none" />
      <ellipse rx="183.7" ry="84.9" cx="420.9" cy="296.5" fill="none" />
      <ellipse
        rx="183.7"
        ry="84.9"
        cx="420.9"
        cy="296.5"
        fill="none"
        transform="rotate(60 420.9 296.5)"
      />
      <ellipse
        rx="183.7"
        ry="84.9"
        cx="420.9"
        cy="296.5"
        fill="none"
        transform="rotate(120 420.9 296.5)"
      />
    </g>
  </svg>
  <span className="text-3xl font-semibold text-purple-400">Animesh</span>
</div>


          {/* Links */}
          <div className="flex flex-col space-y-1 md:items-center">
            <span className="text-md font-semibold text-gray-300 mb-1">Quick Links</span>
            <a href="#home" className="hover:text-purple-400 transition text-sm font-medium">
              Home
            </a>
            <a href="#about" className="hover:text-purple-400 transition text-sm font-medium">
              About
            </a>
            <a href="#skills" className="hover:text-purple-400 transition text-sm font-medium">
              Skills
            </a>
            <a href="#services" className="hover:text-purple-400 transition text-sm font-medium">
              Services
            </a>
            <a href="#contact" className="hover:text-purple-400 transition text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end space-y-2">
            <span className="text-md font-semibold text-gray-300">Connect</span>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.facebook.com/animesh.prakash.16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-purple-400 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-purple-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-purple-400 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} <a target="_blank" href="https://animeshxdev.github.io/animeshXdev/"><strong className="  text-purple-400">Animesh</strong></a>. All rights reserved.
        </p>
      </footer>

      {/* Floating Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
