"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

interface ContactInfo {
    email: string;
    location: string;
    social: {
        github: string;
        linkedin: string;
        twitter: string;
    };
}

interface ContactProps {
    contactInfo: ContactInfo;
}

export default function Contact({ contactInfo }: ContactProps) {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('sending');

        // Replace these with your actual EmailJS service ID, template ID, and public key
        // You can get these from https://dashboard.emailjs.com/
        emailjs.sendForm(
            'service_lo2pox8',
            'template_mwymcsg',
            form.current,
            'qTPqFf-ptxYOUwpQH'
        )
            .then((result) => {
                setStatus('success');
                form.current?.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="section py-32 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left Column: Text & Info */}
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] mb-8 leading-tight">
                            Let's start a <br />
                            <span className="text-gradient-accent">conversation</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                            Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <div className="group">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Email Me</h3>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-2xl md:text-3xl font-medium text-white hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-2"
                                >
                                    {contactInfo.email}
                                    <svg className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>

                            <div>
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Based In</h3>
                                <p className="text-2xl md:text-3xl font-medium text-white">
                                    {contactInfo.location}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Connect</h3>
                                <div className="flex gap-4">
                                    {[
                                        { name: 'GitHub', url: contactInfo.social.github },
                                        { name: 'LinkedIn', url: contactInfo.social.linkedin },
                                        { name: 'Twitter', url: contactInfo.social.twitter }
                                    ].map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            className="px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all font-medium"
                                        >
                                            {social.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: EmailJS Form */}
                    <div className="lg:pt-10">
                        <form ref={form} onSubmit={sendEmail} className="space-y-10">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[var(--accent-primary)] transition-colors">What's your name?</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-[var(--accent-primary)] transition-colors placeholder-white/10"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="email" className="block text-sm text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[var(--accent-primary)] transition-colors">What's your email?</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-[var(--accent-primary)] transition-colors placeholder-white/10"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-sm text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[var(--accent-primary)] transition-colors">Your message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none placeholder-white/10"
                                    placeholder="Hello Sahan, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full py-5 font-bold text-lg rounded-xl transition-all shadow-lg ${status === 'sending'
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : status === 'success'
                                        ? 'bg-green-500 text-white'
                                        : status === 'error'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)] shadow-[var(--accent-primary)]/20'
                                    }`}
                            >
                                {status === 'sending' ? 'Sending...' :
                                    status === 'success' ? 'Message Sent Successfully!' :
                                        status === 'error' ? 'Failed to Send. Try Again.' :
                                            'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
