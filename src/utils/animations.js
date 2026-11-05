import gsap from 'gsap';

export const fadeInUp = (element, delay = 0, duration = 1) => {
  return gsap.fromTo(element,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration, delay, ease: 'power3.out' }
  );
};

export const fadeIn = (element, delay = 0, duration = 1) => {
  return gsap.fromTo(element,
    { opacity: 0 },
    { opacity: 1, duration, delay, ease: 'power2.out' }
  );
};

export const slideInLeft = (element, delay = 0, duration = 1) => {
  return gsap.fromTo(element,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration, delay, ease: 'power3.out' }
  );
};

export const slideInRight = (element, delay = 0, duration = 1) => {
  return gsap.fromTo(element,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration, delay, ease: 'power3.out' }
  );
};

export const scaleIn = (element, delay = 0, duration = 1) => {
  return gsap.fromTo(element,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration, delay, ease: 'power3.out' }
  );
};

export const staggerChildren = (parent, stagger = 0.1, delay = 0) => {
  const children = parent.children;
  return gsap.fromTo(children,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger, delay, ease: 'power3.out' }
  );
};

export const drawLine = (element, duration = 1.5, delay = 0) => {
  return gsap.fromTo(element,
    { scaleY: 0 },
    { scaleY: 1, duration, delay, ease: 'power2.inOut', transformOrigin: 'top' }
  );
};

export const textReveal = (element, delay = 0) => {
  return gsap.fromTo(element,
    { y: '100%', opacity: 0 },
    { y: '0%', opacity: 1, duration: 1, delay, ease: 'power4.out' }
  );
};

export const magneticEffect = (element, strength = 0.3) => {
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};
