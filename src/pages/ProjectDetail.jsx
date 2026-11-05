import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  AlertCircle, 
  CheckCircle, 
  Cpu, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const contentRef = useRef(null);

  const projectIndex = projects.findIndex((p) => p.id === parseInt(id, 10));
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, pageRef);

    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FFFBF0] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-heading text-6xl font-black text-[#1A1A1A] mb-4">404</h1>
        <p className="text-[#6B6B6B] mb-8 font-mono">Project not found in archive.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#FFE135] hover:text-[#1A1A1A] transition-colors"
        >
          <ArrowLeft size={16} /> Return to Portfolio
        </Link>
      </div>
    );
  }

  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div ref={pageRef} className="min-h-screen bg-[#FFFBF0] text-[#1A1A1A] pt-12 pb-24">
      {/* Top Floating Nav */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#E5E0D5] hover:border-[#1A1A1A] text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Work</span>
          </Link>

          <span className="text-xs font-mono text-[#6B6B6B]">
            PROJECT {project.number} OF 0{projects.length}
          </span>
        </div>
      </div>

      <div ref={contentRef} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Block */}
        <div className="border-b border-[#E5E0D5] pb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#E5E0D5] text-xs font-mono font-bold tracking-wider text-[#6B6B6B]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#A0A0A0]">CASE STUDY ARCHIVE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <span className="font-heading text-6xl md:text-8xl font-light text-[#D4D0C5] block mb-2">
                {project.number}
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FFE135] hover:text-[#1A1A1A] text-sm font-semibold transition-all duration-300 shadow-lg"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink size={16} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-[#E5E0D5] hover:border-[#1A1A1A] text-sm font-semibold transition-all duration-300 shadow-sm"
              >
                <GithubIcon size={16} />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#E5E0D5]">
          <div className="lg:col-span-4">
            <h3 className="font-heading text-xs font-mono tracking-[0.2em] text-[#6B6B6B] uppercase font-bold mb-4">
              EXECUTIVE OVERVIEW
            </h3>
            <p className="text-xs font-mono text-[#A0A0A0]">
              Engineered with modern AI frameworks, production-ready inference endpoints, and optimized latency.
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-[#1A1A1A]">
              {project.description}
            </p>
          </div>
        </div>

        {/* Problem vs Solution Split Cards */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#E5E0D5]">
          {/* Problem */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#E5E0D5] flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6">
                <AlertCircle size={22} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold mb-2">
                THE CHALLENGE
              </p>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#1A1A1A]">
                Problem Breakdown
              </h3>
              <p className="text-base text-[#6B6B6B] leading-relaxed font-light">
                {project.problem}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-mono text-[#A0A0A0]">
              Identified friction points in traditional manual workflows
            </div>
          </div>

          {/* Solution */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#E5E0D5] flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <CheckCircle size={22} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-2">
                THE INNOVATION
              </p>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#1A1A1A]">
                Engineering Solution
              </h3>
              <p className="text-base text-[#6B6B6B] leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-mono text-[#A0A0A0]">
              Applied deep learning & contextual vector intelligence
            </div>
          </div>
        </div>

        {/* Architecture Pipeline */}
        <div className="py-16 border-b border-[#E5E0D5]">
          <h3 className="font-heading text-xs font-mono tracking-[0.2em] text-[#6B6B6B] uppercase font-bold mb-6">
            SYSTEM ARCHITECTURE & PIPELINE
          </h3>

          <div className="p-8 md:p-10 rounded-3xl bg-[#1A1A1A] text-white">
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={20} className="text-[#FFE135]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#A0A0A0]">
                Execution Flow Graph
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-sm leading-relaxed text-[#FFFBF0] overflow-x-auto">
              {project.architecture}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-[#A0A0A0]">
              <span>Status: Verified In Production</span>
              <span>•</span>
              <span>Deterministic Output Guaranteed</span>
              <span>•</span>
              <span>Sub-second Latency Target</span>
            </div>
          </div>
        </div>

        {/* Features & Tech Stack Grid */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-[#E5E0D5]">
          {/* Key Features */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6 text-[#1A1A1A]">
              Key Features & Capabilities
            </h3>
            <div className="space-y-4">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-[#E5E0D5] flex items-center gap-4 hover:border-[#1A1A1A] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FFE135]/30 text-[#1A1A1A] flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                    0{i + 1}
                  </div>
                  <span className="font-medium text-sm md:text-base text-[#1A1A1A]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6 text-[#1A1A1A]">
              Technology Stack
            </h3>
            <div className="p-8 rounded-3xl bg-white border border-[#E5E0D5] mb-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-6">
                Frameworks & Libraries Deployed
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-5 py-3 rounded-xl bg-[#FFFBF0] border border-[#E5E0D5] text-sm font-mono font-bold text-[#1A1A1A] hover:bg-[#FFE135] hover:border-transparent transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FFF8E1] border border-[#FFE135]/40">
              <h4 className="font-heading text-lg font-bold text-[#1A1A1A] mb-2">
                Looking to deploy a similar system?
              </h4>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                I can help adapt this architecture to your business domain or private document repository.
              </p>
              <a
                href="#contact"
                onClick={() => navigate('/#contact')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:text-[#3B82F6] transition-colors"
              >
                <span>Discuss System Scope</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Project Next / Prev Navigation */}
        <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to={`/project/${prevProject.id}`}
            className="group p-8 rounded-3xl bg-white border border-[#E5E0D5] hover:border-[#1A1A1A] transition-all duration-300 flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-mono text-[#A0A0A0] block mb-1">← PREVIOUS CASE</span>
              <span className="font-heading text-lg font-bold text-[#1A1A1A] group-hover:text-[#3B82F6] transition-colors">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            to={`/project/${nextProject.id}`}
            className="group p-8 rounded-3xl bg-white border border-[#E5E0D5] hover:border-[#1A1A1A] transition-all duration-300 flex items-center justify-between text-right"
          >
            <div className="w-full">
              <span className="text-xs font-mono text-[#A0A0A0] block mb-1">NEXT CASE →</span>
              <span className="font-heading text-lg font-bold text-[#1A1A1A] group-hover:text-[#3B82F6] transition-colors">
                {nextProject.title}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
