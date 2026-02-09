
import React from 'react';
import { SHOP_DETAILS } from '../constants';
import { MapPin, Phone, Mail, Instagram, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_DETAILS.address)}`;

  return (
    <section className="py-24 px-4 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-12">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gray-800 rounded-sm">
                  <MapPin className="text-[#C5A059] w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-2 font-bold">Our Location</h4>
                  <p className="text-xl font-light text-gray-300 max-w-xs">{SHOP_DETAILS.address}</p>
                  <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 mt-4 text-[#C5A059] hover:underline"
                  >
                    View on Maps <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-gray-800 rounded-sm">
                  <Clock className="text-[#C5A059] w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-2 font-bold">Opening Hours</h4>
                  <p className="text-xl font-light text-gray-300">{SHOP_DETAILS.hours}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="flex items-center gap-4">
                  <Phone className="text-[#C5A059] w-6 h-6" />
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Call Us</h5>
                    <p className="text-lg font-medium">{SHOP_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#C5A059] w-6 h-6" />
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Us</h5>
                    <p className="text-lg font-medium">{SHOP_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Instagram className="text-[#C5A059] w-6 h-6" />
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Instagram</h5>
                    <p className="text-lg font-medium">{SHOP_DETAILS.instagram}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group min-h-[400px]">
            {/* Simple static map placeholder representing the industrial vibe */}
            <div className="absolute inset-0 bg-stone-800 border-2 border-[#C5A059]/30 rounded-sm overflow-hidden flex items-center justify-center p-4">
              <div className="text-center opacity-60">
                 <MapPin className="w-20 h-20 text-[#C5A059] mx-auto mb-4" />
                 <p className="uppercase tracking-widest text-xl font-bold">Yung An Road</p>
                 <p className="text-sm mt-2">Good Vibes Awaits You</p>
                 <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 inline-block px-8 py-3 bg-[#C5A059] text-[#1A1A1A] font-bold uppercase tracking-widest hover:bg-[#D5B069] transition-all"
                  >
                    Open Google Maps
                  </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Good Vibes Barber Shop. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-[#C5A059] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#C5A059] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
