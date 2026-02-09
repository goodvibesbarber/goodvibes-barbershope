
import React from 'react';
import { ViewState } from '../types';
import { SHOP_DETAILS } from '../constants';
import { Scissors, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://picsum.photos/id/1070/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1A1A1A]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full border-2 border-[#C5A059]">
            <Scissors className="w-10 h-10 text-[#C5A059]" />
          </div>
        </div>
        <h1 className="text-5xl md:text-8xl mb-4 font-bold tracking-tighter uppercase leading-tight">
          Good Vibes <span className="text-[#C5A059]">Barber</span>
        </h1>
        <p className="text-lg md:text-2xl font-light italic mb-8 text-gray-300">
          "{SHOP_DETAILS.slogan}"
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onBookNow}
            className="w-full sm:w-auto bg-[#C5A059] text-[#1A1A1A] px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-lg hover:bg-[#D5B069] transition-all transform hover:scale-105 shadow-xl"
          >
            Schedule Your Fade
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="text-[#C5A059] w-6 h-6" />
            <span className="text-xs uppercase tracking-widest text-gray-400">Location</span>
            <p className="text-sm font-medium">Yung An Road, SG</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="text-[#C5A059] w-6 h-6" />
            <span className="text-xs uppercase tracking-widest text-gray-400">Open Hours</span>
            <p className="text-sm font-medium">Mon-Sat, 11am-8pm</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Scissors className="text-[#C5A059] w-6 h-6" />
            <span className="text-xs uppercase tracking-widest text-gray-400">Specialty</span>
            <p className="text-sm font-medium">Precision Fades</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
