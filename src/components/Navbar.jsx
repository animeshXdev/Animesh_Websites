import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastAbout, setScrolledPastAbout] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
      const scrollPos = window.scrollY;

      // Change background once scroll passes top of #about
      setScrolledPastAbout(scrollPos >= aboutTop);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 shadow-md transition-colors duration-500 ${
        scrolledPastAbout
          ? "bg-white"
          : "bg-slate-900/10 backdrop-blur-md text-purple-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo + Title */}
        <div className={`flex items-center space-x-3 cursor-pointer select-none ${scrolledPastAbout ? "text-purple-700" : "text-purple-300"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 841.9 595.3"
            fill="none"
            stroke={scrolledPastAbout ? "#7c3aed" : "#a855f7"}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 animate-spin-slow"
            style={{ animationDuration: "20s" }}
          >
            <circle
              cx="420.9"
              cy="296.5"
              r="45.7"
              fill={scrolledPastAbout ? "#7c3aed" : "#a855f7"}
            />
            <g stroke={scrolledPastAbout ? "#7c3aed" : "#a855f7"}>
              <ellipse
                rx="183.7"
                ry="84.9"
                cx="420.9"
                cy="296.5"
                fill="none"
              />
              <ellipse
                rx="183.7"
                ry="84.9"
                cx="420.9"
                cy="296.5"
                fill="none"
              />
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
          <span className={`text-xl md:text-2xl font-bold ${scrolledPastAbout ? "text-purple-700" : "text-purple-300"}`}>
            Animesh
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8 font-medium text-lg ${
          scrolledPastAbout ? "text-purple-700" : "text-purple-200"
        }`}>
          {menuItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`cursor-pointer border-b-2 border-transparent hover:border-purple-400 hover:text-purple-500 transition duration-300 ${
                  scrolledPastAbout ? "hover:text-purple-600" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className={`${scrolledPastAbout ? "text-purple-700" : "text-purple-300"} md:hidden cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden space-y-4 px-6 py-6 font-semibold text-lg rounded-b-lg shadow-lg transition-colors duration-500 ${
            scrolledPastAbout
              ? "bg-white text-purple-700"
              : "bg-purple-900/20 backdrop-blur-md text-purple-200"
          }`}
        >
          {menuItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block cursor-pointer border-b-2 border-transparent hover:border-purple-400 hover:text-purple-300 transition duration-300 pb-1"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation-name: spin-slow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </nav>
  );
}
