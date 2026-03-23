import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#212121]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white tracking-tight">
          Interview-AI
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Home
          </a>
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Pricing
          </a>
        </div>

        {/* CTA */}
        <div>
          <Link
            to="/login"
            className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors duration-200 px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
