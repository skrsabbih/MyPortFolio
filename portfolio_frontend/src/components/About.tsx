import { Code, Palette, Zap, Users } from "lucide-react";

import { fetchAbout } from "../api/about";
import type { About as AboutType } from "../types/about";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState<AboutType | null>(null);
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description:
        "Combining functionality with beautiful, user-centered design principles.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and exceptional user experience.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating complex ideas clearly.",
    },
  ];

  useEffect(() => {
    const getAbout = async () => {
      const data = await fetchAbout();
      setAbout(data);
    };
    getAbout();
  }, []);

  if (!about) return <p className="text-center text-white mt-10">Loading...</p>;

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {about.title}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <img
                  src="/Sabbih Sarker.jpg"
                  alt="John Doe - Full Stack Developer"
                  className="w-48 h-48 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl"
                />
                <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20"></div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              {about.description}
            </p>
            {about.resume && (
              <div className="pt-4">
                <a
                  href={about.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Download Resume
                </a>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, _index) => (
              <div
                key={feature.title}
                className="bg-slate-900 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
