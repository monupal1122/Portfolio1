import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const skills = [
  { name: "React / Next.js", level: 75 },
  { name: "Tailwindcss", level: 65 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "MongoDB", level: 70 },
  { name: "Microservices", level: 60 },
  { name: "RESTAPI", level: 85 },
  { name: "Render/Vercel", level: 75 },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that teams love to work with.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces that users find delightful.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working seamlessly with cross-functional teams.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Get to know me</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Crafting Digital Experiences
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 3 years of experience 

                  building web applications that make a difference. Based in San Francisco, 
                  I specialize in creating elegant solutions to complex problems.
                </p>
                <p>
                  My journey started with a curiosity about how things work on the web. 
                  Today, I work with startups and enterprises to bring their digital 
                  visions to life using modern technologies like React, Node.js, and 
                  cloud platforms.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring hiking trails, 
                  experimenting with photography, or contributing to open-source projects.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold mb-8">
                Technical Skills
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Icons */}
              <div className="mt-10">
                <p className="text-sm text-muted-foreground mb-4">Technologies I work with:</p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Tailwind Css", "Node.js", "Express",  "MongoDB", "Docker", "RESTAPI","MicroServices"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-secondary rounded-full text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
