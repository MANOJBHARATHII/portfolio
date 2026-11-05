import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

/* ─── Abstract Visual Illustrations ─── */

const ResearchAssistantVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1] overflow-hidden flex items-center justify-center">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-[0.04]">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute border-l border-[#1a1a1a]"
          style={{ left: `${(i + 1) * 8}%`, top: 0, bottom: 0 }}
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute border-t border-[#1a1a1a]"
          style={{ top: `${(i + 1) * 12}%`, left: 0, right: 0 }}
        />
      ))}
    </div>

    {/* Floating document cards */}
    <div className="absolute top-[12%] left-[10%] w-28 h-36 bg-white rounded-xl border border-gray-200 shadow-sm p-3 rotate-[-6deg]">
      <div className="w-full h-1.5 bg-gray-200 rounded-full mb-2" />
      <div className="w-3/4 h-1.5 bg-gray-200 rounded-full mb-2" />
      <div className="w-full h-1.5 bg-gray-100 rounded-full mb-2" />
      <div className="w-2/3 h-1.5 bg-gray-100 rounded-full mb-4" />
      <div className="w-full h-8 bg-[#FFE135]/20 rounded-lg border border-[#FFE135]/30 flex items-center justify-center">
        <div className="w-6 h-1 bg-[#FFE135] rounded-full" />
      </div>
    </div>

    <div className="absolute bottom-[15%] right-[8%] w-24 h-32 bg-white rounded-xl border border-gray-200 shadow-sm p-3 rotate-[4deg]">
      <div className="w-full h-1.5 bg-gray-200 rounded-full mb-2" />
      <div className="w-2/3 h-1.5 bg-gray-200 rounded-full mb-2" />
      <div className="w-full h-1.5 bg-gray-100 rounded-full mb-2" />
      <div className="w-5/6 h-1.5 bg-gray-100 rounded-full" />
    </div>

    {/* Central AI search interface */}
    <div className="relative z-10 w-56 md:w-64">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-5">
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-[#FFFBF0] rounded-xl px-3 py-2.5 border border-gray-100 mb-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <div className="w-20 h-1.5 bg-gray-200 rounded-full" />
          <div className="ml-auto w-1.5 h-4 bg-[#FFE135] rounded-full animate-pulse" />
        </div>

        {/* Result items */}
        <div className="space-y-2.5">
          <div className="flex items-start gap-2 bg-[#FFE135]/10 rounded-lg p-2.5 border border-[#FFE135]/20">
            <div className="w-5 h-5 rounded bg-[#FFE135] flex-shrink-0 mt-0.5 flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#1a1a1a]">AI</span>
            </div>
            <div className="flex-1">
              <div className="w-full h-1.5 bg-[#1a1a1a]/10 rounded-full mb-1.5" />
              <div className="w-2/3 h-1 bg-[#1a1a1a]/5 rounded-full" />
            </div>
          </div>
          <div className="flex items-start gap-2 p-2.5">
            <div className="w-5 h-5 rounded bg-gray-100 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="w-5/6 h-1.5 bg-gray-100 rounded-full mb-1.5" />
              <div className="w-1/2 h-1 bg-gray-50 rounded-full" />
            </div>
          </div>
          <div className="flex items-start gap-2 p-2.5">
            <div className="w-5 h-5 rounded bg-gray-100 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="w-full h-1.5 bg-gray-100 rounded-full mb-1.5" />
              <div className="w-3/4 h-1 bg-gray-50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20%" y1="35%" x2="35%" y2="45%" stroke="#FFE135" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      <line x1="80%" y1="70%" x2="65%" y2="55%" stroke="#FFE135" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      <circle cx="20%" cy="35%" r="3" fill="#FFE135" opacity="0.6" />
      <circle cx="80%" cy="70%" r="3" fill="#FFE135" opacity="0.6" />
    </svg>
  </div>
);

const BreedsAIVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] overflow-hidden flex items-center justify-center">
    {/* Scan lines */}
    <div className="absolute inset-0 opacity-[0.03]">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-full border-t border-[#3B82F6]"
          style={{ top: `${i * 2.5}%` }}
        />
      ))}
    </div>

    {/* Camera frame / viewfinder */}
    <div className="relative z-10 w-52 h-52 md:w-60 md:h-60">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3B82F6] rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#3B82F6] rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#3B82F6] rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#3B82F6] rounded-br-lg" />

      {/* Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-px bg-[#3B82F6]/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-12 bg-[#3B82F6]/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-[#3B82F6] rounded-full" />
      </div>

      {/* Stylized animal silhouette (abstract) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-16 bg-[#3B82F6]/10 rounded-[50%_50%_40%_40%] border border-[#3B82F6]/20" />
        <div className="absolute -top-3 left-2 w-5 h-5 bg-[#3B82F6]/10 rounded-t-full border-t border-l border-r border-[#3B82F6]/20 rotate-[-15deg]" />
        <div className="absolute -top-3 right-2 w-5 h-5 bg-[#3B82F6]/10 rounded-t-full border-t border-l border-r border-[#3B82F6]/20 rotate-[15deg]" />
      </div>

      {/* Scanning line animation */}
      <div className="absolute left-2 right-2 h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent animate-pulse top-[40%]" />
    </div>

    {/* Breed labels floating */}
    <div className="absolute top-[12%] right-[10%] bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-[#3B82F6]/20 shadow-sm">
      <span className="text-[10px] font-semibold text-[#3B82F6] tracking-wider">GOLDEN RETRIEVER</span>
      <div className="text-[9px] text-gray-400 mt-0.5">98.4% confidence</div>
    </div>

    <div className="absolute bottom-[18%] left-[8%] bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-[#3B82F6]/20 shadow-sm">
      <span className="text-[10px] font-semibold text-[#3B82F6] tracking-wider">BREED ID</span>
      <div className="flex gap-1 mt-1">
        <div className="w-4 h-1 bg-[#3B82F6] rounded-full" />
        <div className="w-6 h-1 bg-[#3B82F6]/50 rounded-full" />
        <div className="w-3 h-1 bg-[#3B82F6]/25 rounded-full" />
      </div>
    </div>

    {/* Status indicator */}
    <div className="absolute top-[10%] left-[10%] flex items-center gap-1.5">
      <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
      <span className="text-[9px] text-[#3B82F6] font-mono tracking-wider">ANALYZING</span>
    </div>
  </div>
);

const DrowsinessVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] overflow-hidden flex items-center justify-center">
    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-10">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute border-l border-emerald-500"
          style={{ left: `${(i + 1) * 9}%`, top: 0, bottom: 0 }}
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute border-t border-emerald-500"
          style={{ top: `${(i + 1) * 12}%`, left: 0, right: 0 }}
        />
      ))}
    </div>

    {/* Camera viewfinder frame */}
    <div className="relative z-10 w-56 h-44 md:w-64 md:h-48">
      {/* Camera frame border */}
      <div className="absolute inset-0 border border-emerald-500/40 rounded-xl" />
      <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-emerald-400 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-emerald-400 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-emerald-400 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-emerald-400 rounded-br-xl" />

      {/* Face detection overlay (abstract face outline) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Face outline */}
        <div className="w-24 h-28 border border-dashed border-emerald-400/50 rounded-[50%]" />
        {/* Eye regions */}
        <div className="absolute top-[30%] left-[15%] w-7 h-3 border border-emerald-400 rounded-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-emerald-400/40 rounded-full" />
          </div>
        </div>
        <div className="absolute top-[30%] right-[15%] w-7 h-3 border border-emerald-400 rounded-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-emerald-400/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* EAR (Eye Aspect Ratio) indicator */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex items-center justify-between text-[8px] font-mono text-emerald-400/70 mb-1">
          <span>EAR</span>
          <span>0.28</span>
        </div>
        <div className="w-full h-1 bg-emerald-900/40 rounded-full overflow-hidden">
          <div className="w-[70%] h-full bg-emerald-400 rounded-full" />
        </div>
      </div>

      {/* REC indicator */}
      <div className="absolute top-3 right-3 flex items-center gap-1">
        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
        <span className="text-[8px] font-mono text-red-400">REC</span>
      </div>

      {/* FPS indicator */}
      <div className="absolute top-3 left-3">
        <span className="text-[8px] font-mono text-emerald-400/50">30 FPS</span>
      </div>
    </div>

    {/* Alert badge */}
    <div className="absolute bottom-[12%] right-[10%] bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-3 py-1.5">
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
        <span className="text-[10px] font-semibold text-emerald-400 tracking-wider">ALERT READY</span>
      </div>
    </div>

    {/* Status */}
    <div className="absolute top-[10%] left-[8%] bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-lg px-3 py-1.5">
      <span className="text-[10px] font-mono text-emerald-400 tracking-wider">MONITORING</span>
    </div>
  </div>
);

const MemoryOSVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1] overflow-hidden flex items-center justify-center">
    {/* Background radial dots */}
    <div className="absolute inset-0 opacity-[0.06]">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#1a1a1a] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>

    {/* Knowledge graph nodes */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {/* Connection lines */}
      <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#FFE135" strokeWidth="1" opacity="0.3" />
      <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#FFE135" strokeWidth="1" opacity="0.3" />
      <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#FFE135" strokeWidth="1" opacity="0.3" />
      <line x1="50%" y1="50%" x2="72%" y2="72%" stroke="#FFE135" strokeWidth="1" opacity="0.3" />
      <line x1="50%" y1="50%" x2="20%" y2="48%" stroke="#3B82F6" strokeWidth="1" opacity="0.2" />
      <line x1="50%" y1="50%" x2="80%" y2="52%" stroke="#3B82F6" strokeWidth="1" opacity="0.2" />
      <line x1="25%" y1="25%" x2="40%" y2="15%" stroke="#FFE135" strokeWidth="0.5" opacity="0.2" />
      <line x1="75%" y1="30%" x2="85%" y2="15%" stroke="#FFE135" strokeWidth="0.5" opacity="0.2" />

      {/* Sub-nodes */}
      <circle cx="40%" cy="15%" r="4" fill="#FFE135" opacity="0.3" />
      <circle cx="85%" cy="15%" r="4" fill="#FFE135" opacity="0.3" />
      <circle cx="20%" cy="48%" r="5" fill="#3B82F6" opacity="0.2" />
      <circle cx="80%" cy="52%" r="5" fill="#3B82F6" opacity="0.2" />
    </svg>

    {/* Central node */}
    <div className="relative z-10">
      <div className="w-20 h-20 bg-[#FFE135] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FFE135]/20 border border-[#FFE135]">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2a8.5 8.5 0 0 0-8.5 8.5c0 4.7 8.5 11.5 8.5 11.5s8.5-6.8 8.5-11.5A8.5 8.5 0 0 0 12 2z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
    </div>

    {/* Surrounding nodes */}
    <div className="absolute top-[20%] left-[20%] w-12 h-12 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    </div>

    <div className="absolute top-[25%] right-[20%] w-12 h-12 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>

    <div className="absolute bottom-[22%] left-[24%] w-12 h-12 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </div>

    <div className="absolute bottom-[22%] right-[20%] w-12 h-12 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFE135" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </div>

    {/* Floating thought bubble */}
    <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-2">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-[#FFE135]/30 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#FFE135] rounded-full" />
        </div>
        <div className="w-16 h-1.5 bg-gray-200 rounded-full" />
      </div>
    </div>

    {/* Memory tag */}
    <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-1.5">
      <span className="text-[9px] font-semibold text-gray-400 tracking-widest">KNOWLEDGE GRAPH</span>
    </div>
  </div>
);

const projectVisuals = {
  1: ResearchAssistantVisual,
  2: BreedsAIVisual,
  3: DrowsinessVisual,
  4: MemoryOSVisual,
};

/* ─── Projects Component ─── */

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Card animations
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-[#FFFBF0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 font-medium">
            Portfolio
          </p>
          <h2
            ref={headingRef}
            className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-[#1a1a1a] leading-[0.9] tracking-tight mb-6"
          >
            SELECTED
            <br />
            WORK
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            A collection of AI systems, intelligent applications and digital
            experiences I&apos;ve built.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {projects.map((project, index) => {
            const Visual = projectVisuals[project.id];
            const isEven = index % 2 !== 0;

            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.03]">
                  <div
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                    }`}
                  >
                    {/* Visual Area */}
                    <div className="relative lg:w-[55%] aspect-[4/3] lg:aspect-auto overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
                        {Visual && <Visual />}
                      </div>
                      {/* Project number overlay */}
                      <div
                        className={`absolute top-6 ${
                          isEven ? 'right-6' : 'left-6'
                        } z-20`}
                      >
                        <span className="text-7xl md:text-8xl font-heading font-bold text-[#1a1a1a]/[0.06] leading-none">
                          {project.number}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-[45%] p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                      {/* Category */}
                      <div className="mb-4">
                        <span
                          className="inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.15em] rounded-full border"
                          style={{
                            color: project.color === '#1A1A1A' ? '#fff' : project.color,
                            borderColor:
                              project.color === '#1A1A1A'
                                ? '#1a1a1a'
                                : project.color + '40',
                            backgroundColor:
                              project.color === '#1A1A1A'
                                ? '#1a1a1a'
                                : project.color + '10',
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4 leading-tight tracking-tight group-hover:text-[#1a1a1a] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 lg:mb-8">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#1a1a1a]/70 bg-[#FFFBF0] border border-gray-100 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 mt-auto">
                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors duration-200 group/btn"
                        >
                          View Project
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          />
                        </Link>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-gray-200 text-[#1a1a1a] px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                        >
                          <GithubIcon size={15} />
                          GitHub
                        </a>
                        {project.demo && project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full text-[#1a1a1a] hover:bg-gray-50 transition-colors duration-200"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
