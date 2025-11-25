'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
    caseStudy?: CaseStudy;
}

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white bg-black/50 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Hero Image */}
                        <div className="relative w-full h-64 md:h-80">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                        </div>

                        <div className="p-6 md:p-10 -mt-20 relative">
                            {/* Header */}
                            <div className="mb-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                                    {project.title}
                                </h2>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Case Study Content */}
                            {project.caseStudy && (
                                <div className="space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-white/5 rounded-xl p-6 border border-white/5"
                                    >
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <span className="text-[var(--accent-secondary)]">01.</span> The Challenge
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {project.caseStudy.challenge}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-white/5 rounded-xl p-6 border border-white/5"
                                    >
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <span className="text-[var(--accent-secondary)]">02.</span> The Solution
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {project.caseStudy.solution}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-white/5 rounded-xl p-6 border border-white/5"
                                    >
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <span className="text-[var(--accent-secondary)]">03.</span> Key Outcomes
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.caseStudy.outcomes.map((outcome, index) => (
                                                <li key={index} className="flex items-start gap-3 text-gray-400">
                                                    <svg className="w-5 h-5 text-[var(--accent-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            )}

                            {/* Footer Actions */}
                            <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                                >
                                    Visit Live Project
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
