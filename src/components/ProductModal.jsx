import React, { useState } from 'react';
import { X, MessageCircle, Heart } from 'lucide-react';

export default function ProductModal({ product, onClose, onOpenWhatsApp, isSaved, onToggleSave }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizesAvailable[0] || '40');
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleWhatsAppEnquiry = () => {
    const text = `Hi CHAVET, I am interested in *${product.name}* (Price: ${product.price}, Selected Size: ${selectedSize}). Please provide consultation & ordering steps.`;
    onOpenWhatsApp(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171615]/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#1f1d1b] border border-[#C9A96E]/30 text-[#F7F2E9] shadow-2xl overflow-hidden my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#E6DFC8] hover:text-[#C9A96E] bg-[#171615]/70 backdrop-blur-md rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image Viewer */}
          <div className="relative bg-[#171615] flex flex-col justify-between p-4 sm:p-6 border-b md:border-b-0 md:border-r border-[#C9A96E]/15">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#171615]">
              <img
                src={images[activeImgIndex]}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-all duration-500"
              />

              <div className="absolute top-3 left-3 bg-[#171615]/90 border border-[#C9A96E]/40 px-3 py-1 text-[9px] font-bold tracking-widest text-[#C9A96E] uppercase">
                {product.tag}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex space-x-3 mt-4 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-16 h-20 border transition-all overflow-hidden shrink-0 ${
                      activeImgIndex === idx ? 'border-[#C9A96E] scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#C9A96E] uppercase">
                  {product.categoryLabel}
                </span>
                <button
                  onClick={() => onToggleSave(product.id)}
                  className={`flex items-center space-x-1 text-xs ${isSaved ? 'text-[#C9A96E]' : 'text-[#E6DFC8]/70 hover:text-[#C9A96E]'}`}
                >
                  <Heart size={16} fill={isSaved ? "#C9A96E" : "none"} />
                  <span>{isSaved ? "Saved" : "Save Look"}</span>
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#F7F2E9] mb-2 leading-snug">
                {product.name}
              </h2>

              <p className="text-xl font-serif-heading font-semibold text-[#C9A96E] mb-6">
                {product.price}
                <span className="text-[11px] font-sans font-light text-[#E6DFC8]/60 ml-2">
                  (Includes Tailoring & Fitting)
                </span>
              </p>

              <p className="text-xs sm:text-sm text-[#E6DFC8]/80 font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="space-y-3 p-4 bg-[#171615]/60 border border-[#C9A96E]/15 mb-6 text-xs">
                <div className="flex items-start justify-between">
                  <span className="text-[#E6DFC8]/60">Fabric:</span>
                  <span className="text-[#F7F2E9] font-medium text-right">{product.fabric}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#E6DFC8]/60">Embroidery:</span>
                  <span className="text-[#F7F2E9] font-medium text-right max-w-[200px]">{product.embroidery}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#E6DFC8]/60">Lead Time:</span>
                  <span className="text-[#C9A96E] font-semibold">{product.leadTime}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#E6DFC8]/60">Best For:</span>
                  <span className="text-[#F7F2E9]">{product.occasion}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="text-xs font-semibold tracking-wider text-[#F7F2E9] uppercase block mb-2">
                  SELECT SIZE
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizesAvailable.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-2 text-xs font-medium border transition-all ${
                        selectedSize === sz
                          ? 'border-[#C9A96E] bg-[#C9A96E] text-[#171615] font-bold'
                          : 'border-[#C9A96E]/30 bg-[#171615]/40 text-[#E6DFC8] hover:border-[#C9A96E]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-4 border-t border-[#C9A96E]/20">
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-[#171615] text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <MessageCircle size={16} className="text-[#171615]" />
                <span>ENQUIRE ON WHATSAPP NOW</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
