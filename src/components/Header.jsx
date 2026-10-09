import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X } from 'lucide-react';

export default function Header({ onOpenWhatsApp, savedCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#171615]/95 backdrop-blur-md border-b border-[#C9A96E]/20 py-4 shadow-2xl'
          : 'bg-gradient-to-b from-[#171615]/90 via-[#171615]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Pristine CHAVET */}
          <a href="#" className="flex flex-col group">
            <span className="font-cinzel text-2xl sm:text-3xl tracking-[0.3em] font-bold text-[#F7F2E9] group-hover:text-[#C9A96E] transition-colors">
              CHAVET
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-[0.25em] text-[#F7F2E9]/90 uppercase">
            <a href="#collections" className="hover:text-[#C9A96E] transition-colors py-1 relative group">
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A96E] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#stories" className="hover:text-[#C9A96E] transition-colors py-1 relative group">
              Groom Stories
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A96E] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#visit" className="hover:text-[#C9A96E] transition-colors py-1 relative group">
              Showroom
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A96E] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            {savedCount > 0 && (
              <a href="#collections" className="relative p-2 text-[#F7F2E9] hover:text-[#C9A96E] transition-colors" title="Saved Looks">
                <ShoppingBag size={18} />
                <span className="absolute -top-1 -right-1 bg-[#C9A96E] text-[#171615] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              </a>
            )}

            {/* Direct WhatsApp CTA */}
            <button
              onClick={() => onOpenWhatsApp("Hi CHAVET, I would like to enquire about custom wedding wear.")}
              className="px-5 py-2.5 text-xs font-semibold tracking-[0.2em] text-[#F7F2E9] border border-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#171615] transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span>WHATSAPP ENQUIRY</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => onOpenWhatsApp("Hi CHAVET, I would like to enquire about custom wedding wear.")}
              className="px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#171615] bg-[#C9A96E]"
            >
              ENQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F7F2E9]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171615]/98 border-b border-[#C9A96E]/30 backdrop-blur-xl px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4 text-xs font-medium tracking-[0.2em] text-[#F7F2E9] uppercase">
            <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-[#C9A96E]">Collections</a>
            <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-[#C9A96E]">Groom Stories</a>
            <a href="#visit" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-[#C9A96E]">Showroom & Location</a>
          </nav>
          <div className="mt-6">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenWhatsApp("Hi CHAVET, I would like to enquire about custom wedding wear."); }}
              className="w-full py-3 text-center text-xs font-bold tracking-widest text-[#171615] bg-[#C9A96E] flex items-center justify-center space-x-2"
            >
              <MessageCircle size={16} />
              <span>ENQUIRE ON WHATSAPP</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
