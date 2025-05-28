import React from "react";
import avatar from "../assets/undraw_developer-avatar_f6ac.svg"
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-8 relative overflow-hidden flex items-center"
    >
      {/* Background floating blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-700 rounded-full opacity-20 filter blur-3xl animate-blob"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full opacity-15 filter blur-3xl animate-blob"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 w-full">
        {/* Left text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold">
          I'm <span style={{color: "violet"}}><strong>Animesh Prakash</strong></span>  <br />    
            <Typewriter
              words={["We Build Digital Experiences", "Your Success is Our Goal"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-gray-300 text-lg">
            We are a passionate team of developers, designers, and innovators dedicated to crafting
            beautiful, fast, and user-friendly websites and apps that grow your business.
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-600 rounded-md hover:bg-purple-700 transition duration-300 font-semibold">
            Learn More
          </button>
        </div>

        {/* Right illustration */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={avatar}
            alt="Programming Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
