import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Anchor, Users, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import yachtHeroStatic from "@/assets/yacht-hero-static.jpg";
import yachtGolden from "@/assets/yacht-golden-new.png";
import yachtTarela from "@/assets/yacht-tarela.png";
import yachtSundancer from "@/assets/yacht-sundancer.png";
import yachtAiconForever from "@/assets/yacht-aicon-forever.png";
import yachtCarbon1 from "@/assets/yacht-carbon-1.jpg";
import yachtCarbon2 from "@/assets/yacht-carbon-2.jpg";
import yachtCarbon3 from "@/assets/yacht-carbon-3.jpg";
import yachtCarbon4 from "@/assets/yacht-carbon-4.jpg";
import yachtMrsAmber from "@/assets/yacht-mrs-amber.png";
import yachtMahiMahi from "@/assets/yacht-mahi-mahi.png";
import yachtMalex from "@/assets/yacht-malex.png";
import yachtCranchi from "@/assets/yacht-cranchi.png";
import malexGallery1 from "@/assets/malex-gallery-1.jpg";
import malexGallery2 from "@/assets/malex-gallery-2.jpg";
import malexGallery3 from "@/assets/malex-gallery-3.jpg";
import malexGallery4 from "@/assets/malex-gallery-4.jpg";
import foreverGallery1 from "@/assets/forever-gallery-1.jpg";
import foreverGallery2 from "@/assets/forever-gallery-2.jpg";
import foreverGallery3 from "@/assets/forever-gallery-3.jpg";
import foreverGallery4 from "@/assets/forever-gallery-4.jpg";
import foreverGallery5 from "@/assets/forever-gallery-5.jpg";
import candelaGallery1 from "@/assets/candela-gallery-1.jpg";
import candelaGallery2 from "@/assets/candela-gallery-2.jpg";
import mangustaGallery1 from "@/assets/mangusta-gallery-1.jpg";
import mangustaGallery2 from "@/assets/mangusta-gallery-2.jpg";
import mangustaGallery3 from "@/assets/mangusta-gallery-3.jpg";
import mangustaGallery4 from "@/assets/mangusta-gallery-4.jpg";
import brisasGallery1 from "@/assets/yacht-brisas-gallery-1.jpg";
import yachtCoraje1 from "@/assets/yacht-coraje-1.jpg";
import yachtCoraje2 from "@/assets/yacht-coraje-2.jpg";
import yachtCoraje3 from "@/assets/yacht-coraje-3.jpg";
import yachtCoraje4 from "@/assets/yacht-coraje-4.jpg";
import yachtCoraje5 from "@/assets/yacht-coraje-5.jpg";
import yachtCoraje6 from "@/assets/yacht-coraje-6.jpg";
import yachtVibe from "@/assets/yacht-vibe.png";
import azimut39Gallery1 from "@/assets/yacht-azimut39-gallery-1.jpg";
import azimut39Gallery2 from "@/assets/yacht-azimut39-gallery-2.jpg";
import azimut39Gallery3 from "@/assets/yacht-azimut39-gallery-3.jpg";
import azimut39Gallery4 from "@/assets/yacht-azimut39-gallery-4.jpg";



const yachts = [
  {
    name: "MALEX",
    length: "31m",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Captain", "Fuel", "Cava", "Beers", "Soft Drinks", "Snacks"],
    price: "Starting From €6,050",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [malexGallery1, malexGallery2, malexGallery3, malexGallery4],
    premium: true,
  },
  {
    name: "MANGUSTA 80",
    length: "25.07m",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Champagne", "Wine", "Beers", "Sandwiches", "Fruit", "Jet Ski", "Paddle Board", "Donut", "Snorkel Equipment"],
    price: "Starting From €4,750",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [mangustaGallery1, mangustaGallery2, mangustaGallery3, mangustaGallery4],
    premium: true,
  },
  {
    name: "FOREVER",
    length: "22m",
    capacity: "10 passengers",
    includes: ["Jet Ski", "Snacks", "Fruit Platter", "Beers", "Cava", "Soft Drinks"],
    price: "Starting From €2,500",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [foreverGallery1, foreverGallery2, foreverGallery3, foreverGallery4, foreverGallery5],
    premium: true,
  },
  {
    name: "CANDELA",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Cava", "Beers", "Wine", "Soft Drinks", "Snacks"],
    price: "Starting From €2,400",
    minCharter: "4 hour minimum charter",
    images: [candelaGallery1, candelaGallery2],
    premium: true,
  },
  {
    name: "BRISAS",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Snacks", "Wine", "Beer", "Cava", "Paddle Board", "Jet Ski"],
    price: "Starting From €1,850",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [brisasGallery1],
    premium: true,
  },
  {
    name: "VIBE",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Snacks", "Wine", "Beers", "Soft Drinks", "Paddle Board", "Jet Ski"],
    price: "Starting From €1,850",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [yachtVibe],
    premium: true,
  },
  {
    name: "CARBON RED",
    length: "11.5m",
    capacity: "10 passengers",
    includes: ["Snacks", "Soft Drinks", "Wine", "Beers", "Sea Bob Water Sports", "Fresh Towels", "Stability Control", "Owner's Cabin with Bathroom"],
    price: "Starting From €1,000",
    minCharter: "2 hour minimum charter",
    images: [yachtCarbon1, yachtCarbon2, yachtCarbon3, yachtCarbon4],
  },
  {
    name: "CORAJE",
    length: "25m",
    capacity: "11 passengers",
    includes: ["Snacks", "Wine", "Beers", "Soft Drinks", "Paddle Board x2"],
    price: "Starting From €1,000",
    minCharter: "2 hour minimum charter",
    images: [yachtCoraje1, yachtCoraje2, yachtCoraje3, yachtCoraje4, yachtCoraje5, yachtCoraje6],
  },
  {
    name: "AZIMUT 39",
    length: "12m",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Snacks", "Wine", "Beer", "Soft Drinks", "Paddle Board"],
    price: "Starting From €850",
    minCharter: "2 hour minimum charter",
    images: [azimut39Gallery1, azimut39Gallery2, azimut39Gallery3, azimut39Gallery4],
  },
  {
    name: "CRANCHI",
    length: "12m",
    capacity: "9 passengers",
    includes: ["Captain", "Fuel", "Drinks", "Snacks"],
    price: "Starting From €680",
    images: [yachtCranchi],
  },
  {
    name: "GOLDEN",
    length: "11.6m",
    capacity: "11 passengers",
    includes: ["Captain", "Fuel", "Drinks/Snacks"],
    price: "Starting From €550",
    images: [yachtGolden],
    featured: true,
  },
  {
    name: "MAHI MAHI",
    length: "12m",
    capacity: "11 passengers",
    includes: ["Captain", "Fuel", "Drinks", "Fishing Equipment"],
    price: "Starting From €550",
    images: [yachtMahiMahi],
  },
];

function YachtImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={name}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Preload all images and show/hide based on current index */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${name} - Image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover ${
            idx === currentIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        />
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-primary w-4" : "bg-foreground/50"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function YachtCard({ yacht, index }: { yacht: typeof yachts[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-charcoal-light rounded-2xl border transition-all duration-500 h-full flex flex-col ${
        yacht.premium 
          ? "border-primary/40 hover:border-primary shadow-[0_0_30px_rgba(163,230,53,0.15)]" 
          : yacht.featured
          ? "border-primary/30 hover:border-primary/50"
          : "border-primary/10 hover:border-primary/30"
      }`}
    >
      
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
          <YachtImageCarousel images={yacht.images} name={yacht.name} />
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300 z-[2]" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
              {yacht.name}
            </h3>
          </div>
          <Anchor className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-foreground/60 text-sm">
          {yacht.length && (
            <div className="flex items-center gap-1.5">
              <Ruler className="w-4 h-4 text-primary/70" />
              <span>{yacht.length}</span>
            </div>
          )}
          <div className={`flex items-center gap-1.5 ${yacht.capacityHighlight ? "text-primary font-semibold" : ""}`}>
            <Users className={`w-4 h-4 ${yacht.capacityHighlight ? "text-primary" : "text-primary/70"}`} />
            <span>{yacht.capacity}</span>
          </div>
        </div>

        {/* Special highlights for MALEX */}
        {(yacht.minCharter || yacht.jetSki) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {yacht.minCharter && (
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                ⏱️ {yacht.minCharter}
              </span>
            )}
            {yacht.jetSki && (
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                🚤 Jet Ski Included
              </span>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {yacht.includes.slice(0, 4).map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="border-t border-primary/10 pt-4 flex-grow">
          <div className="text-primary font-semibold text-xl">{yacht.price}</div>
          <p className="text-foreground/50 text-xs mt-1">All prices include IVA (VAT), captain, fuel, docking fees, cava, beers, soft drinks and snacks</p>
        </div>

        <div className="mt-5 pt-4 border-t border-primary/10">
          <BookingButtons variant="compact" className="w-full" />
        </div>
      </div>

    </motion.div>
  );
}

export default function YachtCharter() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src={malexGallery1} 
          alt="Luxury Yacht Charter" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

        <div ref={heroRef} className="container mx-auto px-6 relative z-10 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Back to Services</span>
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-primary tracking-[0.4em] uppercase text-sm mb-4 drop-shadow-lg"
          >
            Luxury Fleet
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            Yacht <span className="text-gradient-lime">Charter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-lg"
          >
            Experience the Mediterranean in ultimate luxury. Choose from our exclusive 
            fleet of yachts for an unforgettable journey along the Costa del Sol.
          </motion.p>

        </div>

      </section>

      {/* Yachts Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Our <span className="text-gradient-lime">Fleet</span>
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              All prices include IVA (VAT), Captain, crew, fuel, and docking fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yachts.map((yacht, index) => (
              <YachtCard key={yacht.name} yacht={yacht} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Ready to <span className="text-gradient-lime">Set Sail</span>?
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
              Contact our concierge team to customize your perfect yacht experience. 
              We'll handle every detail from catering to water sports.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <TestimonialsSlider />

      <Footer />
    </div>
  );
}
