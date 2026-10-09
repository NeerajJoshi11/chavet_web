import React from 'react';
import { CUSTOMER_STORIES } from '../data/products';
import { Star, MapPin, Quote, Sparkles } from 'lucide-react';

export default function CustomerStories({ onOpenWhatsApp }) {
  return (
    <section id="stories" className="py-24 bg-[#171615] text-[#F7F2E9] relative">
      
      {/* Decorative Top Border Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#B99A61]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#B99A61] mb-2">
            <Sparkles size={14} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">05 / CUSTOMER STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading text-[#F7F2E9] tracking-tight">
            REAL CHAVET GROOMS
          </h2>
          <div className="w-12 h-[1px] bg-[#B99A61] my-4 mx-auto" />
          <p className="text-sm sm:text-base font-light text-[#DCD4C3]/80 max-w-xl mx-auto">
            Genuine wedding moments and real groom looks, tailored with love and precision by Rudrakshi Creation.
          </p>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_STORIES.map((story) => (
            <div
              key={story.id}
              className="editorial-card group flex flex-col justify-between overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1f1d1b]">
                <img
                  src={story.image}
                  alt={story.groomName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1d1b] via-transparent to-transparent" />

                {/* Location Badge */}
                <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 text-[10px] font-semibold tracking-wider text-[#B99A61] uppercase bg-[#171615]/80 px-2.5 py-1 border border-[#B99A61]/30 backdrop-blur-sm">
                  <MapPin size={12} />
                  <span>{story.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-[#1f1d1b]">
                <div>
                  {/* Star Rating */}
                  <div className="flex space-x-1 text-[#B99A61] mb-3">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#B99A61" />
                    ))}
                  </div>

                  <Quote className="text-[#B99A61]/30 mb-2 w-8 h-8" />

                  <p className="text-xs sm:text-sm text-[#DCD4C3] font-light italic leading-relaxed mb-6">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-serif-heading font-semibold text-[#F7F2E9]">
                      {story.groomName}
                    </h4>
                    <span className="text-[11px] text-[#B99A61] font-light block">
                      Outfit: {story.look}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      onOpenWhatsApp(`Hi CHAVET, I love the outfit created for ${story.groomName} (${story.look}). I'd like to get something similar.`)
                    }
                    className="p-2 text-[#DCD4C3] hover:text-[#B99A61] transition-colors"
                    title="Ask about this look"
                  >
                    <Sparkles size={16} />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Feature Banner Quote */}
        <div className="mt-16 p-8 border border-[#B99A61]/30 bg-[#1f1d1b]/60 backdrop-blur-md text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-serif-heading text-[#F7F2E9] italic mb-3">
            "Let the craftsmanship lead. Strong photography, calm typography, restrained gold accents and clear enquiry paths."
          </p>
          <span className="text-[10px] tracking-[0.3em] text-[#B99A61] font-bold uppercase">
            CHAVET DESIGN PHILOSOPHY
          </span>
        </div>

      </div>

    </section>
  );
}
