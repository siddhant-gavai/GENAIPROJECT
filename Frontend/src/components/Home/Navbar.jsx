import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  // Safe parsing of user data
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (e) {
    user = null;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : (user?.email ? user.email.charAt(0).toUpperCase() : 'U');

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

        {/* User Auth Section */}
        <div className="relative" ref={dropdownRef}>
          {user ? (
            <div>
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center hover:scale-105 hover:brightness-90 transition-all focus:outline-none"
              >
                {initial}
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-[#2a2a2a] border border-white/10 rounded-xl shadow-xl shadow-black/50 py-2 z-50 animate-fade-in-up" style={{ animationDuration: '0.2s', animationDelay: '0s' }}>
                  <div className="px-4 py-2 border-b border-white/5 mb-2">
                    <p className="text-sm text-white font-medium truncate">{user.name || user.email}</p>
                    <p className="text-xs text-gray-400 truncate mt-0.5">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 transition-colors duration-150 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors duration-200 px-4 py-2 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
