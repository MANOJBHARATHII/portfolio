import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const badgeRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(tagRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.4 }
        )
        .fromTo(headlineRef.current.children,
          { y: 120, opacity: 0, skewY: 5 },
          { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.15 },
          '-=0.4'
        )
        .fromTo(subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.6'
        )
        .fromTo(ctaRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          '-=0.5'
        )
        .fromTo(visualRef.current,
          { scale: 0.8, opacity: 0, rotate: -5 },
          { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: 'power3.out' },
          '-=1'
        )
        .fromTo(badgeRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.5'
        );

      // Floating animation for visual element
      gsap.to(visualRef.current, {
        y: -15,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Badge floating
      gsap.to(badgeRef.current, {
        y: -8,
        x: 5,
        duration: 2.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-yellow/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-electric-blue/5 blur-[80px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <div ref={tagRef} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-border text-xs font-semibold tracking-[0.2em] text-gray uppercase">
                AI Developer / Python Backend / Creative Technologist
              </span>
            </div>

            {/* Headline */}
            <div ref={headlineRef} className="overflow-hidden">
              <h1 className="font-heading text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-black">
                <span className="block">BUILDING</span>
              </h1>
              <h1 className="font-heading text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-black">
                <span className="block">INTELLIGENT</span>
              </h1>
              <h1 className="font-heading text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.9] tracking-[-0.03em] text-black italic">
                <span className="block">DIGITAL</span>
              </h1>
              <h1 className="font-heading text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.03em]">
                <span className="block text-yellow-dark">EXPERIENCES<span className="text-black">.</span></span>
              </h1>
            </div>

            {/* Subtext */}
            <p ref={subRef} className="mt-8 max-w-xl text-lg md:text-xl text-gray leading-relaxed font-light">
              I'm <strong className="text-black font-semibold">Manoj S</strong> — an AI Developer focused on building intelligent applications, RAG systems, AI automation, and scalable backend solutions.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-8 py-4 bg-black text-cream rounded-full text-sm font-semibold hover:bg-yellow-dark hover:text-black transition-all duration-400 cursor-pointer"
              >
                VIEW MY WORK
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-8 py-4 border-2 border-black text-black rounded-full text-sm font-semibold hover:bg-black hover:text-cream transition-all duration-400 cursor-pointer"
              >
                LET'S CONNECT
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <div ref={visualRef} className="relative">
              {/* Main visual card */}
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Abstract AI Visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow/20 via-cream-dark to-electric-blue/10 rounded-[2rem] border border-gray-border overflow-hidden">
                  {/* Neural network pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFE135" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                    {/* Connection lines */}
                    <line x1="100" y1="80" x2="200" y2="150" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    <line x1="200" y1="150" x2="300" y2="100" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    <line x1="200" y1="150" x2="150" y2="280" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    <line x1="200" y1="150" x2="300" y2="250" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    <line x1="150" y1="280" x2="300" y2="250" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    <line x1="80" y1="200" x2="200" y2="150" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    <line x1="80" y1="200" x2="150" y2="280" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    <line x1="300" y1="100" x2="350" y2="200" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    <line x1="350" y1="200" x2="300" y2="250" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                    {/* Nodes */}
                    <circle cx="100" cy="80" r="8" fill="url(#nodeGrad)" />
                    <circle cx="200" cy="150" r="12" fill="#FFE135" />
                    <circle cx="300" cy="100" r="6" fill="#3B82F6" />
                    <circle cx="150" cy="280" r="10" fill="#FFE135" />
                    <circle cx="300" cy="250" r="8" fill="url(#nodeGrad)" />
                    <circle cx="80" cy="200" r="6" fill="#3B82F6" />
                    <circle cx="350" cy="200" r="7" fill="#FFE135" />
                  </svg>

                  {/* Floating UI cards */}
                  <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-border shadow-sm">
                    <div className="text-[10px] font-semibold text-gray uppercase tracking-wider mb-1">AI Model</div>
                    <div className="text-sm font-bold text-black">LLM Pipeline</div>
                    <div className="mt-2 flex gap-1">
                      <div className="w-8 h-1 rounded-full bg-yellow" />
                      <div className="w-6 h-1 rounded-full bg-yellow/50" />
                      <div className="w-4 h-1 rounded-full bg-yellow/30" />
                    </div>
                  </div>

                  <div className="absolute bottom-12 right-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-border shadow-sm">
                    <div className="text-[10px] font-semibold text-gray uppercase tracking-wider mb-1">Vector Search</div>
                    <div className="text-sm font-bold text-black">FAISS Index</div>
                    <div className="mt-2 grid grid-cols-3 gap-1">
                      <div className="w-4 h-4 rounded bg-electric-blue/20" />
                      <div className="w-4 h-4 rounded bg-electric-blue/40" />
                      <div className="w-4 h-4 rounded bg-electric-blue/60" />
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-cream rounded-2xl p-6 border border-gray-border shadow-lg">
                    <div className="text-[10px] font-semibold text-yellow uppercase tracking-wider mb-2">RAG System</div>
                    <div className="font-heading text-lg font-bold">Query → Retrieve → Generate</div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-gray-light">Active Pipeline</span>
                    </div>
                  </div>

                  {/* Code fragment */}
                  <div className="absolute bottom-8 left-8 bg-black/90 rounded-lg p-3 font-mono text-[10px] text-green-400 max-w-[180px]">
                    <span className="text-electric-blue-light">from</span> langchain <span className="text-electric-blue-light">import</span><br />
                    &nbsp;&nbsp;ChatOpenAI<br />
                    <span className="text-gray-light"># Initialize RAG</span>
                  </div>

                  {/* Geometric shapes */}
                  <div className="absolute top-16 right-16 w-16 h-16 border-2 border-yellow rounded-full opacity-30" />
                  <div className="absolute bottom-32 left-24 w-8 h-8 bg-yellow/30 rounded rotate-45" />
                </div>
              </div>
            </div>

            {/* Available badge */}
            <div ref={badgeRef} className="absolute -top-4 -right-4 lg:top-0 lg:-right-8">
              <div className="flex items-center gap-2 bg-black text-cream px-5 py-3 rounded-full text-xs font-semibold shadow-lg">
                <Sparkles size={14} className="text-yellow" />
                AVAILABLE FOR OPPORTUNITIES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-gray uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gray/30 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-black animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
