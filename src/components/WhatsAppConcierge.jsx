import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, MapPin, Scissors } from 'lucide-react';

export default function WhatsAppConcierge({ onOpenWhatsApp }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const quickPrompts = [
    {
      title: "Royal Sherwani Catalogue & Prices",
      icon: Sparkles,
      message: "Hi CHAVET, please share your current Royal Sherwani catalogue and price range."
    },
    {
      title: "Custom Groom Outfit Enquiry",
      icon: Scissors,
      message: "Hi CHAVET, I am looking for custom designed groomwear for my upcoming wedding."
    },
    {
      title: "Store Location & Directions",
      icon: MapPin,
      message: "Hi CHAVET, please share store directions, landmark and parking info for Krishna Nagar."
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Concierge Quick Drawer */}
      {drawerOpen && (
        <div className="mb-4 w-80 sm:w-88 bg-[#1f1d1b] border border-[#C9A96E]/40 text-[#F7F2E9] shadow-2xl p-5 backdrop-blur-xl animate-fade-in">
          
          <div className="flex items-center justify-between border-b border-[#C9A96E]/20 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#C9A96E] uppercase">
                CHAVET CONCIERGE
              </span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-[#E6DFC8] hover:text-[#C9A96E]"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-xs text-[#E6DFC8]/80 font-light mb-4">
            How can our wedding styling concierge assist you today? Tap any prompt below to chat on WhatsApp:
          </p>

          <div className="space-y-2 mb-4">
            {quickPrompts.map((prompt, idx) => {
              const Icon = prompt.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenWhatsApp(prompt.message);
                  }}
                  className="w-full p-2.5 bg-[#171615] border border-white/10 hover:border-[#C9A96E]/50 text-left flex items-start space-x-3 transition-all group"
                >
                  <Icon size={16} className="text-[#C9A96E] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-[#F7F2E9] group-hover:text-[#C9A96E] transition-colors">
                    {prompt.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#E6DFC8]/60">
            <span>Official WhatsApp Support</span>
            <span className="text-[#25D366] font-semibold">Online Now</span>
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="group relative flex items-center space-x-3 px-4 py-3 bg-[#171615] border-2 border-[#C9A96E] text-[#F7F2E9] shadow-2xl rounded-full hover:bg-[#C9A96E] hover:text-[#171615] transition-all duration-300 transform hover:scale-105 gold-glow"
        aria-label="WhatsApp Concierge"
      >
        <div className="relative">
          <MessageCircle size={22} className="text-[#25D366] group-hover:text-[#171615] transition-colors" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-[#171615]" />
        </div>
        <span className="text-xs font-bold tracking-widest uppercase hidden sm:inline">
          WHATSAPP ENQUIRY
        </span>
      </button>

    </div>
  );
}
