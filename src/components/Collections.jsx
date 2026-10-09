import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Eye, MessageCircle, Heart, Search, Sparkles } from 'lucide-react';

export default function Collections({ onSelectProduct, onOpenWhatsApp, savedItems, onToggleSave }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.occasion.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collections" className="py-24 bg-[#FAF7F2] text-[#171615] relative">
      
      {/* Decorative Gold Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-[#91753B] mb-2">
            <Sparkles size={14} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">CURATED WEDDING WEAR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading text-[#171615] tracking-tight">
            THE WEDDING COLLECTIONS
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] my-4"></div>
          <p className="text-sm sm:text-base font-light text-[#55524E] max-w-xl">
            Explore handcrafted sherwanis, contemporary Indo-Western cuts, and bespoke royal wedding ensembles.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-[#171615]/10 pb-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#171615] text-[#F7F2E9] shadow-lg font-bold'
                    : 'bg-[#FFFFFF] text-[#171615] border border-[#171615]/15 hover:border-[#C9A96E]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#91753B]" />
            <input
              type="text"
              placeholder="Search silk, zardozi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FFFFFF] border border-[#171615]/20 text-xs text-[#171615] placeholder-[#171615]/40 focus:outline-none focus:border-[#C9A96E]"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFFFF] border border-[#171615]/10">
            <p className="text-base text-[#55524E]">No garment matches your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold bg-[#171615] text-[#F7F2E9]"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isSaved = savedItems.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="ivory-card group flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#EFEAE0]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-[0.98]"
                      loading="lazy"
                    />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 bg-[#171615] border border-[#C9A96E]/50 px-3 py-1 text-[9px] font-bold tracking-widest text-[#C9A96E] uppercase">
                      {product.tag}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => onToggleSave(product.id)}
                      className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-colors ${
                        isSaved
                          ? 'bg-[#C9A96E] text-[#171615]'
                          : 'bg-[#FFFFFF]/80 text-[#171615] hover:text-[#91753B]'
                      }`}
                      title={isSaved ? "Saved" : "Save look"}
                    >
                      <Heart size={16} fill={isSaved ? "#171615" : "none"} />
                    </button>

                    {/* Quick View Hover Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171615]/90 via-[#171615]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="w-full py-3 bg-[#F7F2E9] text-[#171615] text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                      >
                        <Eye size={16} />
                        <span>QUICK VIEW DETAILS</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between bg-[#FFFFFF] border-t border-[#171615]/10">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] tracking-widest text-[#91753B] uppercase font-bold">
                          {product.categoryLabel}
                        </span>
                        <span className="text-xs font-serif-heading font-bold text-[#171615]">
                          {product.price}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif-heading font-semibold text-[#171615] group-hover:text-[#91753B] transition-colors mb-2 leading-snug">
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#55524E] font-light line-clamp-2 mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Quick Info & WhatsApp Action */}
                    <div className="pt-4 border-t border-[#171615]/10 flex items-center justify-between">
                      <div className="text-[11px] text-[#55524E] font-light">
                        <span>{product.fabric}</span>
                      </div>

                      <button
                        onClick={() =>
                          onOpenWhatsApp(
                            `Hi CHAVET, I am interested in *${product.name}* (${product.price}). Please share price breakdown and fitting details.`
                          )
                        }
                        className="flex items-center space-x-1.5 text-xs font-bold text-[#91753B] hover:text-[#171615] tracking-wider uppercase transition-colors"
                      >
                        <MessageCircle size={14} className="text-[#25D366]" />
                        <span>ENQUIRE</span>
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
