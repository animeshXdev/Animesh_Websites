import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications tailored to your needs.",
    icon: (
      <svg
        className="w-12 h-12 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h16a1 1 0 001-1V7M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive, beautiful interfaces that offer seamless user experiences.",
    icon: (
      <svg
        className="w-12 h-12 text-pink-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h7" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your website’s visibility and ranking with modern SEO strategies.",
    icon: (
      <svg
        className="w-12 h-12 text-yellow-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3M21 10h-5" />
      </svg>
    ),
  },

  // New services added below
  {
    title: "Mobile App Development",
    description:
      "Designing and developing high-performance mobile apps for iOS and Android platforms.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "Leveraging cloud technology to improve scalability, reliability, and security of your infrastructure.",
    icon: (
      <svg
        className="w-12 h-12 text-cyan-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 114 4h7a5 5 0 100-10 4 4 0 00-7.874-1.114" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Crafting strategies to boost your online presence, engagement, and conversion rates.",
    icon: (
      <svg
        className="w-12 h-12 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2M7 8h2a2 2 0 012 2v6a2 2 0 01-2 2H7m6-10V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section
      id="services"
     className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 mt-4">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          We provide top-notch services to help your business grow and succeed in the digital world.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon }, index) => (
          <motion.div
            key={title}
            className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl cursor-pointer transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="mb-5">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
