import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Sparkles, ChevronRight, Gem } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function Hero({ onOpenWhatsApp }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: "The Royal Ivory Zardozi Sherwani",
      subtitle: "Hand-embroidered pure silk with antiqued zardozi motifs & cognac velvet stole",
      image: "/sherwani.jpg",
      tag: "ROYAL SIGNATURE"
    },
    {
      title: "Bespoke Royal Heritage Achkan",
      subtitle: "Handwoven silk brocade featuring structured Mandarin collar & jeweled buttons",
      image: "/hero.jpg",
      tag: "FEATURED LOOK"
    }
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#171615]">
      
      {/* Subtle Ambient Background Gradient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#C9A96E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Brand Crest Pill */}
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 border border-[#C9A96E]/40 bg-[#171615]/80 backdrop-blur-md mb-6">
              <Gem className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A96E]">
                CHAVET BY RUDRAKSHI CREATION
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-heading font-light tracking-tight text-[#F7F2E9] mb-6 leading-[1.05]">
              MADE FOR <br className="hidden sm:block" />
              <span className="font-serif-heading font-bold text-gold-gradient italic">YOUR MOMENT.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-light text-[#E6DFC8]/90 tracking-wide max-w-xl mb-10 leading-relaxed">
              {BRAND_INFO.heroSubheadline} Handcrafted royal sherwanis, contemporary Indo-Western silhouettes, and bespoke wedding ensembles tailored in New Delhi.
            </p>

            {/* Dual Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#collections"
                className="px-8 py-4 bg-gold-gradient hover:bg-gold-gradient-hover text-[#171615] text-xs font-bold tracking-[0.2em] uppercase transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center space-x-3 group gold-glow"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenWhatsApp("Hi CHAVET, I would like to enquire about your wedding wear collection.")}
                className="px-8 py-4 bg-[#171615] hover:bg-[#C9A96E]/15 text-[#F7F2E9] border border-[#C9A96E]/50 text-xs font-semibold tracking-[0.2em] uppercase transition-all backdrop-blur-sm flex items-center justify-center space-x-3 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>ENQUIRE ON WHATSAPP</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Editorial Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Image Frame with Gold Border */}
            <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-[#C9A96E]/40 shadow-2xl bg-[#1f1d1b] group">
              <img
                src={heroSlides[activeSlide].image}
                alt={heroSlides[activeSlide].title}
                className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-all duration-700"
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171615] via-transparent to-transparent" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 bg-[#171615]/90 border border-[#C9A96E]/50 px-3 py-1 text-[9px] font-bold tracking-widest text-[#C9A96E] uppercase backdrop-blur-sm">
                {heroSlides[activeSlide].tag}
              </div>

              {/* Floating Slide Info Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#171615]/90 border border-[#C9A96E]/30 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-serif-heading font-semibold text-[#F7F2E9]">
                    {heroSlides[activeSlide].title}
                  </h4>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
                    className="p-1.5 bg-[#C9A96E]/20 hover:bg-[#C9A96E] text-[#C9A96E] hover:text-[#171615] transition-colors rounded-full"
                    title="Switch look"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
                <p className="text-[11px] text-[#E6DFC8]/70 font-light mt-1 line-clamp-1">
                  {heroSlides[activeSlide].subtitle}
                </p>
              </div>

            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 transition-all ${
                    activeSlide === idx ? 'w-8 bg-[#C9A96E]' : 'w-2 bg-[#C9A96E]/30'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
