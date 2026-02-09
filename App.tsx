
import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { Info, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [showDevInfo, setShowDevInfo] = useState(false);

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <div className="animate-in fade-in duration-700">
            <Hero onBookNow={() => setCurrentView(ViewState.BOOKING)} />
            <Services onBookService={() => setCurrentView(ViewState.BOOKING)} />
            <About />
            <Contact />
          </div>
        );
      case ViewState.SERVICES:
        return (
          <div className="pt-20 animate-in slide-in-from-bottom-4 duration-500">
            <Services onBookService={() => setCurrentView(ViewState.BOOKING)} />
            <Contact />
          </div>
        );
      case ViewState.BOOKING:
        return (
          <div className="pt-20 animate-in slide-in-from-bottom-4 duration-500">
            <Booking />
            <Contact />
          </div>
        );
      case ViewState.ABOUT:
        return (
          <div className="pt-20 animate-in slide-in-from-bottom-4 duration-500">
            <About />
            <Contact />
          </div>
        );
      case ViewState.CONTACT:
        return (
          <div className="pt-20 animate-in slide-in-from-bottom-4 duration-500">
            <Contact />
          </div>
        );
      default:
        return <Hero onBookNow={() => setCurrentView(ViewState.BOOKING)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] selection:bg-[#C5A059] selection:text-white">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Floating Booking CTA for mobile */}
      {currentView !== ViewState.BOOKING && (
        <div className="md:hidden fixed bottom-6 left-6 z-40">
          <button 
            onClick={() => setCurrentView(ViewState.BOOKING)}
            className="bronze-gradient text-[#1A1A1A] px-8 py-4 rounded-full font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-all"
          >
            Book Now
          </button>
        </div>
      )}

      {/* Developer Help Overlay */}
      <div className="fixed top-24 right-4 z-[60] hidden md:block">
        {!showDevInfo ? (
          <button 
            onClick={() => setShowDevInfo(true)}
            className="bg-black/80 text-white p-2 rounded-full border border-white/20 hover:bg-black transition-all"
            title="Deployment Guide"
          >
            <Info className="w-5 h-5" />
          </button>
        ) : (
          <div className="bg-[#1A1A1A] text-white p-6 rounded-lg shadow-2xl border border-[#C5A059] w-80 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold uppercase tracking-widest text-[#C5A059] text-xs">Project Status</h4>
              <button onClick={() => setShowDevInfo(false)}><X className="w-4 h-4" /></button>
            </div>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              To see this website on a public link:
            </p>
            <ol className="text-xs space-y-2 mb-4">
              <li>1. Upload these files to **GitHub**.</li>
              <li>2. Import your repo to **Vercel.com**.</li>
              <li>3. Set your **API_KEY** in Vercel settings.</li>
            </ol>
            <div className="p-2 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] text-center rounded">
              Ready for Deployment
            </div>
          </div>
        )}
      </div>

      <AIAssistant />
    </div>
  );
};

export default App;
