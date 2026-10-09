import React, { useState } from 'react';
import { CRAFT_STEPS } from '../data/products';
import { Sparkles, Scissors, Compass, CheckCircle2, MessageCircle, ArrowRight, Layers, Palette, ShieldCheck } from 'lucide-react';

export default function BespokeStudio({ onOpenWhatsApp, onOpenAppointment }) {
  // Bespoke Configurator State
  const [selectedSilhouette, setSelectedSilhouette] = useState('Royal Sherwani');
  const [selectedColor, setSelectedColor] = useState('Warm Ivory & Muted Gold');
  const [selectedEmbroidery, setSelectedEmbroidery] = useState('Heavy Hand Zardozi');
  const [selectedFabric, setSelectedFabric] = useState('Pure Raw Silk');

  const silhouettes = ['Royal Sherwani', 'Indo-Western Jacket', 'Velvet Tuxedo', 'Custom Achkan'];
  const colors = [
    { name: 'Warm Ivory & Muted Gold', hex: '#F7F2E9', accent: '#B99A61' },
    { name: 'Charcoal Black & Antique Gold', hex: '#171615', accent: '#B99A61' },
    { name: 'Deep Burgundy & Velvet Gold', hex: '#4A1521', accent: '#D5B980' },
    { name: 'Imperial Midnight Blue', hex: '#111827', accent: '#B99A61' }
  ];
  const embroideries = ['Heavy Hand Zardozi', 'Minimalist Dabka Collar', 'Silk Brocade Weave', 'Marodi & Threadwork'];
  const fabrics = ['Pure Raw Silk', 'Silk Velvet', 'Italian Suiting Blend', 'Benarasi Brocade'];

  const handleCustomQuote = () => {
    const text = `Hi CHAVET Bespoke Studio, I designed a custom outfit request:
- *Silhouette*: ${selectedSilhouette}
- *Palette*: ${selectedColor}
- *Embroidery*: ${selectedEmbroidery}
- *Fabric*: ${selectedFabric}
Please schedule a fitting consultation and share custom price estimation.`;
    onOpenWhatsApp(text);
  };

  return (
    <section id="custom-design" className="py-24 bg-[#0f0e0d] text-[#F7F2E9] relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#B99A61]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#B99A61] mb-2">
            <Scissors size={16} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">04 / CUSTOM DESIGN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading tracking-tight text-[#F7F2E9]">
            THE BESPOKE CRAFT PROCESS
          </h2>
          <div className="w-16 h-[1px] bg-[#B99A61] my-4 mx-auto" />
          <p className="text-sm sm:text-base font-light text-[#DCD4C3]/80 max-w-2xl mx-auto">
            Every groom's story is unique. We tailor handcrafted wedding wear designed around your vision, body measurements, and wedding theme.
          </p>
        </div>

        {/* 3-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {CRAFT_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="editorial-card p-8 relative flex flex-col justify-between group"
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-serif-heading font-bold text-gold-gradient">
                  {stepItem.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#B99A61]/10 border border-[#B99A61]/30 flex items-center justify-center text-[#B99A61]">
                  {idx === 0 && <Sparkles size={18} />}
                  {idx === 1 && <Compass size={18} />}
                  {idx === 2 && <CheckCircle2 size={18} />}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif-heading font-semibold text-[#F7F2E9] mb-3 group-hover:text-[#B99A61] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-[#DCD4C3]/75 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-[10px] tracking-widest text-[#B99A61] uppercase font-bold">
                <span>PHASE {idx + 1} OF CRAFT</span>
              </div>
            </div>
          ))}

        </div>

        {/* Interactive Custom Outfit Configurator */}
        <div className="bg-[#1f1d1b] border border-[#B99A61]/30 p-6 sm:p-10 shadow-2xl relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B99A61]/20 pb-6 mb-8 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#B99A61] uppercase">
                INTERACTIVE BESPOKE BUILDER
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-heading text-[#F7F2E9]">
                Design Your Signature Wedding Outfit
              </h3>
            </div>
            <span className="text-xs text-[#DCD4C3]/70 font-light max-w-xs">
              Configure your preferred look below and send your specifications directly to our master tailors.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left Controls */}
            <div className="space-y-6">
              
              {/* 1. Silhouette */}
              <div>
                <label className="text-xs font-bold tracking-widest text-[#F7F2E9] uppercase block mb-3 flex items-center space-x-2">
                  <Layers size={14} className="text-[#B99A61]" />
                  <span>1. CHOOSE SILHOUETTE</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {silhouettes.map((sil) => (
                    <button
                      key={sil}
                      onClick={() => setSelectedSilhouette(sil)}
                      className={`p-3 text-xs font-medium text-left border transition-all ${
                        selectedSilhouette === sil
                          ? 'border-[#B99A61] bg-[#B99A61]/20 text-[#F7F2E9] font-semibold'
                          : 'border-white/10 bg-[#171615] text-[#DCD4C3]/70 hover:border-[#B99A61]/40'
                      }`}
                    >
                      {sil}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Color Palette */}
              <div>
                <label className="text-xs font-bold tracking-widest text-[#F7F2E9] uppercase block mb-3 flex items-center space-x-2">
                  <Palette size={14} className="text-[#B99A61]" />
                  <span>2. COLOR PALETTE</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`p-3 text-xs font-medium text-left border flex items-center space-x-3 transition-all ${
                        selectedColor === c.name
                          ? 'border-[#B99A61] bg-[#B99A61]/20 text-[#F7F2E9] font-semibold'
                          : 'border-white/10 bg-[#171615] text-[#DCD4C3]/70 hover:border-[#B99A61]/40'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Embroidery & Fabric */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold tracking-widest text-[#F7F2E9] uppercase block mb-2">
                    3. EMBROIDERY TYPE
                  </label>
                  <select
                    value={selectedEmbroidery}
                    onChange={(e) => setSelectedEmbroidery(e.target.value)}
                    className="w-full p-3 bg-[#171615] border border-white/10 text-xs text-[#F7F2E9] focus:border-[#B99A61] focus:outline-none"
                  >
                    {embroideries.map((emb) => (
                      <option key={emb} value={emb}>
                        {emb}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-widest text-[#F7F2E9] uppercase block mb-2">
                    4. FABRIC CHOICE
                  </label>
                  <select
                    value={selectedFabric}
                    onChange={(e) => setSelectedFabric(e.target.value)}
                    className="w-full p-3 bg-[#171615] border border-white/10 text-xs text-[#F7F2E9] focus:border-[#B99A61] focus:outline-none"
                  >
                    {fabrics.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Right Summary Card & WhatsApp Consultation Trigger */}
            <div className="bg-[#171615] p-6 sm:p-8 border border-[#B99A61]/30 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold tracking-[0.3em] text-[#B99A61] uppercase block mb-2">
                  YOUR CUSTOM SPECIFICATION SUMMARY
                </span>
                
                <h4 className="text-2xl font-serif-heading text-[#F7F2E9] mb-6 border-b border-white/10 pb-3">
                  {selectedSilhouette}
                </h4>

                <div className="space-y-4 text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#DCD4C3]/60">Palette:</span>
                    <span className="text-[#B99A61] font-semibold">{selectedColor}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#DCD4C3]/60">Embroidery:</span>
                    <span className="text-[#F7F2E9] font-medium">{selectedEmbroidery}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#DCD4C3]/60">Fabric:</span>
                    <span className="text-[#F7F2E9] font-medium">{selectedFabric}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#DCD4C3]/60">Estimated Crafting Time:</span>
                    <span className="text-[#F7F2E9]">3 – 4 Weeks</span>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-[#B99A61]/10 border border-[#B99A61]/20 text-[11px] text-[#DCD4C3] flex items-center space-x-2">
                  <ShieldCheck size={16} className="text-[#B99A61] shrink-0" />
                  <span>Includes 1-on-1 trial with Rudrakshi Creation master tailors.</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={handleCustomQuote}
                  className="w-full py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-[#171615] text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={16} className="text-[#171615]" />
                  <span>CONSULT MASTER TAILOR ON WHATSAPP</span>
                </button>

                <button
                  onClick={onOpenAppointment}
                  className="w-full py-2.5 bg-transparent border border-[#B99A61]/40 text-[#DCD4C3] hover:text-[#F7F2E9] hover:border-[#B99A61] text-[11px] font-semibold tracking-wider uppercase transition-all"
                >
                  BOOK NEW DELHI SHOWROOM FITTING
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
