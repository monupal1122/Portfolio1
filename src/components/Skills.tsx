import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';
import { X, CheckCircle2 } from 'lucide-react';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const skills = [
        {
            name: 'React',
            icon: FaReact,
            color: '#61DAFB',
            topics: ['Hooks (useState, useEffect, etc.)', 'Context API', 'React Router', 'Component Lifecycle', 'Performance Optimization']
        },
        {
            name: 'JavaScript',
            icon: FaJs,
            color: '#F7DF1E',
            topics: ['ES6+ Syntax', 'Asynchronous Programming', 'DOM Manipulation', 'Event Loop', 'Closures & Scope', 'Prototypes']
        },
        {
            name: 'Tailwind CSS',
            icon: SiTailwindcss,
            color: '#06B6D4',
            topics: ['Responsive Design', 'Utility-First Workflow', 'Custom Configuration', 'Animations', 'Dark Mode Implementation', 'Grid & Flexbox', 'JIT Engine']
        },
        {
            name: 'Node.js',
            icon: FaNodeJs,
            color: '#339933',
            topics: ['Express.js', 'RESTful APIs', 'Middleware', 'Authentication (JWT)', 'File System', 'Socket.io']
        },
        {
            name: 'HTML5',
            icon: FaHtml5,
            color: '#E34F26',
            topics: ['Semantic HTML', 'Accessibility (ARIA)', 'Canvas API', 'Web Storage', 'Forms & Inputs', 'Responsive Images']
        },
        {
            name: 'CSS3',
            icon: FaCss3Alt,
            color: '#1572B6',
            topics: ['Animations & Transitions', 'Custom Properties (Variables)', 'Flexbox', 'CSS Grid', 'Box Model', 'Specificity', 'Preprocessors (SASS)']
        },
        {
            name: 'Git',
            icon: FaGitAlt,
            color: '#F05032',
            topics: ['Version Control', 'Branching Strategy', 'Collaboration (PRs)', 'Merge & Rebase', 'Git Hooks', 'CI/CD Pipelines', 'Merge Conflicts']
        },
        {
            name: 'Vite',
            icon: SiVite,
            color: '#646CFF',
            topics: ['Fast Hot Module Replacement', 'Development Server', 'Build Tooling', 'Plugin System', 'Environmental Variables', 'Asset Handling', 'Dependency Pre-bundling']
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative min-h-screen">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">My Tech Stack</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I use a wide array of tools and technologies to bring ideas to life. From front-end frameworks to back-end solutions, here's my toolkit.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.05 }}
                            onClick={() => setSelectedSkill(skill)}
                            className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 group transition-all duration-300 cursor-pointer hover:border-cyan-500/50 hover:bg-white/10"
                            style={{
                                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                            }}
                        >
                            <skill.icon
                                size={40}
                                style={{ color: skill.color }}
                                className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all"
                            />
                            <span className="font-semibold text-gray-300 transition-colors group-hover:text-white">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Skill Detail Popup */}
            <AnimatePresence>
                {selectedSkill && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSkill(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-slate-900/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl overflow-hidden border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Background Glow */}
                            <div
                                className="absolute -top-24 -right-24 w-48 h-48 blur-[100px] opacity-20 rounded-full"
                                style={{ backgroundColor: selectedSkill.color }}
                            />

                            <div className="flex justify-between items-start mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <selectedSkill.icon size={32} style={{ color: selectedSkill.color }} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                                        <p className="text-sm text-gray-400">Core Expertise</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedSkill(null)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={24} className="text-gray-400 hover:text-white" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest px-1">Key Topics</h4>
                                <div className="grid gap-3">
                                    {selectedSkill.topics.map((topic, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors group"
                                        >
                                            <CheckCircle2 size={18} className="text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                            <span className="text-gray-300 font-medium text-sm">{topic}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedSkill(null)}
                                className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
                            >
                                Close Details
                            </motion.button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;