export const BRAND_INFO = {
  name: "CHAVET",
  parentBrand: "Rudrakshi Creation",
  tagline: "A refined digital home for wedding wear.",
  heroHeadline: "MADE FOR YOUR MOMENT.",
  heroSubheadline: "Wedding wear, personalised to your story.",
  phone: "+91 98919 09606",
  phoneRaw: "09891909606",
  whatsappNumber: "919891909606",
  address: "Lal Quater, B-7/2, Satanam Marg, Block B, Krishna Nagar, New Delhi, Delhi 110051",
  shortAddress: "Krishna Nagar, New Delhi",
  openingHours: "Monday – Saturday: 10:00 AM – 8:30 PM (Sunday by Appointment)",
  instagram: "@chavet.official",
  googleMapsUrl: "https://www.google.com/maps/place/CHAVET/@28.6578324,77.2776137,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfc9bfd9aef4d:0x353685fbf89bd91d!8m2!3d28.6578324!4d77.2801886!16s%2Fg%2F11sqcznwgq?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D"
};

export const CATEGORIES = [
  { id: "all", name: "All Collections" },
  { id: "sherwanis", name: "Royal Sherwanis", description: "Regal hand-embroidered silhouettes crafted for the grand wedding day." },
  { id: "indo-western", name: "Indo-Western", description: "Contemporary cuts with traditional embroidery for Sangeet & Reception." },
  { id: "suits", name: "Wedding Suits & Tuxedos", description: "Sharp tailored luxury velvet & raw silk tuxedos for cocktail evenings." },
  { id: "achkans", name: "Custom Achkans", description: "Bespoke short achkans and jackets personalized to your exact aesthetic." }
];

export const PRODUCTS = [
  {
    id: "chavet-001",
    name: "The Royal Ivory Zardozi Sherwani",
    category: "sherwanis",
    categoryLabel: "Royal Sherwanis",
    tag: "Signature Royal",
    image: "/sherwani.jpg",
    gallery: ["/sherwani.jpg", "/hero.jpg"],
    price: "₹85,000",
    fabric: "Pure Raw Silk with Velvet Stole",
    embroidery: "Hand Zardozi with Antiqued Gold Threadwork & Seed Pearls",
    leadTime: "3 - 4 Weeks Bespoke Tailoring",
    description: "An heirloom-grade royal ivory sherwani meticulously embellished with antiqued gold zardozi motifs along the collar, chest and sleeves. Paired with a deep cognac velvet stole.",
    sizesAvailable: ["38", "40", "42", "44", "46", "Custom Tailored Fit"],
    occasion: "Grand Wedding Day / Baraat",
    customizationOptions: ["Velvet Dupatta Color", "Embroidery Density", "Button Styling", "Inner Kurta Palette"]
  },
  {
    id: "chavet-002",
    name: "Bespoke Royal Heritage Achkan",
    category: "sherwanis",
    categoryLabel: "Royal Sherwanis",
    tag: "Best Seller",
    image: "/hero.jpg",
    gallery: ["/hero.jpg", "/sherwani.jpg"],
    price: "₹72,000",
    fabric: "Handwoven Silk Brocade",
    embroidery: "Minimalist Gold Dabka & Sequins",
    leadTime: "2 - 3 Weeks Custom Fit",
    description: "Designed for the modern groom who appreciates classic grandeur. Features a structured Mandarin collar, signature jeweled buttons, and an elegant velvet dupatta.",
    sizesAvailable: ["38", "40", "42", "44", "46", "Custom Tailored Fit"],
    occasion: "Pheras / Royal Reception",
    customizationOptions: ["Brocade Weave Selection", "Collar Width", "Cuff Monogram"]
  },
  {
    id: "chavet-003",
    name: "Charcoal Obsidian Asymmetrical Indo-Western",
    category: "indo-western",
    categoryLabel: "Indo-Western",
    tag: "Contemporary",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"],
    price: "₹58,000",
    fabric: "Italian Suiting Blend & Matte Silk",
    embroidery: "Subtle Gold Metallic Collar & Shoulder Accent",
    leadTime: "2 Weeks",
    description: "A bold, modern silhouette featuring an asymmetrical front wrap, sleek gold piping, and tailored charcoal trousers.",
    sizesAvailable: ["38", "40", "42", "44", "Custom Tailored Fit"],
    occasion: "Sangeet / Cocktails / Engagement",
    customizationOptions: ["Asymmetrical Lapel Cut", "Metallic Hardware Finish"]
  },
  {
    id: "chavet-004",
    name: "Imperial Midnight Velvet Tuxedo",
    category: "suits",
    categoryLabel: "Wedding Suits & Tuxedos",
    tag: "Evening Elegance",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"],
    price: "₹65,000",
    fabric: "Deep Charcoal Velvet with Satin Silk Facing",
    embroidery: "Hand-finished Silk Satin Lapels",
    leadTime: "2 Weeks",
    description: "Deep charcoal velvet tuxedo jacket featuring hand-cut shawl lapels in tonal satin silk. Perfect for reception evenings and high-profile cocktail galas.",
    sizesAvailable: ["38", "40", "42", "44", "46", "Custom Tailored Fit"],
    occasion: "Grand Reception / Gala",
    customizationOptions: ["Peak or Shawl Lapel", "Silk Bowtie Matching", "Monogram Inner Lining"]
  },
  {
    id: "chavet-005",
    name: "Antique Gold Brocade Achkan Jacket",
    category: "achkans",
    categoryLabel: "Custom Achkans",
    tag: "Bespoke Craft",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop"],
    price: "₹48,000",
    fabric: "Benarasi Gold Brocade Silk",
    embroidery: "Traditional Marodi & Dabka Trim",
    leadTime: "2 Weeks",
    description: "A lightweight tailored achkan jacket crafted in authentic Benarasi gold brocade, paired with warm ivory silk churidar.",
    sizesAvailable: ["38", "40", "42", "44", "Custom Tailored Fit"],
    occasion: "Haldi / Mehendi / Sangeet Night",
    customizationOptions: ["Brocade Pattern", "Length Adjustment", "Contrast Pocket Square"]
  },
  {
    id: "chavet-006",
    name: "Cognac Velvet Royal Groom Set",
    category: "sherwanis",
    categoryLabel: "Royal Sherwanis",
    tag: "Limited Edition",
    image: "/sherwani.jpg",
    gallery: ["/sherwani.jpg"],
    price: "₹92,000",
    fabric: "Rich Silk Velvet & Raw Silk Base",
    embroidery: "Intricate Antique Gold Pittan & Mirror Accents",
    leadTime: "4 Weeks",
    description: "Warm cognac and gold velvet ensemble designed to make a majestic statement under wedding stage lights.",
    sizesAvailable: ["38", "40", "42", "44", "46", "Custom Tailored Fit"],
    occasion: "Royal Pheras & Wedding Reception",
    customizationOptions: ["Velvet Tone Adjustments", "Turban Color Matching"]
  }
];

