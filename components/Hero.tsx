
import React from 'react';
import { SHOP_DETAILS } from '../constants';
import { Scissors, Clock, MapPin, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Industrial Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-pulse-slow"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <div className="inline-block px-4 py-1 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-6 rounded-full font-bold">
          Singapore's Premium Grooming
        </div>
        
        <h1 className="text-6xl md:text-9xl mb-4 font-bold tracking-tighter uppercase leading-none">
          Good Vibes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#FDFBF7]">Barber</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-serif italic mb-10 text-gray-300 max-w-2xl mx-auto">
          "{SHOP_DETAILS.slogan}"
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button
            onClick={onBookNow}
            className="w-full sm:w-auto bronze-gradient text-[#1A1A1A] px-12 py-5 rounded-sm font-black uppercase tracking-[0.2em] text-lg hover:brightness-110 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(197,160,89,0.3)]"
          >
            Get the Experience
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12 mt-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-white/5 rounded-full">
              <MapPin className="text-[#C5A059] w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Yung An Road</span>
            <p className="text-sm font-medium">BLK 360, #04-101</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-white/5 rounded-full">
              <Clock className="text-[#C5A059] w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Daily Vibe</span>
            <p className="text-sm font-medium">11:00 AM – 8:00 PM</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-white/5 rounded-full">
              <Scissors className="text-[#C5A059] w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Closed On</span>
            <p className="text-sm font-medium">Sundays & PH</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
