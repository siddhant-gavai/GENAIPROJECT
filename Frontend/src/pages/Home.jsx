import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import HowItWorks from '../components/Home/HowItWorks';
import Testimonials from '../components/Home/Testimonials';
import CTA from '../components/Home/CTA';
import Footer from '../components/Home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#212121] text-white font-sans selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
