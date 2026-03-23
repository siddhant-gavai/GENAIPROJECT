import React from 'react';

const testimonials = [
  {
    quote: "The personalized feedback helped me identify nervous habits I didn't even know I had. Landed my first Senior React Developer role after just two weeks of practice.",
    name: "Sarah Jenkins",
    role: "Frontend Engineer @ TechStart",
    initials: "SJ",
  },
  {
    quote: "It feels remarkably close to a real technical interview. The way the AI digs into my architecture explanations is both terrifying and incredibly helpful.",
    name: "David Chen",
    role: "Systems Architect",
    initials: "DC",
  },
  {
    quote: "I used Interview-AI to prepare for my FAANG loops. The behavioral questions generated from my resume were spot-on with what they actually asked me.",
    name: "Priya Patel",
    role: "Product Manager",
    initials: "PP",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#212121]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Loved by ambitious professionals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] p-8 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors duration-300"
            >
              <div className="mb-8">
                {/* SVG Quote Icon */}
                <svg className="w-8 h-8 text-white/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
