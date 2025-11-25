'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

interface CaseStudy {
    challenge: string;
    solution: string;
    outcomes: string[];
}

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    featured: boolean;
    caseStudy?: CaseStudy;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="section py-32 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
                            Selected <span className="text-gradient-accent">Works</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Showcasing projects that solve real-world problems with elegant code and design.
                        </p>
                    </div>
                    <Link
                        href="https://github.com"
                        target="_blank"
                        className="hidden md:flex items-center gap-2 text-white hover:text-[var(--accent-primary)] transition-colors group"
                    >
                        View GitHub
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`group relative grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
                        >
                            {/* Image Side */}
                            <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden glass-card border-0 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                                <div className="absolute inset-0 bg-[var(--accent-primary)]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Side */}
                            <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                                <div className="text-[var(--accent-secondary)] font-mono text-sm mb-4 tracking-wider">0{index + 1}</div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk'] group-hover:text-[var(--accent-primary)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center gap-3 text-white font-bold text-lg group/link hover:text-[var(--accent-primary)] transition-colors"
                                >
                                    <span className="border-b-2 border-[var(--accent-primary)] pb-1 group-hover/link:border-transparent transition-colors">
                                        View Case Study
                                    </span>
                                    <svg className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
