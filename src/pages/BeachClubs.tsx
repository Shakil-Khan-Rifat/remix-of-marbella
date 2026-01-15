import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import heroImg from "@/assets/beach-clubs-hero.png";
import naoImg from "@/assets/beach-club-nao.jpg";
import oceanImg from "@/assets/beach-club-ocean.jpg";
import mogliImg from "@/assets/beach-club-mogli.png";
import nikkiImg from "@/assets/beach-club-nikki.png";
import sublimImg from "@/assets/beach-club-sublim.png";

// Scroll to top on page load
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
const beachClubs = [
  {
    name: "NAO",
    description: "Exclusive beachfront lounge with stunning Mediterranean views and premium service",
    image: naoImg,
    features: ["VIP Cabanas", "Gourmet Dining", "Premium Cocktails"],
    link: "/beach-clubs/nao",
  },
  {
    name: "Ocean Club",
    description: "Iconic Marbella destination featuring infinity pools and world-class DJs",
    image: oceanImg,
    features: ["Infinity Pool", "Live DJ", "Champagne Service"],
    link: "/beach-clubs/ocean-club",
  },
  {
    name: "Mogli",
    description: "Tropical bohemian paradise with thatched roof ambiance and poolside relaxation",
    image: mogliImg,
    features: ["Tropical Vibes", "Pool Access", "Mediterranean Cuisine"],
    link: "/beach-clubs/mogli",
  },
  {
    name: "Nikki Beach",
    description: "World-famous beach club brand bringing glamour and celebration to Marbella",
    image: nikkiImg,
    features: ["Beach Access", "Famous Brand", "Party Atmosphere"],
    link: "/beach-clubs/nikki-beach",
  },
  {
    name: "Sublim",
    description: "Elegant stone architecture meets Mediterranean luxury in this stunning venue",
    image: sublimImg,
    features: ["Elegant Design", "Exclusive Access", "Premium Location"],
    link: "/beach-clubs/sublim",
  },
];

function ClubCard({ club, index }: { club: typeof beachClubs[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Link to={club.link}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative bg-charcoal-light rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 cursor-pointer h-full"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="p-6">
          <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
            {club.name}
          </h3>
          <p className="text-foreground/60 text-sm leading-relaxed mb-4">
            {club.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {club.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {feature}
              </span>
            ))}
          </div>

          <span
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-lime text-primary-foreground font-medium text-sm tracking-wider uppercase rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:brightness-115 group-hover:shadow-[0_0_15px_2px_rgba(163,230,53,0.4)]"
          >
            Learn More
          </span>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
      </motion.div>
    </Link>
  );
}

export default function BeachClubs() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImg}
            alt="Beach Clubs Marbella"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary tracking-[0.4em] uppercase text-sm block mb-4"
          >
            Exclusive Access
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground"
          >
            Beach <span className="text-gradient-lime">Clubs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-foreground/60 mt-4 max-w-xl mx-auto"
          >
            VIP reservations at Marbella's most exclusive beach destinations
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Back Link */}
      <section className="container mx-auto px-6 py-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Back to Home</span>
        </Link>
      </section>

      {/* Beach Clubs Grid */}
      <section ref={headerRef} className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="text-gradient-lime">Partner Venues</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Experience the finest beach clubs on the Costa del Sol with priority reservations 
              and exclusive VIP access arranged by our concierge team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beachClubs.map((club, index) => (
              <ClubCard key={club.name} club={club} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-20 p-12 bg-charcoal-light rounded-2xl border border-primary/10"
          >
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
              Our concierge team can recommend the perfect beach club experience based on your preferences, 
              group size, and occasion
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
