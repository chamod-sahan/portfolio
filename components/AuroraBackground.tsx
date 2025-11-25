'use client';

import { useEffect } from 'react';

export default function AuroraBackground() {
    useEffect(() => {
        // Generate stars for starfield
        const starfield = document.querySelector('.starfield');
        if (starfield && starfield.children.length === 0) {
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                starfield.appendChild(star);
            }
        }

        // Generate aurora particles
        const particlesContainer = document.querySelector('.aurora-particles');
        if (particlesContainer && particlesContainer.children.length === 0) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'aurora-particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 15}s`;
                particlesContainer.appendChild(particle);
            }
        }
    }, []);

    return (
        <>
            {/* Starfield Background */}
            <div className="starfield"></div>

            {/* Aurora Borealis (Northern Lights) */}
            <div className="aurora-north"></div>

            {/* Aurora Australis (Southern Lights) */}
            <div className="aurora-south"></div>

            {/* Aurora Particles */}
            <div className="aurora-particles"></div>
        </>
    );
}
