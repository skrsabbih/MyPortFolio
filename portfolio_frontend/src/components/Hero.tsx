import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { fetchHero } from "../api/hero";
import type { Hero as HeroType } from "../types/hero";
import TypingAnimation from "./TypingAnimation";
import AnimatedTitle from "./AnimatedTitle";

const Hero = () => {
  const [hero, setHero] = useState<HeroType | null>(null);
  const roles = [
    "Full Stack Developer",
    "PHP Developer",
    "Laravel Developer",
    "ReactJS Learner",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const getHero = async () => {
      const data = await fetchHero();
      setHero(data);
    };
    getHero();
  }, []);

  if (!hero) return <p className="text-center text-white mt-10">Loading...</p>;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 sm:pt-20"
      style={{
        backgroundImage: hero.image ? `url(${hero.image})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {hero.name}
            </span>
          </h1>
         <AnimatedTitle text= {hero.title}/>

          <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 h-10 sm:h-12 flex items-center justify-center">
            <TypingAnimation texts={roles} />
          </div>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12 px-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto border-2 border-blue-500 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/skrsabbih/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/skrsabbih/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sabbihkyau@gmail.com"
              className="text-gray-300 hover:text-white transition transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown size={32} className="text-gray-300" />
      </div>
    </section>
  );
};

export default Hero;
