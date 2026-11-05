import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Brain, 
  Search, 
  Zap, 
  Server, 
  MessageSquare, 
  Eye, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { services } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

const iconComponents = {
  Brain,
  Search,
  Zap,
  Server,
  MessageSquare,
  Eye,
};

const deliverablesMap = {
  1: ['Custom LLM Fine-tuning', 'Autonomous Agent Workflows', 'Multi-modal Interface'],
  2: ['Hybrid Sparse/Dense Search', 'Vector Chunking & Re-ranking', 'Contextual Grounding'],
  3: ['n8n & Zapier Orchestrations', 'Automated Scraping & Parsing', 'Async Task Queues'],
  4: ['FastAPI & Async Architecture', 'PostgreSQL & MongoDB Schemas', 'Dockerized Microservices'],
  5: ['Structured Output (Pydantic)', 'Guardrails & Prompt Defense', 'Streaming Responses'],
  6: ['OpenCV Real-time Pipelines', 'CNN & Vision Transformers', 'Edge Inference Optimization'],
};

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

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

      // Cards stagger
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: (index % 3) * 0.12,
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

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 bg-[#FFFBF0] text-[#1A1A1A] border-t border-[#E5E0D5]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={headingRef} className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFE135]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase font-semibold">
              Capabilities & Offerings
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A]">
                WHAT I BUILD<span className="text-[#FFE135]">.</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-[#6B6B6B] font-light leading-relaxed">
                From high-throughput Python backend microservices to state-of-the-art Generative AI applications and autonomous agents.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start lg:self-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#FFFBF0] text-sm font-semibold hover:bg-[#FFE135] hover:text-black transition-colors duration-300"
              >
                <span>Hire for a Project</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconComponents[service.icon] || Brain;
            const deliverables = deliverablesMap[service.id] || [];

            return (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative p-8 md:p-10 rounded-3xl bg-white border border-[#E5E0D5] hover:border-[#1A1A1A] transition-all duration-400 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading text-2xl font-light text-[#A0A0A0] group-hover:text-black transition-colors">
                      0{service.id}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-[#FFFBF0] border border-[#E5E0D5] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#FFE135] group-hover:border-transparent transition-all duration-300 group-hover:scale-105">
                      <Icon size={26} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-[#1A1A1A] mb-4 group-hover:text-[#1A1A1A]">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="pt-6 border-t border-[#E5E0D5]/60 space-y-2.5">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#A0A0A0] font-semibold mb-3">
                      Core Deliverables
                    </p>
                    {deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#1A1A1A] font-medium">
                        <CheckCircle2 size={14} className="text-[#3B82F6] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Indicator */}
                <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-[#1A1A1A] group-hover:text-[#3B82F6] transition-colors">
                  <span>Scope Architecture</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

