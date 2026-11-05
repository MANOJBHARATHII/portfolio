import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '5+', numericValue: 5, label: 'MONTHS AI DEVELOPMENT EXPERIENCE', suffix: '+' },
  { value: '3+', numericValue: 3, label: 'MAJOR AI PROJECTS', suffix: '+' },
  { value: '7.65/10', numericValue: 7.65, label: 'CGPA', suffix: '/10', decimal: true },
  { value: 'AI + BACKEND', label: 'CORE FOCUS', isText: true },
];

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef(null);
  const statsRef = useRef([]);
  const counterRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal animation
      const headingChars = headingRef.current.querySelectorAll('.word');
      gsap.set(headingChars, { y: 120, opacity: 0, rotateX: -40 });
      gsap.to(headingChars, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Paragraphs reveal
      const paragraphs = paragraphsRef.current.querySelectorAll('.about-paragraph');
      gsap.set(paragraphs, { y: 60, opacity: 0 });
      gsap.to(paragraphs, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: paragraphsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Stats cards reveal with counter animation
      statsRef.current.forEach((statEl, index) => {
        if (!statEl) return;

        gsap.set(statEl, { y: 50, opacity: 0, scale: 0.95 });
        gsap.to(statEl, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: statEl,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });

        // Counter animation for numeric stats
        const stat = stats[index];
        if (!stat.isText && counterRefs.current[index]) {
          const counterEl = counterRefs.current[index];
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.numericValue,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statEl,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            onUpdate: () => {
              if (stat.decimal) {
                counterEl.textContent = obj.val.toFixed(2) + (stat.suffix || '');
              } else {
                counterEl.textContent = Math.floor(obj.val) + (stat.suffix || '');
              }
            },
          });
        }
      });

      // Decorative line animation
      const decorLine = sectionRef.current.querySelector('.decor-line');
      if (decorLine) {
        gsap.set(decorLine, { scaleX: 0 });
        gsap.to(decorLine, {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = ['I', 'TURN', 'IDEAS', 'INTO', 'INTELLIGENT', 'SYSTEMS.'];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-[#FFFBF0] py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#FFE135]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="inline-block w-8 h-[2px] bg-[#1a1a1a]" />
          <span className="text-xs tracking-[0.3em] text-[#1a1a1a]/60 font-medium uppercase">
            About Me
          </span>
          <span className="text-xs text-[#1a1a1a]/30 font-mono">( 01 )</span>
        </div>

        {/* Main split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left side - Large editorial heading */}
          <div className="lg:col-span-5" ref={headingRef} style={{ perspective: '1000px' }}>
            <h2 className="font-heading font-bold text-[#1a1a1a] leading-[0.95] tracking-tight">
              {headingWords.map((word, i) => (
                <span
                  key={i}
                  className="word inline-block mr-[0.3em]"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    transformOrigin: 'bottom left',
                  }}
                >
                  {word === 'INTELLIGENT' ? (
                    <span className="text-[#3B82F6]">{word}</span>
                  ) : word === 'IDEAS' ? (
                    <span className="relative">
                      {word}
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#FFE135]" />
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h2>
          </div>

          {/* Right side - Description + Stats */}
          <div className="lg:col-span-7 lg:pl-8">
            <div ref={paragraphsRef}>
              <p className="about-paragraph text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed mb-6 max-w-xl">
                I'm Manoj — an <span className="text-[#1a1a1a] font-semibold">AI Developer</span> and{' '}
                <span className="text-[#1a1a1a] font-semibold">Python Backend Developer</span> who
                thrives at the intersection of artificial intelligence and software engineering.
                I build intelligent systems that solve real problems, from RAG pipelines to
                full-stack AI applications.
              </p>
              <p className="about-paragraph text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                With experience across LLMs, computer vision, and backend architecture, I
                craft end-to-end solutions that are not just technically sound but genuinely
                useful. I believe in building things that matter — clean code, smart
                architecture, and AI that actually works.
              </p>
            </div>

            {/* Decorative line */}
            <div className="decor-line h-[1px] bg-[#1a1a1a]/10 mb-12 origin-left" />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="group relative border border-[#1a1a1a]/10 rounded-2xl p-6 md:p-8 bg-white/50 backdrop-blur-sm hover:border-[#FFE135] hover:bg-[#FFE135]/5 transition-all duration-500 cursor-default"
                >
                  {/* Subtle corner accent */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#FFE135]/40 group-hover:bg-[#FFE135] transition-colors duration-500" />

                  <div
                    ref={(el) => (counterRefs.current[index] = el)}
                    className="font-heading font-bold text-[#1a1a1a] mb-3 leading-none"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
                  >
                    {stat.isText ? stat.value : '0'}
                  </div>
                  <div className="text-[10px] md:text-xs tracking-[0.15em] text-[#1a1a1a]/50 font-medium uppercase leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
