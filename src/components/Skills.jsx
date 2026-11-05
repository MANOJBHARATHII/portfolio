import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

const AI_CATEGORIES = ['ai'];

const Skills = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const titleRef = useRef(null);
  const mobileListRef = useRef(null);
  const skillItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.set(titleRef.current, { y: 80, opacity: 0 });
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Desktop horizontal scroll
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const scrollWidth = scrollContainer.scrollWidth;
        const viewWidth = window.innerWidth;

        const horizontalScroll = gsap.to(scrollContainer, {
          x: -(scrollWidth - viewWidth + 100),
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: () => `+=${scrollWidth - viewWidth + 200}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Stagger skill items entry
        skillItemsRef.current.forEach((item, index) => {
          if (!item) return;
          gsap.set(item, { opacity: 0.3 });
          gsap.to(item, {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: item,
              containerAnimation: horizontalScroll,
              start: 'left 80%',
              end: 'left 30%',
              scrub: true,
            },
          });
        });

        return () => {
          horizontalScroll.kill();
        };
      });

      // Mobile: staggered vertical reveal
      mm.add('(max-width: 767px)', () => {
        const mobileItems = mobileListRef.current?.querySelectorAll('.skill-mobile-item');
        if (mobileItems) {
          gsap.set(mobileItems, { x: -40, opacity: 0 });
          gsap.to(mobileItems, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.05,
            scrollTrigger: {
              trigger: mobileListRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const isAI = (category) => AI_CATEGORIES.includes(category);

  return (
    <section id="skills" ref={sectionRef} className="relative bg-[#FFFBF0] overflow-hidden">
      {/* Desktop horizontal scroll version */}
      <div ref={triggerRef} className="hidden md:block">
        {/* Pinned container */}
        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Background decorative */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#FFE135]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl" />
          </div>

          {/* Title area */}
          <div className="px-10 lg:px-16 pt-20 pb-12" ref={titleRef}>
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block w-8 h-[2px] bg-[#1a1a1a]" />
              <span className="text-xs tracking-[0.3em] text-[#1a1a1a]/60 font-medium uppercase">
                Skills & Tools
              </span>
              <span className="text-xs text-[#1a1a1a]/30 font-mono">( 02 )</span>
            </div>
            <h2
              className="font-heading font-bold text-[#1a1a1a] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              TOOLS I BUILD WITH
            </h2>
            <p className="mt-4 text-[#1a1a1a]/50 text-sm tracking-[0.2em] uppercase">
              Scroll to explore →
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 px-10 lg:px-16 pb-20 will-change-transform"
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center shrink-0">
                <div
                  ref={(el) => (skillItemsRef.current[index] = el)}
                  className="group relative shrink-0 cursor-default select-none"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 -mx-4 -my-3 rounded-2xl bg-[#FFE135]/0 group-hover:bg-[#FFE135]/20 transition-all duration-500 scale-95 group-hover:scale-100" />

                  <span
                    className="relative inline-block font-heading font-bold text-[#1a1a1a] whitespace-nowrap transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                    style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
                  >
                    {skill.name}
                  </span>

                  {/* Category indicator dot */}
                  <span
                    className={`absolute -top-1 -right-3 w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
                      isAI(skill.category) ? 'bg-[#3B82F6]' : 'bg-[#FFE135]'
                    }`}
                  />

                  {/* Hover label */}
                  <span className="absolute -bottom-6 left-0 text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/0 group-hover:text-[#1a1a1a]/50 transition-all duration-500 whitespace-nowrap">
                    {skill.category}
                  </span>
                </div>

                {/* Separator */}
                {index < skills.length - 1 && (
                  <span
                    className="shrink-0 mx-6 lg:mx-8 text-[#1a1a1a]/15 font-light select-none"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
                  >
                    /
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Bottom legend */}
          <div className="absolute bottom-8 left-10 lg:left-16 flex items-center gap-6 text-xs text-[#1a1a1a]/40">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="tracking-[0.15em] uppercase">AI / ML</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFE135]" />
              <span className="tracking-[0.15em] uppercase">Dev Tools</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked version */}
      <div className="md:hidden px-6 py-24">
        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block w-8 h-[2px] bg-[#1a1a1a]" />
            <span className="text-xs tracking-[0.3em] text-[#1a1a1a]/60 font-medium uppercase">
              Skills & Tools
            </span>
          </div>
          <h2 className="font-heading font-bold text-[#1a1a1a] text-4xl tracking-tight leading-none">
            TOOLS I BUILD WITH
          </h2>
        </div>

        {/* Mobile legend */}
        <div className="flex items-center gap-6 text-xs text-[#1a1a1a]/40 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <span className="tracking-[0.15em] uppercase">AI / ML</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFE135]" />
            <span className="tracking-[0.15em] uppercase">Dev Tools</span>
          </div>
        </div>

        {/* Stacked skill list */}
        <div ref={mobileListRef} className="space-y-1">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-mobile-item group flex items-center justify-between py-4 border-b border-[#1a1a1a]/5 cursor-default"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isAI(skill.category) ? 'bg-[#3B82F6]' : 'bg-[#FFE135]'
                  }`}
                />
                <span className="font-heading font-bold text-[#1a1a1a] text-xl tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/30">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
