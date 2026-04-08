import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "project",
    title: "Full-Stack Developer (MERN)",
    organization: "Personal Project – FreshMart",
    period: "2024",
    description:
      "Built a complete grocery e-commerce website with product listing, cart, authentication, and checkout flow.",
    achievements: [
      "Implemented React + Tailwind UI",
      "Backend with Node.js, Express & MongoDB",
      "Deployed on Render",
    ],
  },
  {
    type: "project",
    title: "AI Mock Interview Platform",
    organization: "Personal Project",
    period: "2024",
    description:
      "Developed an AI-powered mock interview platform for job preparation with authentication and real-time feedback.",
    achievements: [
      "Used React & TypeScript",
      "Backend with Node.js, Express & MongoDB",
      "authentication",
    ],
  },
  {
    type: "project",
    title: "Blinkit-Style Grocery App",
    organization: "Frontend Project",
    period: "2025",
    description:
      "Recreated Blinkit-style App with category sidebar, product grids, and cart interactions.",
    achievements: [
      "Advanced Tailwind CSS layout",
      "Reusable components",
      "Responsive design",
    ],
  },
];


const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "D.A.V College Jalandhar",
    period: "Completed",
    details:
      "Core subjects: Web Development, Database Management, Computer Networks, Software Engineering.",
  },
];


const certifications = [
  {
    name: "Professional Edge Program",
    issuer: "NIT Foundation (Supported by Infosys Foundation)",
    year: "2025",
  },
   {
    name: "DevCreate BuildFest 1.0 – Hackathon",
    issuer: "CT Group of Institutions, Jalandhar (in association with Google Developer Groups)",
    year: "2025",
  },
  {
    name: "Web Development / MERN Stack ",
    issuer: "Hispirits Technologies",
    year: "2025",
  },
];


const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/20" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">Experience & Education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-display font-semibold text-lg">{exp.title}</h4>
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="glass-card p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-display font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-primary">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="glass-card p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div>
                        <p className="font-medium">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-primary">{cert.year}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
