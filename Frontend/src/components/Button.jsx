import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`bg-white text-black hover:brightness-110 shadow-lg font-medium py-2.5 px-4 rounded-lg transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
