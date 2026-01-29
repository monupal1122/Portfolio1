import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web Apps", "Mobile"];

const projects = [
  {
    id: 1,
    title: "Grocery Shopping App",
    description: "A comprehensive mobile application built with React Native CLI for grocery shopping with features like shopping lists, store locator, price comparison, and delivery tracking.",
    image: "/groceryApp.jpeg",
    technologies: ["React Native CLI", "Firebase", "Google Maps API"],
    category: "Mobile",
    liveUrl: "https://freshmart-6whw.onrender.com/",
    githubUrl: "https://github.com/monupaji1122/freshmart",
    featured: true,
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "A powerful MERN stack admin panel for managing users, analytics, content, and system configurations with real-time updates.",
    image: "/adminpanel.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Web Apps",
    liveUrl: "https://admin-panel12.onrender.com/",
    githubUrl: "https://github.com/monupaji1122/admin-panel",
    featured: true,
  },
  {
    id: 3,
    title: "AI Mockup Generator",
    description: "An AI-powered MERN stack tool for generating high-quality mockups and prototypes for web and mobile applications.",
    image: "/ai-mock.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Web Apps",
    liveUrl: "https://ai-mock-interview-frontend-lemon.vercel.app/",
    githubUrl: "https://github.com/monupaji1122/ai-mock",
    featured: true,
  },
  {
    id: 4,
    title: "FreshMart E-Commerce Website",
    description: "A versatile MERN stack web application showcasing modern design and functionality.",
    image: "/project1.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Web Apps",
    liveUrl: "https://freshmart-6whw.onrender.com/",
    githubUrl: "https://github.com/monupaji1122/project-one",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <Folder className="w-5 h-5 text-primary flex-shrink-0" />
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, from startups to enterprise applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
