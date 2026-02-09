
import React, { useState } from 'react';
import { ViewState } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero onBookNow={() => setCurrentView(ViewState.BOOKING)} />
            <Services onBookService={() => setCurrentView(ViewState.BOOKING)} />
            <About />
            <Contact />
          </>
        );
      case ViewState.SERVICES:
        return (
          <div className="pt-20">
            <Services onBookService={() => setCurrentView(ViewState.BOOKING)} />
            <Contact />
          </div>
        );
      case ViewState.BOOKING:
        return (
          <div className="pt-20">
            <Booking />
            <Contact />
          </div>
        );
      case ViewState.ABOUT:
        return (
          <div className="pt-20">
            <About />
            <Contact />
          </div>
        );
      case ViewState.CONTACT:
        return (
          <div className="pt-20">
            <Contact />
          </div>
        );
      default:
        return <Hero onBookNow={() => setCurrentView(ViewState.BOOKING)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Floating Booking CTA for mobile when not in booking view */}
      {currentView !== ViewState.BOOKING && (
        <div className="md:hidden fixed bottom-6 left-6 z-50">
          <button 
            onClick={() => setCurrentView(ViewState.BOOKING)}
            className="bg-[#C5A059] text-[#1A1A1A] px-6 py-4 rounded-full font-bold uppercase tracking-widest shadow-2xl animate-bounce"
          >
            Book Now
          </button>
        </div>
      )}

      <AIAssistant />
    </div>
  );
};

export default App;
