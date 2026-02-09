
import React, { useState } from 'react';
import { SERVICES, SHOP_DETAILS } from '../constants';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const timeSlots = [
    '11:00 AM', '11:45 AM', '12:30 PM', '01:15 PM', '02:00 PM', 
    '03:30 PM', '04:15 PM', '05:00 PM', '05:45 PM', '06:30 PM', '07:15 PM'
  ];

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 2000);
  };

  if (isConfirmed) {
    return (
      <div className="max-w-xl mx-auto py-24 px-4 text-center">
        <div className="bg-white p-12 shadow-2xl rounded-sm border-t-8 border-[#C5A059]">
          <CheckCircle className="w-20 h-20 text-[#C5A059] mx-auto mb-6" />
          <h2 className="text-4xl font-bold uppercase mb-4">Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            You're all set, {formData.name}! We've sent a confirmation to {formData.email}.
          </p>
          <div className="text-left bg-stone-50 p-6 space-y-3 mb-8 border border-gray-200">
            <p><strong>Service:</strong> {SERVICES.find(s => s.id === selectedService)?.name}</p>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Time:</strong> {selectedTime}</p>
            <p><strong>Location:</strong> {SHOP_DETAILS.address}</p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="text-[#C5A059] font-bold uppercase tracking-widest hover:underline"
          >
            Book Another Visit
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 px-4 bg-industrial min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold uppercase mb-4">Book Your Vibe</h2>
          <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-tighter">
            <span className={step >= 1 ? 'text-[#C5A059]' : 'text-gray-400'}>1. Service</span>
            <span className="text-gray-300">|</span>
            <span className={step >= 2 ? 'text-[#C5A059]' : 'text-gray-400'}>2. Date & Time</span>
            <span className="text-gray-300">|</span>
            <span className={step >= 3 ? 'text-[#C5A059]' : 'text-gray-400'}>3. Details</span>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-sm overflow-hidden">
          {step === 1 && (
            <div className="p-8 md:p-12 animate-in fade-in duration-500">
              <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-2">
                <Calendar className="text-[#C5A059]" /> Select Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSelectedService(s.id); handleNext(); }}
                    className={`p-6 border text-left transition-all hover:border-[#C5A059] group ${
                      selectedService === s.id ? 'border-[#C5A059] bg-stone-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold uppercase">{s.name}</span>
                      <span className="font-serif">${s.price}</span>
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">{s.duration} mins</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-8 md:p-12 animate-in slide-in-from-right duration-500">
              <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-2">
                <Clock className="text-[#C5A059]" /> Date & Time
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Select Date</label>
                  <input 
                    type="date" 
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 border border-gray-200 focus:border-[#C5A059] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Select Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`p-3 border text-sm transition-all ${
                          selectedTime === t ? 'border-[#C5A059] bg-stone-50' : 'border-gray-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-12 flex justify-between">
                <button onClick={handlePrev} className="flex items-center gap-2 text-gray-500 uppercase text-xs font-bold hover:text-black">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button 
                  onClick={handleNext} 
                  disabled={!selectedDate || !selectedTime}
                  className="bg-[#C5A059] text-[#1A1A1A] px-10 py-3 font-bold uppercase tracking-widest disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-8 md:p-12 animate-in slide-in-from-right duration-500">
              <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-2">
                <User className="text-[#C5A059]" /> Personal Details
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      <User className="w-3 h-3" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 border border-gray-200 focus:border-[#C5A059] outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      <Phone className="w-3 h-3" /> Phone Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+65 8727 3741"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-4 border border-gray-200 focus:border-[#C5A059] outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <Mail className="w-3 h-3" /> Email Address
                  </label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 border border-gray-200 focus:border-[#C5A059] outline-none"
                  />
                </div>

                <div className="bg-stone-50 p-6 border border-dashed border-[#C5A059] mt-8">
                  <h4 className="font-bold uppercase text-sm mb-4">Summary</h4>
                  <div className="text-sm space-y-2">
                    <p className="flex justify-between"><span>Service:</span> <span className="font-semibold">{SERVICES.find(s => s.id === selectedService)?.name}</span></p>
                    <p className="flex justify-between"><span>Date:</span> <span className="font-semibold">{selectedDate}</span></p>
                    <p className="flex justify-between"><span>Time:</span> <span className="font-semibold">{selectedTime}</span></p>
                    <p className="flex justify-between border-t border-gray-200 pt-2 mt-2"><span>Total:</span> <span className="font-bold text-[#C5A059]">${SERVICES.find(s => s.id === selectedService)?.price}</span></p>
                  </div>
                </div>

                <div className="pt-8 flex justify-between">
                  <button type="button" onClick={handlePrev} className="flex items-center gap-2 text-gray-500 uppercase text-xs font-bold hover:text-black">
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#1A1A1A] text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
