import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, ShoppingBag, Code, BrainCircuit, Rocket, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    step: '01',
    phase: 'DISCOVERY',
    year: '2022 - 2023',
    icon: Compass,
    title: 'Foundations & Algorithmic Thinking',
    description: 'Began programming with Python, data structures, and computer science fundamentals. Built early automation scripts and explored mathematical underpinnings of machine learning.',
    skills: ['Python', 'Data Structures', 'Git', 'Problem Solving'],
    status: 'Completed',
  },
  {
    step: '02',
    phase: 'E-COMMERCE',
    year: 'Quartr Design',
    icon: ShoppingBag,
    title: 'E-commerce Developer Intern',
    description: 'Worked on modern storefronts, custom theme architecture, client-facing optimizations, and responsive conversion-driven user experiences.',
    skills: ['Shopify', 'Liquid', 'Theme Customization', 'UI Design'],
    status: 'Completed',
  },
  {
    step: '03',
    phase: 'FRONTEND',
    year: 'Archaelix',
    icon: Code,
    title: 'React.js Developer Intern',
    description: 'Engineered high-performance web applications using React.js, Tailwind CSS, and interactive GSAP animations with focus on seamless digital experiences.',
    skills: ['React.js', 'Tailwind CSS', 'GSAP', 'Component Architecture'],
    status: 'Completed',
  },
  {
    step: '04',
    phase: 'AI & ML EXPANSION',
    year: 'Specialization',
    icon: BrainCircuit,
    title: 'Machine Learning & Deep Learning',
    description: 'Transitioned deep into Artificial Intelligence: trained Computer Vision classifiers (VGG19, MobileNetV2), developed NLP pipelines, and experimented with neural networks.',
    skills: ['TensorFlow', 'OpenCV', 'Scikit-Learn', 'Deep Learning'],
    status: 'Completed',
  },
  {
    step: '05',
    phase: 'PRESENT',
    year: 'Current Focus',
    icon: Rocket,
    title: 'AI Developer & Backend Architect',
    description: '5+ months hands-on experience developing enterprise RAG pipelines, autonomous agents, FastAPI microservices, and LLM-powered end-to-end applications.',
    skills: ['FastAPI', 'LangChain', 'FAISS / Vector DBs', 'LLMs & RAG'],
    status: 'Active',
    current: true,
  },
];

const CareerJourney = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
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

      // Cards horizontal stagger reveal
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: i * 0.12,
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
      id="career"
      ref={sectionRef}
      className="relative py-32 bg-[#FFFBF0] text-[#1A1A1A] border-t border-[#E5E0D5]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={headingRef} className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase font-semibold">
              Evolution & Milestones
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A]">
                CAREER JOURNEY<span className="text-[#3B82F6]">.</span>
              </h2>
              <p className="mt-3 text-lg md:text-xl font-medium tracking-wide text-[#6B6B6B] uppercase">
                FROM CURIOSITY TO CREATION — MY PATH IN TECH.
              </p>
            </div>

            <div className="text-xs font-mono text-[#6B6B6B] bg-white px-4 py-2 rounded-full border border-[#E5E0D5]">
              PROGRESSION TRACKER · 2022 → PRESENT
            </div>
          </div>
        </div>

        {/* Milestone Steps Timeline Grid */}
        <div
          ref={stepsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative"
        >
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isCurrent = step.current;

            return (
              <div
                key={step.step}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative p-6 rounded-3xl border transition-all duration-400 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#FFE135]/15 border-[#FFE135] shadow-lg shadow-[#FFE135]/20 ring-1 ring-[#FFE135]'
                    : 'bg-white border-[#E5E0D5] hover:border-[#1A1A1A] hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                        isCurrent
                          ? 'bg-[#1A1A1A] text-[#FFE135]'
                          : 'bg-[#FFFBF0] text-[#6B6B6B] border border-[#E5E0D5]'
                      }`}
                    >
                      STEP {step.step}
                    </span>

                    {isCurrent ? (
                      <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#1A1A1A] bg-[#FFE135] px-2.5 py-0.5 rounded-full animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        ACTIVE
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-[#A0A0A0]">
                        {step.year}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                      isCurrent
                        ? 'bg-[#1A1A1A] text-[#FFE135]'
                        : 'bg-[#FFFBF0] text-[#1A1A1A] border border-[#E5E0D5]'
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Phase & Title */}
                  <p className="text-[11px] font-mono tracking-widest text-[#6B6B6B] uppercase mb-1 font-semibold">
                    {step.phase}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-[#1A1A1A] leading-snug mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6B6B6B] leading-relaxed mb-6 font-light">
                    {step.description}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-black/5">
                  <div className="flex flex-wrap gap-1.5">
                    {step.skills.map((s, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
                          isCurrent
                            ? 'bg-[#1A1A1A]/10 text-[#1A1A1A]'
                            : 'bg-black/5 text-[#6B6B6B]'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
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

export default CareerJourney;

