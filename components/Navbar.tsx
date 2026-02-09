
import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, Scissors } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', view: ViewState.HOME },
    { label: 'Services', view: ViewState.SERVICES },
    { label: 'About', view: ViewState.ABOUT },
    { label: 'Contact', view: ViewState.CONTACT },
  ];

  const handleNavClick = (view: ViewState) => {
    onViewChange(view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick(ViewState.HOME)}
          >
            <Scissors className="w-8 h-8 text-[#C5A059]" />
            <span className="text-xl font-bold tracking-tighter uppercase">Good Vibes</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`text-sm font-semibold uppercase tracking-widest hover:text-[#C5A059] transition-colors ${
                  currentView === item.view ? 'text-[#C5A059]' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(ViewState.BOOKING)}
              className="bg-[#C5A059] text-[#1A1A1A] px-6 py-2 rounded-sm font-bold uppercase tracking-wider hover:bg-[#D5B069] transition-all transform hover:scale-105"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium uppercase tracking-widest ${
                  currentView === item.view ? 'text-[#C5A059] bg-gray-900' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(ViewState.BOOKING)}
              className="block w-full text-center bg-[#C5A059] text-[#1A1A1A] px-3 py-4 mt-4 rounded-md font-bold uppercase tracking-widest"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
