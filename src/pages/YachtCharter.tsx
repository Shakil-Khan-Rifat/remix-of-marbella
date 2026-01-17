import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Anchor, Users, Ruler, Fuel, UtensilsCrossed, Music, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import yachtHeroImg from "@/assets/service-yacht.png";
import yachtGolden from "@/assets/yacht-golden.png";
import yachtTarela from "@/assets/yacht-tarela.png";
import yachtSundancer from "@/assets/yacht-sundancer.png";
import yachtAiconForever from "@/assets/yacht-aicon-forever.png";
import yachtLouisCarbon from "@/assets/yacht-louis-carbon.png";
import yachtMrsAmber from "@/assets/yacht-mrs-amber.png";
import yachtMahiMahi from "@/assets/yacht-mahi-mahi.png";
import yachtMalex from "@/assets/yacht-malex.png";
import yachtCranchi from "@/assets/yacht-cranchi.png";

const heroImages = [yachtHeroImg, yachtGolden, yachtTarela, yachtSundancer, yachtMalex];

const yachts = [
  {
    name: "GOLDEN",
    length: "11.6m",
    capacity: "11 passengers",
    includes: ["Captain", "Fuel", "Drinks/Snacks"],
    prices: { "2H": "€550 (inc. VAT)", "4H": "€1,050", "6H": "€1,500" },
    image: yachtGolden,
    featured: true,
    detailsPdf: "/yachts/golden.pdf",
  },
  {
    name: "TARELA",
    subtitle: "Azimut 39",
    capacity: "12 passengers",
    includes: ["Captain", "Fuel", "2x Champagne bottles", "Snacks"],
    prices: { "2H": "€600", "3H": "€850", "4H": "€1,100", "6H": "€1,500" },
    image: yachtTarela,
    detailsPdf: "/yachts/tarela.pdf",
  },
  {
    name: "SUNDANCER 540",
    length: "16.70m",
    capacity: "11 passengers + crew",
    includes: ["Padel Surf", "Sound System", "Cava & Beers", "Soft Drinks"],
    prices: { "2H": "€1,000", "4H": "€1,600", "6H": "€2,000", "8H": "€2,400" },
    image: yachtSundancer,
    detailsPdf: "/yachts/sundancer.pdf",
  },
  {
    name: "AICON 72 HT - FOREVER",
    length: "22m",
    capacity: "10 passengers",
    includes: ["Jet Sky", "Sea Scooter", "SUP", "Cocktails & Drinks"],
    prices: { "4H": "€2,500", "6H": "€3,500", "8H": "€4,800" },
    image: yachtAiconForever,
  },
  {
    name: "CARBON",
    subtitle: "Sport",
    length: "11.5m",
    capacity: "10 passengers",
    includes: ["Captain", "Fuel", "Wine", "Soft Drinks", "Snacks", "Towels", "Snorkels", "Seabob", "Sunshade", "Fusion Sound System"],
    prices: { "2H": "€1,100", "4H": "€1,800", "8H": "€2,900" },
    image: yachtLouisCarbon,
    detailsPdf: "/yachts/carbon.pdf",
  },
  {
    name: "MRS AMBER",
    length: "10m",
    capacity: "9 passengers",
    includes: ["Captain", "Fuel", "Drinks", "Snacks"],
    prices: { "2H": "€450", "4H": "€700", "6H": "€920", "8H": "€1,450" },
    image: yachtMrsAmber,
    detailsPdf: "/yachts/mrs-amber.pdf",
  },
  {
    name: "MAHI MAHI",
    length: "12m",
    capacity: "11 passengers",
    includes: ["Captain", "Fuel", "Drinks", "Fishing Equipment"],
    prices: { "2H": "€550", "4H": "€950", "6H": "€1,200", "8H": "€1,650" },
    image: yachtMahiMahi,
    detailsPdf: "/yachts/mahi-mahi.pdf",
  },
  {
    name: "MALEX",
    subtitle: "Maiora 26",
    length: "31m",
    capacity: "12 passengers",
    includes: ["Captain", "Fuel", "Drinks/Snacks", "Jet Ski"],
    prices: { "4H": "€6,050 (inc. VAT)", "8H": "€9,680" },
    image: yachtMalex,
    premium: true,
    detailsPdf: "/yachts/malex.pdf",
  },
  {
    name: "CRANCHI",
    length: "12m",
    capacity: "9 passengers",
    includes: ["Captain", "Fuel", "Drinks", "Snacks"],
    prices: { "2H": "€680", "4H": "€980", "8H": "€1,700" },
    image: yachtCranchi,
    detailsPdf: "/yachts/cranchi.pdf",
  },
];

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
      {yacht.premium && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-lime text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
          Premium
        </div>
      )}
      {yacht.featured && !yacht.premium && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/30">
          Featured
        </div>
      )}
      
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <img
          src={yacht.image}
          alt={yacht.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
              {yacht.name}
            </h3>
            {yacht.subtitle && (
              <span className="text-primary/70 text-sm">{yacht.subtitle}</span>
            )}
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
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-primary/70" />
            <span>{yacht.capacity}</span>
          </div>
        </div>

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
          <span className="text-xs text-foreground/50 uppercase tracking-wider">Starting from</span>
          <div className="flex flex-wrap gap-3 mt-2">
            {Object.entries(yacht.prices).map(([duration, price]) => (
              <div key={duration} className="text-center">
                <div className="text-primary font-semibold">{price}</div>
                <div className="text-foreground/40 text-xs">{duration}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-primary/10 space-y-3">
          <Button 
            variant="outline" 
            className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
            onClick={() => window.open(yacht.detailsPdf || '/yachts/default.pdf', '_blank')}
          >
            See Details
          </Button>
          <BookingButtons variant="compact" className="w-full" />
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
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
        <HeroCarousel images={heroImages} alt="Luxury Yacht Charter" />

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
            className="inline-block text-primary tracking-[0.4em] uppercase text-sm mb-4"
          >
            Luxury Fleet
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Yacht <span className="text-gradient-lime">Charter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Experience the Mediterranean in ultimate luxury. Choose from our exclusive 
            fleet of yachts for an unforgettable journey along the Costa del Sol.
          </motion.p>

        </div>

        {/* Animated wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
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
              All prices include Captain, crew, fuel, and docking fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yachts.map((yacht, index) => (
              <YachtCard key={yacht.name} yacht={yacht} index={index} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-foreground/50 text-sm mt-12"
          >
            * All charter prices are indicative. VAT extra unless specified. Docking fees included.
          </motion.p>
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

      <Footer />
    </div>
  );
}
