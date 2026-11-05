import { useEffect, useRef } from 'react';
import { experiences } from '../data/skills';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const headingRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(subRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Timeline line draw animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        }
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Dots scale animation
      dotsRef.current.forEach((dot) => {
        if (!dot) return;
        gsap.from(dot, {
          scale: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: dot,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-[#FFFBF0]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="mb-20 md:mb-28">
          <p
            ref={subRef}
            className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 font-medium"
          >
            Professional Path
          </p>
          <h2
            ref={headingRef}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-[0.9] tracking-tight"
          >
            THE
            <br />
            JOURNEY
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="absolute inset-0 bg-gray-200" />
            <div
              ref={lineRef}
              className="absolute inset-0 bg-[#1a1a1a] origin-top"
              style={{ transformOrigin: 'top center' }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative"
              >
                {/* Timeline Dot */}
                <div
                  ref={(el) => (dotsRef.current[index] = el)}
                  className="absolute left-6 md:left-1/2 top-8 z-10 -translate-x-1/2"
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? 'bg-emerald-400 border-emerald-400'
                        : 'bg-[#FFFBF0] border-[#1a1a1a]'
                    }`}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`relative ml-16 md:ml-0 ${
                    index % 2 === 0
                      ? 'md:mr-[calc(50%+2rem)] md:pr-4'
                      : 'md:ml-[calc(50%+2rem)] md:pl-4'
                  }`}
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 lg:p-10 hover:border-gray-300 transition-colors duration-300 group">
                    {/* Current Badge */}
                    {exp.current && (
                      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4 border border-emerald-100">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        CURRENT
                      </div>
                    )}

                    {/* Role Title */}
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-2 leading-tight tracking-tight">
                      {exp.title}
                    </h3>

                    {/* Company & Duration */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      {exp.company && (
                        <span className="text-base md:text-lg text-gray-500 font-medium">
                          {exp.company}
                        </span>
                      )}
                      {exp.company && exp.duration && (
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      )}
                      {exp.duration && (
                        <span className="text-sm text-gray-400 font-medium tracking-wide">
                          {exp.duration}
                        </span>
                      )}
                    </div>

                    {/* Focus Areas */}
                    <div className="flex flex-wrap gap-2">
                      {exp.focus.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium tracking-wide text-[#1a1a1a] border border-gray-200 rounded-full hover:bg-[#FFE135] hover:border-[#FFE135] transition-colors duration-200 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End Cap */}
          <div className="absolute left-6 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-4">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
