import Image from 'next/image';

interface Stat {
    icon: string;
    value: string;
    label: string;
}

interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

interface Education {
    institution: string;
    degree: string;
    period: string;
}

interface AboutProps {
    bio: string[];
    stats: Stat[];
    experience?: Experience[];
    education?: Education[];
}

export default function About({ bio, stats, experience, education }: AboutProps) {
    return (
        <section id="about" className="section py-32 relative">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
                        About <span className="text-gradient-accent">Me</span>
                    </h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Bio Card - Spans 2 columns */}
                    <div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-primary)] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

                        <h3 className="text-2xl font-bold mb-6 text-white">The Developer</h3>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                            {bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Avatar Card */}
                    <div className="glass-card rounded-3xl p-6 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-48 h-48 md:w-full md:h-full min-h-[250px]">
                            <Image
                                src="/avatar-soul-closeup.png"
                                alt="Avatar"
                                fill
                                className="object-cover object-top rounded-2xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Stats Cards */}
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-[var(--accent-primary)]/10 transition-colors">
                            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                            <div className="text-3xl font-bold text-white mb-2 font-['Space_Grotesk']">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}

                    {/* Experience & Education Section (New) */}
                    {experience && (
                        <div className="md:col-span-3 glass-card rounded-3xl p-8 md:p-10">
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <span className="text-3xl">💼</span> Experience & Education
                            </h3>

                            <div className="grid md:grid-cols-2 gap-10">
                                {/* Experience Column */}
                                <div className="space-y-8">
                                    <h4 className="text-xl font-bold text-[var(--accent-secondary)] mb-4">Experience</h4>
                                    {experience.map((exp, index) => (
                                        <div key={index} className="relative pl-6 border-l-2 border-white/10">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent-primary)]"></div>
                                            <h5 className="text-lg font-bold text-white">{exp.role}</h5>
                                            <p className="text-[var(--accent-secondary)] font-medium mb-2">{exp.company} | {exp.period}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Education Column */}
                                <div className="space-y-8">
                                    <h4 className="text-xl font-bold text-[var(--accent-tertiary)] mb-4">Education</h4>
                                    {education?.map((edu, index) => (
                                        <div key={index} className="relative pl-6 border-l-2 border-white/10">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent-tertiary)]"></div>
                                            <h5 className="text-lg font-bold text-white">{edu.degree}</h5>
                                            <p className="text-[var(--accent-tertiary)] font-medium mb-2">{edu.institution}</p>
                                            <p className="text-gray-400 text-sm">{edu.period}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
