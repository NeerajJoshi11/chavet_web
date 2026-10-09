import React from 'react';
import { BRAND_INFO } from '../data/products';
import { Award, ShieldCheck, Heart, Sparkles, Gem, Clock } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-[#0f0e0d] text-[#F7F2E9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Image & Emblem */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden border border-[#B99A61]/30 relative group">
              <img
                src="/sherwani.jpg"
                alt="CHAVET Craftsmanship"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171615] via-transparent to-transparent" />
            </div>

            {/* Emblem Card Overlay */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col p-6 bg-[#171615] border border-[#B99A61]/40 shadow-2xl max-w-xs">
              <Gem className="w-8 h-8 text-[#B99A61] mb-2" />
              <span className="font-serif-heading text-lg font-semibold text-[#F7F2E9]">
                Rudrakshi Creation
              </span>
              <p className="text-[11px] text-[#DCD4C3]/70 font-light mt-1">
                Legacy of fine Indian textiles & royal groomwear master craftsmanship.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[#B99A61]">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">THE BRAND HERITAGE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-heading text-[#F7F2E9] leading-tight">
              CRAFTING MEMORIES FOR YOUR <span className="text-gold-gradient italic">MOST SACRED DAY.</span>
            </h2>

            <p className="text-sm sm:text-base font-light text-[#DCD4C3]/90 leading-relaxed">
              Founded under the visionary umbrella of <strong className="text-[#F7F2E9] font-medium">Rudrakshi Creation</strong>, CHAVET was born out of a passion to redefine wedding fashion for grooms. We bridge centuries-old Indian hand embroidery traditions—such as zardozi, marodi, and pittan work—with clean, contemporary modern silhouettes.
            </p>

            <p className="text-xs sm:text-sm font-light text-[#DCD4C3]/75 leading-relaxed">
              From hand-selecting pure mulberry raw silks and handwoven Benarasi brocades to conducting meticulous measurement trials, our master tailors ensure that every garment feels light, effortless, and undeniably royal.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#B99A61]/20">
              <div className="p-4 bg-[#1f1d1b] border border-[#B99A61]/15">
                <ShieldCheck className="w-5 h-5 text-[#B99A61] mb-2" />
                <h4 className="text-xs font-bold tracking-widest text-[#F7F2E9] uppercase">Authentic Fabrics</h4>
                <p className="text-[11px] text-[#DCD4C3]/60 mt-1 font-light">100% verified pure silk, brocade & suiting</p>
              </div>

              <div className="p-4 bg-[#1f1d1b] border border-[#B99A61]/15">
                <Clock className="w-5 h-5 text-[#B99A61] mb-2" />
                <h4 className="text-xs font-bold tracking-widest text-[#F7F2E9] uppercase">Timely Delivery</h4>
                <p className="text-[11px] text-[#DCD4C3]/60 mt-1 font-light">Strict trial & delivery schedules guaranteed</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
