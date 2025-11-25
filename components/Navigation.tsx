'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
    name: string;
}

export default function Navigation({ name }: NavigationProps) {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 300;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Work' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <div className="fixed z-50 w-full flex justify-center pointer-events-none bottom-6 md:bottom-auto md:top-6">
            <nav className={`glass-pill px-2 py-2 rounded-full pointer-events-auto transition-all duration-300 ${scrolled ? 'scale-100' : 'scale-105'}`}>
                <ul className="flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setActiveSection(link.href.substring(1))}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 block ${activeSection === link.href.substring(1)
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {activeSection === link.href.substring(1) && (
                                    <span className="absolute inset-0 bg-white/10 rounded-full -z-10 animate-pulse-soft" />
                                )}
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
