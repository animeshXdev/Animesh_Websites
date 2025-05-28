import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaFigma,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMongodb, SiExpress,
} from "react-icons/si";
import { FaCode, FaSearchDollar, FaBullhorn } from "react-icons/fa";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95, color: "bg-orange-500", icon: <FaHtml5 title="HTML5" /> },
      { name: "CSS3", level: 90, color: "bg-blue-500", icon: <FaCss3Alt title="CSS3" /> },
      { name: "JavaScript", level: 88, color: "bg-yellow-400", icon: <SiJavascript title="JavaScript" /> },
      { name: "React", level: 85, color: "bg-cyan-500", icon: <FaReact title="React" /> },
      { name: "Tailwind", level: 87, color: "bg-purple-500", icon: <SiTailwindcss title="Tailwind CSS" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, color: "bg-green-500", icon: <FaNodeJs title="Node.js" /> },
      { name: "Express", level: 75, color: "bg-gray-500", icon: <SiExpress title="Express" /> },
      { name: "MongoDB", level: 78, color: "bg-emerald-500", icon: <SiMongodb title="MongoDB" /> },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "Git", level: 85, color: "bg-red-500", icon: <FaGitAlt title="Git" /> },
      { name: "VS Code", level: 90, color: "bg-indigo-500", icon: <FaCode title="VS Code" /> },
      { name: "Figma", level: 80, color: "bg-pink-500", icon: <FaFigma title="Figma" /> },
    ],
  },
  {
    category: "SEO & Digital Marketing",
    skills: [
      { name: "Google Ads", level: 75, color: "bg-yellow-600", icon: <FaBullhorn title="Google Ads" /> },
      { name: "SEO", level: 85, color: "bg-green-600", icon: <FaSearchDollar title="SEO" /> },
      { name: "Social Media Marketing", level: 80, color: "bg-blue-600", icon: <FaBullhorn title="Social Media Marketing" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Skills</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          A detailed look into the technologies I use to craft reliable and modern applications.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-14 sm:grid-cols-1 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400">{group.category}</h3>
            <div className="space-y-6">
              {group.skills.map(({ name, level, color, icon }, index) => (
                <div key={name}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-3 text-lg font-semibold">
                      <span className="text-2xl">{icon}</span>
                      <span>{name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{level}%</span>
                  </div>

                  {/* Progress Bar visible on all screen sizes */}
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      className={`h-full ${color} rounded-full`}
                    />
                  </div>

                  {/* Mobile Skill Badge (optional) */}
                  <div className="flex flex-wrap gap-2 mt-2 sm:hidden">
                    <span className={`text-sm px-3 py-1 rounded-full border border-white/10 ${color} bg-opacity-30 text-white`}>
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
