
import React from 'react';
import { SERVICES } from '../constants';
import { Clock } from 'lucide-react';

interface ServicesProps {
  onBookService: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  return (
    <section className="py-24 px-4 bg-industrial" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">The Service Menu</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Premium grooming services designed to help you look your best and feel stress-free. 
            All haircuts include a consultation to ensure the perfect vibe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group bg-white p-8 border-l-4 border-transparent hover:border-[#C5A059] transition-all shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
              onClick={() => onBookService(service.id)}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold uppercase group-hover:text-[#C5A059] transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-2xl font-bold font-serif">${service.price}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.duration} mins
                </div>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <button className="text-xs font-bold uppercase tracking-widest text-[#C5A059] group-hover:underline">
                Book This Service
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#1A1A1A] text-white text-center rounded-sm">
          <p className="italic text-lg mb-4">"More than a haircut, it's a vibe."</p>
          <p className="text-sm font-light text-gray-400">Walk-ins are welcome but appointments are prioritized.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
