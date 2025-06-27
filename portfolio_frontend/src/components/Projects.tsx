import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform [Shohoj Bazar]',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['Laravel','Javascript', 'Node.js', 'MYSQL', 'Blade'],
      github: 'https://github.com/skrsabbih/php-pulse',
      demo: 'https://sohojbazar.susto24.com/'
    },
    {
      title: 'Student CRUD Full-Stack Application',
      description: 'A collaborative student crud application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      technologies: ['Laravel','React', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/skrsabbih/student-crud-project',
      demo: 'https://github.com/skrsabbih/student-crud-project'
    },
    {
      title: 'Dynamic Portfolio Website (Full-Stack)',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      technologies: ['Laravel','React', 'Chart.js', 'Weather API', 'Tailwind'],
      github: 'https://github.com/skrsabbih/sabbih_portfolio_project',
      demo: 'https://github.com/skrsabbih/sabbih_portfolio_project'
    },
    {
      title: 'Professional Portfolio Website [Still in Progress]',
      description: 'A modern, responsive portfolio website showcasing my projects and skills with smooth animations and interactive elements.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      technologies: ['Laravel','React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Axios'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, _index) => (
            <div 
              key={project.title}
              className="bg-slate-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 "
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 "
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
