import React from 'react';
import { BRAND_INFO } from '../data/products';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, Star } from 'lucide-react';

export default function VisitShowroom({ onOpenWhatsApp }) {
  return (
    <section id="visit" className="py-24 bg-[#171615] text-[#F7F2E9] relative">
      
      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#C9A96E] mb-2">
            <MapPin size={14} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">VISIT CHAVET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading text-[#F7F2E9] tracking-tight">
            EXPERIENCE THE SHOWROOM
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] my-4 mx-auto" />
          <p className="text-sm sm:text-base font-light text-[#E6DFC8]/80 max-w-xl mx-auto">
            Step into our luxury groomwear store in Krishna Nagar, New Delhi. Feel the luxury fabrics, inspect zardozi samples, and consult with our stylists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Showroom Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#1f1d1b] border border-[#C9A96E]/30 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#C9A96E] uppercase">
                  FLAGSHIP STORE
                </span>
                
                {/* 5.0 Rating Badge */}
                <a
                  href={BRAND_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 bg-[#171615] px-2.5 py-1 border border-[#C9A96E]/30 text-[10px] text-[#C9A96E] hover:underline"
                >
                  <Star size={12} fill="#C9A96E" />
                  <span className="font-bold">5.0</span>
                  <span className="text-[#E6DFC8]/60">(3 Reviews)</span>
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-heading text-[#F7F2E9] mb-6">
                CHAVET Store
              </h3>

              <div className="space-y-6 text-xs sm:text-sm font-light">
                
                {/* Address with Hyperlink */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#171615] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="text-[#F7F2E9] font-medium block mb-1">Store Address</strong>
                    <a
                      href={BRAND_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E6DFC8]/90 hover:text-[#C9A96E] transition-colors leading-relaxed block group"
                    >
                      {BRAND_INFO.address}
                      <span className="inline-flex items-center ml-1.5 text-[10px] text-[#C9A96E] group-hover:underline">
                        (Open in Google Maps <ExternalLink size={10} className="ml-0.5" />)
                      </span>
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#171615] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="text-[#F7F2E9] font-medium block mb-1">Store Hours</strong>
                    <p className="text-[#E6DFC8]/80 leading-relaxed">{BRAND_INFO.openingHours}</p>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#171615] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong className="text-[#F7F2E9] font-medium block mb-1">Direct Phone & WhatsApp</strong>
                    <a href={`tel:${BRAND_INFO.phoneRaw}`} className="text-[#C9A96E] hover:underline font-medium text-sm">
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 pt-6 border-t border-white/10 space-y-3">
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-[#171615] text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <Navigation size={16} />
                <span>GET GOOGLE MAPS DIRECTIONS</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={() => onOpenWhatsApp("Hi CHAVET, I am visiting your store in Krishna Nagar. Please share location landmarks.")}
                className="w-full py-3 bg-[#171615] border border-white/20 hover:border-[#25D366] text-[#F7F2E9] text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                <span>WHATSAPP FOR STORE ASSISTANCE</span>
              </button>
            </div>

          </div>

          {/* Interactive Map Link Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#1f1d1b] border border-[#C9A96E]/30 relative overflow-hidden flex flex-col min-h-[350px]">
            <a
              href={BRAND_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-full min-h-[350px] w-full bg-[#171615] block group"
            >
              <img
                src="/hero.jpg"
                alt="CHAVET Store Location"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171615] via-[#171615]/50 to-transparent" />

              {/* Overlay Location Pin Card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A96E]/20 border-2 border-[#C9A96E] flex items-center justify-center text-[#C9A96E] mb-4 group-hover:scale-110 transition-transform">
                  <MapPin size={30} />
                </div>
                
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#C9A96E] uppercase mb-1">
                  KRISHNA NAGAR, NEW DELHI
                </span>
                
                <h4 className="text-2xl font-serif-heading font-semibold text-[#F7F2E9] mb-2 group-hover:text-[#C9A96E] transition-colors">
                  CHAVET
                </h4>

                <p className="text-xs text-[#E6DFC8]/80 max-w-sm mb-6 leading-relaxed">
                  Lal Quater, B-7/2, Satanam Marg, Block B, Krishna Nagar, New Delhi, Delhi 110051
                </p>

                <div className="px-6 py-2.5 bg-[#C9A96E] text-[#171615] text-xs font-bold tracking-widest uppercase flex items-center space-x-2 shadow-xl">
                  <Navigation size={14} />
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
