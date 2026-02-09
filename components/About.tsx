
import React from 'react';
import { SHOP_DETAILS } from '../constants';
import { Instagram, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C5A059] z-0"></div>
            <img 
              src="https://picsum.photos/id/1072/800/1000" 
              alt="Barber Shop Interior" 
              className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#1A1A1A] p-8 text-white z-20 hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />)}
              </div>
              <p className="font-serif italic text-xl">"Best fade in Singapore, hands down. The atmosphere is top tier."</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-[#C5A059]">- Alex Chen, Customer</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-sm block mb-4">Our Story</span>
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-8 leading-tight">Precision Fades, Zero Stress</h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                Located at Yung An Road, <span className="font-semibold text-[#1A1A1A]">Good Vibes Barber Shop</span> is the go-to spot for premium grooming in Singapore.
              </p>
              <p>
                We specialize in precision fades and a relaxing atmosphere. Whether you're a student looking for a fresh look or you're ready for the full "Good Vibes Experience," our goal is to make sure you leave looking sharp and feeling stress-free.
              </p>
              <p>
                Your best look starts here. Our barbers are trained in the latest techniques and use premium products to ensure your hair and skin get the treatment they deserve.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-sm">
                  <Award className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Elite Team</h4>
                  <p className="text-xs text-gray-500">Experienced master barbers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-sm">
                  <Instagram className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Follow Us</h4>
                  <p className="text-xs text-gray-500">{SHOP_DETAILS.instagram}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simulated Instagram Feed */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold uppercase">Our Latest Work</h3>
            <p className="text-gray-500 mt-2">Check out the vibes on Instagram @GoodVibesBarberShop</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square relative group overflow-hidden">
                <img 
                  src={`https://picsum.photos/id/${100 + i}/600/600`} 
                  alt="Vibe Check" 
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
