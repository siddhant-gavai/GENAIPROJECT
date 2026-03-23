import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2a2a2a]/50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Start your AI interview today
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join thousands of job seekers landing their dream roles through intelligent, targeted preparation.
        </p>
        
        <Link
          to="/register"
          className="inline-block px-10 py-4 rounded-xl bg-white text-[#212121] font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
        >
          Get Started
        </Link>
        <p className="text-gray-500 text-sm mt-6">
          No credit card required for the free trial.
        </p>
      </div>
    </section>
  );
};

export default CTA;
