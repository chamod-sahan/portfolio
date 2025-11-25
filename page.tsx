import AuroraBackground from '@/components/AuroraBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { personalInfo, skills, techStack, projects } from '@/data/portfolio-data';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[var(--bg-dark)] text-white selection:bg-[var(--accent-primary)] selection:text-white">
      {/* Aurora Background Effects */}
      <AuroraBackground />

      {/* Navigation */}
      <Navigation name={personalInfo.name} />

      <main>
        {/* Hero Section */}
        <Hero
          name={personalInfo.name}
          title={personalInfo.title}
          tagline={personalInfo.tagline}
        />

        {/* About Section */}
        <About
          bio={personalInfo.bio}
          stats={personalInfo.stats}
          experience={personalInfo.experience}
          education={personalInfo.education}
        />

        {/* Skills Section */}
        <Skills
          skills={skills}
          techStack={techStack}
        />

        {/* Projects Section */}
        <Projects projects={projects} />

        {/* Contact Section */}
        <Contact contactInfo={personalInfo.contact} />
      </main>

      {/* Footer */}
      <Footer name={personalInfo.name} />
    </div>
  );
}
