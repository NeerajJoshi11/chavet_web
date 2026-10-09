import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, Sparkles, User, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function AppointmentModal({ isOpen, onClose, onOpenWhatsApp }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: '11:30 AM',
    interest: 'Royal Sherwani',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const text = `Hi CHAVET, I booked a fitting appointment:
- *Name*: ${formData.name}
- *Phone*: ${formData.phone}
- *Requested Date*: ${formData.date || 'To Be Confirmed'}
- *Time Slot*: ${formData.timeSlot}
- *Garment Interest*: ${formData.interest}
${formData.notes ? `- *Notes*: ${formData.notes}` : ''}
Please confirm availability.`;
    onOpenWhatsApp(text);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171615]/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-lg bg-[#1f1d1b] border border-[#B99A61]/40 text-[#F7F2E9] shadow-2xl p-6 sm:p-8 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#DCD4C3] hover:text-[#B99A61] transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-2 text-[#B99A61] mb-2">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase">PRIVATE CONSULTATION</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-heading text-[#F7F2E9] mb-2">
              Book Showroom Fitting
            </h3>
            <p className="text-xs text-[#DCD4C3]/75 font-light mb-6">
              Reserve an exclusive session at CHAVET Studio by Rudrakshi Creation with our senior groomwear stylist.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Name Input */}
              <div>
                <label className="block text-[#F7F2E9] font-medium uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B99A61]" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 bg-[#171615] border border-white/10 text-xs text-[#F7F2E9] placeholder-[#DCD4C3]/40 focus:border-[#B99A61] focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-[#F7F2E9] font-medium uppercase tracking-wider mb-1">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B99A61]" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 bg-[#171615] border border-white/10 text-xs text-[#F7F2E9] placeholder-[#DCD4C3]/40 focus:border-[#B99A61] focus:outline-none"
                  />
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#F7F2E9] font-medium uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#171615] border border-white/10 text-xs text-[#F7F2E9] focus:border-[#B99A61] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#F7F2E9] font-medium uppercase tracking-wider mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#171615] border border-white/10 text-xs text-[#F7F2E9] focus:border-[#B99A61] focus:outline-none"
                  >
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:30 PM</option>
                    <option>06:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Garment Interest */}
              <div>
                <label className="block text-[#F7F2E9] font-medium uppercase tracking-wider mb-1">
                  Primary Garment Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#171615] border border-white/10 text-xs text-[#F7F2E9] focus:border-[#B99A61] focus:outline-none"
                >
                  <option>Royal Sherwani & Dupatta</option>
                  <option>Indo-Western & Bandhgala</option>
                  <option>Wedding Suit & Velvet Tuxedo</option>
                  <option>Custom Achkan / Full Groom Package</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[#F7F2E9] font-medium uppercase tracking-wider mb-1">
                  Wedding Date & Customization Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Share wedding date, venue, or style preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-[#171615] border border-white/10 text-xs text-[#F7F2E9] placeholder-[#DCD4C3]/40 focus:border-[#B99A61] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gold-gradient hover:bg-gold-gradient-hover text-[#171615] font-bold text-xs tracking-[0.2em] uppercase transition-all shadow-xl"
                >
                  CONFIRM APPOINTMENT REQUEST
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#B99A61]/20 border border-[#B99A61] text-[#B99A61] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-2xl font-serif-heading text-[#F7F2E9] mb-2">
              Appointment Request Received!
            </h3>
            <p className="text-xs text-[#DCD4C3]/80 font-light max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-[#F7F2E9]">{formData.name}</strong>. Our concierge will contact you at <strong className="text-[#B99A61]">{formData.phone}</strong> to confirm your fitting slot.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#171615] font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle size={16} />
                <span>CONFIRM INSTANTLY ON WHATSAPP</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 text-xs text-[#DCD4C3] hover:text-[#B99A61]"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
