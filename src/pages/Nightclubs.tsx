import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import HeroCarousel from "@/components/HeroCarousel";
import heroImg from "@/assets/service-nightclub.png";
import fitzImg from "@/assets/fitz-hero.jpg";
import oliviaImg from "@/assets/olivia-hero.jpg";
import pangeaImg from "@/assets/pangea-hero.jpg";
import mirageImg from "@/assets/mirage-hero.jpg";
import tibuImg from "@/assets/tibu-hero.jpg";
import momentoImg from "@/assets/momento-hero.jpg";
import newscafeImg from "@/assets/newscafe-hero.jpg";

const heroImages = [heroImg, fitzImg, oliviaImg, pangeaImg, mirageImg, tibuImg, momentoImg, newscafeImg];

// Scroll to top on page load
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const nightclubs = [
  {
    name: "FITZ",
    description: "High-energy nightlife with stunning light shows and world-class sound systems",
    image: fitzImg,
    features: ["VIP Tables", "Premium Sound", "Light Shows"],
    link: "/nightclubs/fitz",
  },
  {
    name: "Olivia Valere",
    description: "Legendary Marbella venue with glamorous atmosphere and international DJs",
    image: oliviaImg,
    features: ["Legendary Venue", "International DJs", "Champagne Service"],
    link: "/nightclubs/olivia-valere",
  },
  {
    name: "Pangea",
    description: "Exclusive club experience with Mediterranean rooftop and intimate ambiance",
    image: pangeaImg,
    features: ["Rooftop Access", "Exclusive Entry", "Premium Cocktails"],
    link: "/nightclubs/pangea",
  },
  {
    name: "Mirage",
    description: "Cutting-edge nightlife destination with immersive visual experiences",
    image: mirageImg,
    features: ["Visual Shows", "VIP Lounges", "Late Night"],
    link: "/nightclubs/mirage",
  },
  {
    name: "TIBU",
    description: "Iconic Puerto Banús venue known for celebrity sightings and electric atmosphere",
    image: tibuImg,
    features: ["Puerto Banús", "Celebrity Hotspot", "Dance Floor"],
    link: "/nightclubs/tibu",
  },
  {
    name: "Momento",
    description: "Iconic nightlife destination blending cutting-edge sound and world-class electronic music",
    image: momentoImg,
    features: ["World-Class DJs", "Immersive Production", "Underground Vibes"],
    link: "/nightclubs/momento",
  },
  {
    name: "News Café",
    description: "High-energy social hotspot where Puerto Banús comes to life from day into night",
    image: newscafeImg,
    features: ["Puerto Banús", "Premium Service", "Day to Night"],
    link: "/nightclubs/news-cafe",
  },
];

function ClubCard({ club, index }: { club: typeof nightclubs[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const CardContent = (
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-lime text-primary-foreground font-medium text-sm tracking-wider uppercase rounded-lg transition-all duration-300 group-hover:scale-105"
        >
          Book VIP Access
        </span>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
    </motion.div>
  );

  if (club.link) {
    return <Link to={club.link}>{CardContent}</Link>;
  }

  return CardContent;
}

export default function Nightclubs() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <HeroCarousel images={heroImages} alt="Nightclubs Marbella" />

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary tracking-[0.4em] uppercase text-sm block mb-4"
          >
            VIP Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground"
          >
            Night<span className="text-gradient-lime">life</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-foreground/60 mt-4 max-w-xl mx-auto"
          >
            Skip the lines with VIP entry to Marbella's hottest venues
          </motion.p>
        </div>

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

      {/* Nightclubs Grid */}
      <section ref={headerRef} className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="text-gradient-lime">Partner Clubs</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Experience the electric nightlife of Marbella with priority entry 
              and exclusive VIP table reservations arranged by our concierge team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nightclubs.map((club, index) => (
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
              Need VIP Reservations?
            </h3>
            <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
              Our concierge team can arrange VIP table bookings, skip-the-line entry, 
              and bottle service at any of Marbella's premier nightclubs
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
