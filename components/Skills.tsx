interface Skill {
    name: string;
    level: number;
    icon: string;
    category: string;
}

interface SkillsProps {
    skills: Skill[];
    techStack: string[];
}

export default function Skills({ skills, techStack }: SkillsProps) {
    // Duplicate arrays for seamless infinite scroll
    const marqueeSkills = [...skills, ...skills, ...skills];
    const marqueeTech = [...techStack, ...techStack, ...techStack, ...techStack];

    return (
        <section id="skills" className="section py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[var(--accent-primary)]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                    Technical <span className="text-gradient-accent">Arsenal</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A curated stack of technologies I use to build scalable, high-performance applications.
                </p>
            </div>

            {/* Marquee 1 - Skills */}
            <div className="relative w-full py-10 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10"></div>

                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {marqueeSkills.map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="mx-4 glass-card px-8 py-4 rounded-full flex items-center gap-3 min-w-[200px] justify-center group hover:border-[var(--accent-primary)] transition-colors"
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                            <span className="font-medium text-lg text-gray-300 group-hover:text-white">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee 2 - Tech Stack (Reverse Direction) */}
            <div className="relative w-full py-4 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10"></div>

                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
                    {marqueeTech.map((tech, index) => (
                        <div
                            key={`${tech}-${index}`}
                            className="mx-3 px-6 py-2 border border-white/5 rounded-full text-gray-500 font-mono text-sm hover:text-[var(--accent-secondary)] hover:border-[var(--accent-secondary)]/30 transition-colors cursor-default"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
