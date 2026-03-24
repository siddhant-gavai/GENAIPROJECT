import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input 
      className={`w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-mono ${className}`}
      {...props}
    />
  );
};

export default Input;
