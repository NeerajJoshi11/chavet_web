import React from 'react';
import { BRAND_INFO } from '../data/products';
import { Phone, MapPin, ArrowUp, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenWhatsApp }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f0e0d] text-[#F7F2E9] border-t border-[#C9A96E]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#" className="flex flex-col">
              <span className="font-cinzel text-3xl tracking-[0.25em] font-bold text-[#F7F2E9]">
                CHAVET
              </span>
            </a>
            
            <p className="text-xs font-light text-[#E6DFC8]/75 leading-relaxed max-w-sm">
              {BRAND_INFO.tagline} Meticulously crafted custom wedding fashion for grooms who value heritage, luxury fabrics, and bespoke tailoring.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#171615] border border-[#C9A96E]/30 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#171615] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <button
                onClick={() => onOpenWhatsApp("Hi CHAVET, I would like to connect on WhatsApp.")}
                className="p-2 bg-[#171615] border border-[#C9A96E]/30 text-[#25D366] hover:bg-[#25D366] hover:text-[#171615] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] text-[#C9A96E] uppercase mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E6DFC8]/80 font-light">
              <li><a href="#collections" className="hover:text-[#C9A96E] transition-colors">Royal Sherwanis</a></li>
              <li><a href="#collections" className="hover:text-[#C9A96E] transition-colors">Indo-Western Suits</a></li>
              <li><a href="#collections" className="hover:text-[#C9A96E] transition-colors">Velvet Tuxedos & Blazers</a></li>
              <li><a href="#collections" className="hover:text-[#C9A96E] transition-colors">Custom Achkan Jackets</a></li>
            </ul>
          </div>

          {/* Showroom & Hours */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] text-[#C9A96E] uppercase mb-4">
              STORE LOCATION
            </h4>
            <div className="space-y-3 text-xs text-[#E6DFC8]/80 font-light">
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 hover:text-[#C9A96E] transition-colors group"
              >
                <MapPin size={14} className="text-[#C9A96E] shrink-0 mt-0.5" />
                <span>
                  {BRAND_INFO.address}{' '}
                  <ExternalLink size={10} className="inline ml-1 opacity-70 group-hover:underline" />
                </span>
              </a>
              <p className="flex items-center space-x-2">
                <Phone size={14} className="text-[#C9A96E] shrink-0" />
                <a href={`tel:${BRAND_INFO.phoneRaw}`} className="hover:underline font-medium">
                  {BRAND_INFO.phone}
                </a>
              </p>
              <p className="text-[11px] text-[#E6DFC8]/60">
                Opening Hours: {BRAND_INFO.openingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E6DFC8]/60 font-light">
          <div>
            © {new Date().getFullYear()} CHAVET. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#C9A96E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A96E] transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-[#C9A96E] hover:underline"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
