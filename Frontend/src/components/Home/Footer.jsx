import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <Link to="/" className="text-xl font-bold text-white tracking-tight">
            Interview-AI
          </Link>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Practice smarter with AI-powered mock interviews. Prepare for your dream job with real-time feedback and performance tracking.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Product</h4>
          <ul className="space-y-3">
            <li><a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
            <li><a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-3">
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Interview-AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
