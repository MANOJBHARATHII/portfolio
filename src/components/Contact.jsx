import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Send, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const email = 'manojofficial706@gmail.com';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-[#F5F0E1] text-[#1A1A1A] border-t border-[#E5E0D5] overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute -top-32 right-[5%] w-[450px] h-[450px] rounded-full bg-[#FFE135]/25 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-[5%] w-[350px] h-[350px] rounded-full bg-[#3B82F6]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E0D5] text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Available for Full-time Roles & Contracts</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A] leading-[0.95]">
            LET’S BUILD SOMETHING <br />
            <span className="italic font-light">INTELLIGENT</span> TOGETHER<span className="text-[#FFE135]">.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind, an AI concept to architect, or an open engineering role? I'd love to connect.
          </p>

          {/* Large Email Pill CTA with Copy functionality */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-4 px-8 py-5 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FFE135] hover:text-[#1A1A1A] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
            >
              <Mail size={20} className="text-[#FFE135] group-hover:text-[#1A1A1A] transition-colors" />
              <span className="font-mono text-sm sm:text-base font-semibold">{email}</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-5 rounded-full bg-white border border-[#E5E0D5] hover:border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Socials & Metadata Card */}
          <div className="mt-16 pt-12 border-t border-[#E5E0D5] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {/* Location */}
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-[#E5E0D5]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B6B] uppercase mb-2">
                <MapPin size={14} className="text-[#3B82F6]" />
                <span>Location</span>
              </div>
              <p className="font-heading font-bold text-base text-[#1A1A1A]">India (IST / UTC+5:30)</p>
              <p className="text-xs text-[#6B6B6B] mt-1">Available for Remote Worldwide</p>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-[#E5E0D5]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B6B] uppercase mb-2">
                <MessageCircle size={14} className="text-[#FFE135]" />
                <span>Connect</span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] hover:text-[#3B82F6] transition-colors"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>
                <span className="text-[#E5E0D5]">·</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] hover:text-[#3B82F6] transition-colors"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-[#E5E0D5]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B6B] uppercase mb-2">
                <Sparkles size={14} className="text-emerald-500" />
                <span>Response Time</span>
              </div>
              <p className="font-heading font-bold text-base text-[#1A1A1A]">Within 24 Hours</p>
              <p className="text-xs text-[#6B6B6B] mt-1">Direct developer access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
