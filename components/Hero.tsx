import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
    name: string;
    title: string;
    tagline: string;
}

export default function Hero({ name, title, tagline }: HeroProps) {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="aurora-blob w-[500px] h-[500px] bg-[var(--accent-primary)] top-[-10%] left-[-10%] opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="aurora-blob w-[400px] h-[400px] bg-[var(--accent-secondary)] bottom-[10%] right-[-5%] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="aurora-blob w-[300px] h-[300px] bg-[var(--accent-tertiary)] top-[20%] right-[20%] opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Availability Badge */}
                    <div className="mb-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-[var(--accent-primary)]/30">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-300">Available for new projects</span>
                        </div>
                    </div>

                    {/* Main Typography */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-['Space_Grotesk'] tracking-tight mb-6 leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                            Building
                        </span>
                        <span className="block text-gradient-accent">
                            Digital
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                            Experiences
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        I'm <span className="text-white font-medium">{name}</span>, a {title}.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <Link
                            href="#projects"
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View My Work
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </Link>

                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            Contact Me
                        </Link>

                        <a
                            href="/resume.pdf"
                            download="Sahan_Chamod_CV.pdf"
                            className="px-8 py-4 rounded-full font-bold text-lg text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/10 transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download CV
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
