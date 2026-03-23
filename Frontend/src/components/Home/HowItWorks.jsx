import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Choose role',
    description: 'Select your target job title, industry, and experience level to customize the AI persona.',
  },
  {
    number: '02',
    title: 'Start interview',
    description: 'Engage in a realistic voice or text-based conversation with our advanced AI interviewer.',
  },
  {
    number: '03',
    title: 'Get feedback',
    description: 'Receive a comprehensive breakdown of your performance with actionable improvement tips.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A simple, intuitive process designed to get you practicing in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-start md:items-center md:text-center">
                <div className="w-14 h-14 rounded-full bg-[#2a2a2a] border border-white/10 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
