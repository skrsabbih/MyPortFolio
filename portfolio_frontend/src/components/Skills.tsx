import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaLaravel,
  FaBug,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiAxios,
  SiMysql,
  SiFilament,
  SiJsonwebtokens,
} from "react-icons/si";
import type { IconType } from "react-icons";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, icon: FaReact },
      { name: "TypeScript", level: 85, icon: SiTypescript },
      { name: "Tailwind CSS", level: 88, icon: SiTailwindcss },
      { name: "Axios.js", level: 82, icon: SiAxios },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", level: 92, icon: FaLaravel },
      { name: "Filament", level: 85, icon: SiFilament },
      { name: "REST API", level: 95, icon: SiJsonwebtokens },
      { name: "Node.js [Next Learn]", level: 85, icon: FaNodeJs },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "MySQL", level: 80, icon: SiMysql },
      { name: "Git", level: 90, icon: FaGitAlt },
      { name: "Docker [Next Learn]", level: 10, icon: FaDocker },
      { name: "Laravel Debugger", level: 85, icon: FaBug },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto relative inline-block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r from-blue-400 to-purple-500 before:rounded-full before:opacity-30">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              Technologies and tools I use
            </span>{" "}
            to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 shadow-md cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, index) => {
                  const Icon: IconType = skill.icon;
                  const delay = (catIndex * 5 + index) * 0.15;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      transition={{ delay, duration: 0.6, ease: "easeInOut" }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              repeat: Infinity,
                              repeatDelay: 4,
                              duration: 3,
                              ease: "linear",
                              delay,
                            }}
                            className="text-blue-400 hover:text-purple-400 transition duration-300"
                          >
                            <Icon className="text-2xl" />
                          </motion.div>
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-blue-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
