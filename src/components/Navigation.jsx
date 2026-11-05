import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const tl = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    );

    // Scroll listener for sticky behavior
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fullscreen menu animation
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      tl.current = gsap.timeline();
      tl.current
        .to(menuRef.current, {
          clipPath: 'circle(150% at top right)',
          duration: 0.8,
          ease: 'power4.inOut'
        })
        .fromTo(menuItemsRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
          '-=0.3'
        );
    } else {
      document.body.style.overflow = '';
      if (tl.current) {
        gsap.to(menuRef.current, {
          clipPath: 'circle(0% at top right)',
          duration: 0.6,
          ease: 'power4.inOut'
        });
      }
    }
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Profile', id: 'profile' },
    { name: 'Work', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="font-heading text-xl font-bold tracking-tight text-black cursor-pointer"
            >
              MANOJ S
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-gray hover:text-black transition-colors duration-300 animated-underline cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex items-center gap-1 text-sm font-semibold text-black hover:text-yellow-dark transition-colors duration-300 cursor-pointer"
              >
                Let's Talk <ArrowUpRight size={14} />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[55] bg-black flex items-center justify-center md:hidden"
        style={{ clipPath: 'circle(0% at top right)' }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              ref={el => menuItemsRef.current[i] = el}
              onClick={() => scrollToSection(link.id)}
              className="text-4xl font-heading font-bold text-white hover:text-yellow transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button
            ref={el => menuItemsRef.current[navLinks.length] = el}
            onClick={() => scrollToSection('contact')}
            className="mt-8 flex items-center gap-2 text-lg font-semibold text-yellow cursor-pointer"
          >
            Let's Talk <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
