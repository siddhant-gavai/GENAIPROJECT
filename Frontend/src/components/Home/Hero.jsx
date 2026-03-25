import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-in-up">
          Crack Interviews <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">with AI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-150">
          Practice smarter with AI-powered mock interviews. Get real-time feedback, improve your answers, and land your dream job with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <Link
            to="/auth"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#212121] font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-white/5 text-center"
          >
            Get Started
          </Link>
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2a2a2a] text-white font-medium border border-white/5 hover:bg-[#333333] transition-all duration-200 hover:scale-[1.02] text-center"
          >
            Try Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
