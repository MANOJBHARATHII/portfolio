import React from 'react';
import { ArrowUp, ArrowUpRight, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Profile', id: 'profile' },
    { name: 'Skills', id: 'skills' },
    { name: 'Work', id: 'projects' },
    { name: 'AI Lab', id: 'ailab' },
    { name: 'Services', id: 'services' },
    { name: 'Journey', id: 'career' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#FFFBF0] pt-20 pb-12 rounded-t-[2.5rem] md:rounded-t-[3.5rem] relative overflow-hidden">
      {/* Background ambient pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE135]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-16 border-b border-white/10">
          <div>
            <h3 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-white">
              MANOJ S<span className="text-[#FFE135]">.</span>
            </h3>
            <p className="mt-2 text-sm text-[#A0A0A0] font-light max-w-md">
              AI Developer & Python Backend Engineer specializing in generative AI, RAG systems, and intelligent digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs sm:text-sm font-mono text-[#A0A0A0] hover:text-[#FFE135] transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/20 hover:border-[#FFE135] flex items-center justify-center text-white hover:text-[#FFE135] hover:bg-white/5 transition-all duration-300 group cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#A0A0A0]">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Manoj S. All rights reserved.</p>
            <span className="text-white/20">|</span>
            <p className="hidden sm:inline">Crafted with React, Tailwind CSS & GSAP</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href="mailto:manojofficial706@gmail.com"
              className="text-[#FFE135] hover:underline"
            >
              manojofficial706@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