export const CUSTOMER_STORIES = [
  {
    id: "story-1",
    groomName: "Aarav & Meera",
    location: "Udaivilas, Udaipur",
    look: "The Royal Ivory Zardozi Sherwani",
    image: "/hero.jpg",
    quote: "CHAVET transformed my vision into reality. The hand embroidery detail received endless compliments on our wedding day. The fit was impeccable!",
    rating: 5
  },
  {
    id: "story-2",
    groomName: "Rohan & Devika",
    location: "Taj Lake Palace",
    look: "Bespoke Royal Heritage Achkan",
    image: "/sherwani.jpg",
    quote: "From our first consultation to the final fitting, every step was seamless. The gold zardozi work felt truly royal.",
    rating: 5
  },
  {
    id: "story-3",
    groomName: "Kabir & Ananya",
    location: "The Leela Palace, New Delhi",
    look: "Imperial Midnight Velvet Tuxedo",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    quote: "For our cocktail night, I wanted a sleek velvet tux that felt both modern and regal. CHAVET delivered perfection in just 2 weeks.",
    rating: 5
  }
];

export const CRAFT_STEPS = [
  {
    step: "01",
    title: "Share Inspiration",
    description: "Browse our collections or share your personal moodboard, color palette, and preferred silhouette with our wedding stylists.",
    icon: "Sparkles"
  },
  {
    step: "02",
    title: "Consultation & Fit",
    description: "Experience a personalized fitting session at our Krishna Nagar, New Delhi showroom or virtual consultation. Choose fabrics, embroidery motifs, and inner linings.",
    icon: "Compass"
  },
  {
    step: "03",
    title: "Craft & Trial",
    description: "Our master artisans hand-craft your outfit over 3-4 weeks. Attend your final trial at CHAVET studio for zero-compromise precision.",
    icon: "CheckCircle2"
  }
];
