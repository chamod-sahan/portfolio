interface FooterProps {
    name: string;
}

export default function Footer({ name }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 border-t border-white/5 relative z-10 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-2">{name}</h2>
                        <p className="text-gray-500">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    {/* Copyright & Credit */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-500 mb-2">
                            © {currentYear} All rights reserved.
                        </p>
                        <p className="text-sm text-gray-600 flex items-center justify-center md:justify-end gap-2">
                            Designed & Built with <span className="text-[var(--accent-primary)]">♥</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
