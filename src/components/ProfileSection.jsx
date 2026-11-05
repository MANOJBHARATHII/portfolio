import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  MapPin, 
  Code2, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  RotateCcw,
  UserCheck
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProfileSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const infoRef = useRef(null);
  const fileInputRef = useRef(null);
  
  // Allow user to upload and persist their own picture in localStorage
  const [userImage, setUserImage] = useState(() => {
    return localStorage.getItem('manoj_portfolio_profile_img') || null;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for image card
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.94,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Entrance for info content
      gsap.from(infoRef.current.children, {
        x: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setUserImage(base64);
        localStorage.setItem('manoj_portfolio_profile_img', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = (e) => {
    e.stopPropagation();
    setUserImage(null);
    localStorage.removeItem('manoj_portfolio_profile_img');
  };

  return (
    <section
      id="profile"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#FFFBF0] text-[#1A1A1A] border-t border-[#E5E0D5] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-[5%] w-[400px] h-[400px] rounded-full bg-[#FFE135]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] rounded-full bg-[#3B82F6]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="w-8 h-[2px] bg-[#1A1A1A]" />
          <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase font-semibold">
            Persona & Profile
          </span>
          <span className="text-xs font-mono text-[#A0A0A0]">( SPOTLIGHT )</span>
        </div>

        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={cardRef}
              className="relative w-full max-w-[460px] group"
            >
              {/* Outer Editorial Polaroid Frame */}
              <div className="relative bg-white rounded-[2.5rem] border border-[#E5E0D5] p-5 pb-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-[#1A1A1A]">
                
                {/* Camera Viewfinder Header Tag */}
                <div className="flex items-center justify-between px-2 pb-4 text-[11px] font-mono text-[#6B6B6B]">
                  <span className="flex items-center gap-1.5 font-bold text-[#1A1A1A]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    PORTRAIT.RAW
                  </span>
                  <span>ISO 100 · 50mm f/1.4</span>
                </div>

                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#F5F0E1] via-[#FFFBF0] to-[#E5E0D5] border border-[#E5E0D5] flex items-center justify-center">
                  
                  {userImage ? (
                    /* User's uploaded picture */
                    <img
                      src={userImage}
                      alt="Manoj S - AI Developer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Stylized Default Editorial Illustration / Placeholder */
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#FFFBF0] via-[#F5F0E1] to-[#EBE5D5]">
                      {/* Geometric background patterns */}
                      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1A1A1A" strokeWidth="0.5" />
                          </pattern>
                          <rect width="100" height="100" fill="url(#grid-pattern)" />
                        </svg>
                      </div>

                      {/* Monogram Silhouette / Avatar */}
                      <div className="relative w-36 h-36 rounded-full bg-[#1A1A1A] text-[#FFE135] flex items-center justify-center shadow-xl border-4 border-white mb-6 group-hover:scale-105 transition-transform duration-500">
                        <span className="font-heading text-5xl font-black tracking-tight">MS</span>
                        <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#FFE135] text-[#1A1A1A] flex items-center justify-center shadow-md">
                          <Sparkles size={18} />
                        </div>
                      </div>

                      <h4 className="font-heading text-xl font-bold text-[#1A1A1A] tracking-tight mb-1">
                        Manoj S
                      </h4>
                      <p className="text-xs font-mono text-[#6B6B6B] tracking-wider uppercase mb-4">
                        AI Developer & Backend Engineer
                      </p>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E5E0D5] text-[10px] font-mono text-[#1A1A1A]">
                        <Camera size={12} className="text-[#3B82F6]" />
                        <span>Ready for your photo</span>
                      </div>
                    </div>
                  )}

                  {/* Corner Viewfinder Reticles */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#1A1A1A]/40 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#1A1A1A]/40 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#1A1A1A]/40 pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#1A1A1A]/40 pointer-events-none" />

                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {/* Bottom Bar: Action buttons & label */}
                <div className="mt-5 px-2 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-sm font-bold text-[#1A1A1A]">MANOJ S</p>
                    <p className="text-[10px] font-mono text-[#A0A0A0]">AI ENGINEER · CHENNAI/REMOTE</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {userImage && (
                      <button
                        onClick={handleResetImage}
                        title="Reset to default avatar"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#1A1A1A] text-xs transition-colors cursor-pointer"
                      >
                        <RotateCcw size={14} />
                      </button>
                    )}

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#FFE135] text-white hover:text-[#1A1A1A] text-xs font-semibold font-mono transition-colors duration-300 shadow-sm cursor-pointer"
                    >
                      <Upload size={13} />
                      <span>{userImage ? 'Change Photo' : 'Upload Photo'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Floating Accent Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#FFE135] text-[#1A1A1A] px-4 py-2 rounded-2xl shadow-lg border border-black/10 text-xs font-bold font-heading flex items-center gap-2">
                <UserCheck size={16} />
                <span>Verified AI Developer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Persona Info */}
          <div ref={infoRef} className="lg:col-span-7 space-y-8">
            
            {/* Tagline */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6] mb-2 block">
                THE PERSON BEHIND THE CODE
              </span>
              <h3 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[1.05]">
                ARCHITECTING AI WITH <br />
                <span className="italic font-light">PRECISION</span> & SPEED<span className="text-[#FFE135]">.</span>
              </h3>
            </div>

            {/* Editorial Paragraphs */}
            <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed font-light">
              Hi, I’m <strong className="text-[#1A1A1A] font-semibold">Manoj S</strong>. I specialize in bridging the gap between cutting-edge Artificial Intelligence models and scalable, production-ready backend systems. 
            </p>

            <p className="text-base text-[#6B6B6B] leading-relaxed font-light">
              Whether building resilient RAG document intelligence pipelines, fine-tuning classification models with TensorFlow, or crafting async FastAPI architectures, my focus is always on real-world impact, low latency, and deterministic reliability.
            </p>

            {/* Quote / Engineering Creed Callout */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E0D5] border-l-4 border-l-[#FFE135] shadow-sm">
              <p className="font-heading text-base md:text-lg font-medium text-[#1A1A1A] italic">
                “True AI engineering isn’t about wrapping an API—it’s about data ingestion, semantic vector ranking, prompt defense, and bulletproof microservice architecture.”
              </p>
              <p className="text-xs font-mono text-[#A0A0A0] mt-3 uppercase tracking-wider">
                — Manoj S · Engineering Philosophy
              </p>
            </div>

            {/* Quick Persona Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/70 border border-[#E5E0D5] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFE135]/20 flex items-center justify-center text-[#1A1A1A] shrink-0">
                  <Terminal size={18} />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-sm text-[#1A1A1A]">Primary Toolkit</h5>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">Python, FastAPI, LangChain, FAISS, PyTorch</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#E5E0D5] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Cpu size={18} />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-sm text-[#1A1A1A]">Core Speciality</h5>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">RAG Pipelines, Vision Models, Multi-Agent Systems</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#E5E0D5] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-sm text-[#1A1A1A]">Work Horizon</h5>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">India · Available Worldwide (Remote / Full-time)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#E5E0D5] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-sm text-[#1A1A1A]">Development Status</h5>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">Actively Building & Shipping Practical AI</p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FFE135] hover:text-[#1A1A1A] font-semibold text-sm transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Get In Touch With Manoj</span>
                <span>↗</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

