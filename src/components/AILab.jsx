import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Brain, 
  Search, 
  Bot, 
  Zap, 
  Eye, 
  MessageSquare, 
  Database, 
  Sparkles,
  Cpu,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';
import { aiLabItems } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'LLM APPLICATIONS': Brain,
  'RAG SYSTEMS': Search,
  'AI AGENTS': Bot,
  'AI AUTOMATION': Zap,
  'COMPUTER VISION': Eye,
  'NLP': MessageSquare,
  'VECTOR DATABASES': Database,
  'PROMPT ENGINEERING': Sparkles,
};

const AILab = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const canvasRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(headingRef.current.children, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: (index % 4) * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    // Lightweight interactive neural particle canvas
    let animationFrameId;
    let resizeHandler;
    const canvas = canvasRef.current;

    if (canvas && canvas.parentElement) {
      const ctx2d = canvas.getContext('2d');
      let width = (canvas.width = canvas.parentElement.offsetWidth || 800);
      let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

      resizeHandler = () => {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth || 800;
        height = canvas.height = canvas.parentElement.offsetHeight || 600;
      };
      window.addEventListener('resize', resizeHandler);

      const particles = Array.from({ length: 35 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        color: Math.random() > 0.4 ? '#FFE135' : '#3B82F6',
      }));

      const render = () => {
        ctx2d.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              ctx2d.beginPath();
              ctx2d.strokeStyle = `rgba(26, 26, 26, ${0.12 * (1 - dist / 120)})`;
              ctx2d.lineWidth = 0.8;
              ctx2d.moveTo(particles[i].x, particles[i].y);
              ctx2d.lineTo(particles[j].x, particles[j].y);
              ctx2d.stroke();
            }
          }
        }

        // Draw nodes
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx2d.beginPath();
          ctx2d.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx2d.fillStyle = p.color;
          ctx2d.shadowBlur = 4;
          ctx2d.shadowColor = p.color;
          ctx2d.fill();
        });

        animationFrameId = requestAnimationFrame(render);
      };

      render();
    }

    return () => {
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="ailab"
      ref={sectionRef}
      className="relative py-32 bg-[#FFFBF0] text-[#1A1A1A] overflow-hidden border-t border-[#E5E0D5]"
    >
      {/* Background Interactive Neural Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div ref={headingRef} className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-ping" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase font-semibold">
              Research & Development Sandbox
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A]">
                AI LAB<span className="text-[#3B82F6]">.</span>
              </h2>
              <p className="mt-3 text-lg md:text-xl font-medium tracking-wide text-[#6B6B6B] uppercase">
                EXPERIMENTING WITH INTELLIGENCE.
              </p>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-[#E5E0D5] text-xs font-mono text-[#6B6B6B]">
              <Activity size={14} className="text-[#3B82F6]" />
              <span>ACTIVE ARCHITECTURES: 8 DOMAINS</span>
            </div>
          </div>
        </div>

        {/* Central Live Metric & Lab Console Header */}
        <div className="mb-12 p-6 md:p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-[#E5E0D5] flex flex-wrap items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#FFE135]">
              <Terminal size={22} />
            </div>
            <div>
              <p className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider">System State</p>
              <h4 className="font-heading text-lg font-bold text-[#1A1A1A]">Neural Inference & Embeddings Node</h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[#6B6B6B]">Latency:</span>
              <span className="font-bold text-[#1A1A1A]">12ms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-[#6B6B6B]">Context Window:</span>
              <span className="font-bold text-[#1A1A1A]">128k Tokens</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFE135]" />
              <span className="text-[#6B6B6B]">Vector Dim:</span>
              <span className="font-bold text-[#1A1A1A]">1536 (Cosine)</span>
            </div>
          </div>
        </div>

        {/* Grid of Interactive Lab Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiLabItems.map((item, index) => {
            const Icon = iconMap[item.name] || Cpu;
            const isSelected = activeCard === index;

            return (
              <div
                key={item.name}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
                className={`group relative p-7 rounded-2xl border transition-all duration-400 cursor-pointer flex flex-col justify-between min-h-[260px] ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xl -translate-y-1.5'
                    : 'bg-white hover:bg-[#1A1A1A] hover:text-white border-[#E5E0D5] hover:border-[#1A1A1A] shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Top Row: Icon & Tag */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#FFE135] text-[#1A1A1A] rotate-3'
                        : 'bg-[#FFFBF0] group-hover:bg-[#FFE135] text-[#1A1A1A] border border-[#E5E0D5] group-hover:border-transparent group-hover:rotate-6'
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full transition-colors ${
                      isSelected
                        ? 'bg-white/10 text-[#FFE135]'
                        : 'bg-black/5 text-[#6B6B6B] group-hover:bg-white/10 group-hover:text-[#FFE135]'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="my-4">
                  <h3 className="font-heading text-lg font-bold tracking-tight mb-2">
                    {item.name}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed transition-colors ${
                      isSelected ? 'text-gray-300' : 'text-[#6B6B6B] group-hover:text-gray-300'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Status bar */}
                <div className="pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        index % 2 === 0 ? 'bg-emerald-400' : 'bg-[#3B82F6]'
                      }`}
                    />
                    <span>Production Ready</span>
                  </span>
                  <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Explore ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AILab;

