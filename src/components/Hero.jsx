import React from "react";
import programmingIllustration from '../assets/undraw_programming_65t2.svg';
import bgImage from "../assets/jefferson-santos-9SoCnyQmkzI-unsplash.jpg";
import { Typewriter } from "react-simple-typewriter";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import scrollDownAnimation from "../assets/Animation - 1748368945378.json";

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>

     <div
  id="home"
  className="relative w-full min-h-screen lg:h-screen bg-cover bg-center bg-no-repeat pt-20 overflow-hidden"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />

  {/* Mouse Parallax */}
  <MouseParallaxContainer
    className="absolute inset-0 z-20"
    globalFactorX={0.1}
    globalFactorY={0.1}
    resetOnLeave
  >
    <MouseParallaxChild
      factorX={0.3}
      factorY={0.2}
      className="absolute w-48 h-48 bg-purple-500 opacity-20 rounded-full top-[25%] left-[15%] blur-2xl"
    />
    <MouseParallaxChild
      factorX={-0.2}
      factorY={0.3}
      className="absolute w-56 h-56 bg-pink-500 opacity-20 rounded-full top-[65%] left-[70%] blur-2xl"
    />
  </MouseParallaxContainer>

  {/* Content */}
  <div className="relative z-30 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 max-w-7xl mx-auto px-6 h-full">
    {/* Text */}
    <motion.div
      className="text-white text-center lg:text-left lg:w-1/2 space-y-6 max-w-xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
        <Typewriter
          words={["Crafting Experiences", "Building Dreams", "Innovating the Web"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
      <p className="text-lg sm:text-xl font-medium text-gray-200">
        Elevate your brand with beautiful, performant, and modern web solutions using React, Vite, and Tailwind CSS.
      </p>
     <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition"
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Get Started
</motion.button>

    </motion.div>

    {/* Illustration */}
    <motion.div
      className="lg:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
    >
      <img
        src={programmingIllustration}
        alt="Developer Illustration"
        className="w-64 sm:w-80 md:w-96 lg:w-[500px]"
      />
    </motion.div>
  </div>

  {/* Scroll Down */}
  <div
    onClick={() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 w-16 h-16 cursor-pointer"
    title="Scroll to About"
  >
    <Lottie animationData={scrollDownAnimation} loop autoplay />
  </div>
</div>

    </>
  );
}
