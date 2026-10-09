import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import ProductModal from './components/ProductModal';
import CustomerStories from './components/CustomerStories';
import VisitShowroom from './components/VisitShowroom';
import WhatsAppConcierge from './components/WhatsAppConcierge';
import Footer from './components/Footer';
import { BRAND_INFO } from './data/products';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [savedItems, setSavedItems] = useState([]);

  // Direct WhatsApp Launcher
  const handleOpenWhatsApp = (customText) => {
    const text = customText || `Hi CHAVET, I would like to enquire about your wedding wear.`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Toggle Save/Wishlist
  const handleToggleSave = (productId) => {
    setSavedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-[#171615] text-[#F7F2E9] selection:bg-[#B99A61] selection:text-[#171615]">
      
      {/* 1. Header Navigation */}
      <Header
        onOpenWhatsApp={handleOpenWhatsApp}
        savedCount={savedItems.length}
      />

      {/* 2. Hero Section */}
      <Hero
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* 3. Collections Grid */}
      <Collections
        onSelectProduct={(product) => setSelectedProduct(product)}
        onOpenWhatsApp={handleOpenWhatsApp}
        savedItems={savedItems}
        onToggleSave={handleToggleSave}
      />

      {/* 4. Customer Stories / Groom Testimonials */}
      <CustomerStories
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* 5. Showroom Location & Directions */}
      <VisitShowroom
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* 6. Footer */}
      <Footer
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Modals & Floating Drawers */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenWhatsApp={handleOpenWhatsApp}
          isSaved={savedItems.includes(selectedProduct.id)}
          onToggleSave={handleToggleSave}
        />
      )}

      <WhatsAppConcierge
        onOpenWhatsApp={handleOpenWhatsApp}
      />

    </div>
  );
}
