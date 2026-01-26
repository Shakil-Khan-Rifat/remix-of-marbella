import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import playaPadreHero from "@/assets/playa-padre-hero.jpg";
import playaPadreGallery1 from "@/assets/playa-padre-gallery-1.jpg";
import playaPadreGallery2 from "@/assets/playa-padre-gallery-2.jpg";
import playaPadreGallery3 from "@/assets/playa-padre-gallery-3.jpg";
import playaPadreGallery4 from "@/assets/playa-padre-gallery-4.jpg";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: playaPadreGallery1, alt: "Playa Padre Boho Sunday" },
  { src: playaPadreGallery2, alt: "Playa Padre DJ Set" },
  { src: playaPadreGallery3, alt: "Playa Padre Beach Art" },
  { src: playaPadreGallery4, alt: "Playa Padre Party Night" },
];

const features = [
  { icon: "🎧", title: "Iconic Boho Sundays", description: "World-class DJs and a legendary crowd vibe" },
  { icon: "👣", title: "Barefoot Beach Setting", description: "Stylish setting with authentic bohemian energy" },
  { icon: "🌅", title: "Day-to-Sunset Atmosphere", description: "Seamless blend of dining, music, and party culture" },
];

export default function PlayaPadrePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Static Hero Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={playaPadreHero} alt="Playa Padre" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">Playa Padre</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-foreground/70 mt-4 text-lg tracking-wider">
            Beach Club • Marbella
          </motion.p>
        </div>
      </section>

      {/* Back Link */}
      <section className="container mx-auto px-6 py-8">
        <Link to="/beach-clubs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Back to Beach Clubs</span>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary tracking-[0.4em] uppercase text-sm block mb-4">About The Venue</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Free-Spirited & <span className="text-gradient-lime">Bohemian</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                Playa Padre Marbella is a stylish, free-spirited beach club known for its bohemian vibe, Balearic and house music, and effortlessly cool atmosphere. Iconic for its boho Sundays featuring world-class DJs, it's the go-to spot for long lunches that flow into sunset sessions and beachfront energy.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Marbella Beach</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">12:00 PM - Late</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">Balearic & House Music</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Boho Sundays</span>
                </div>
              </div>
            </motion.div>

            <VenueGalleryCarousel images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              What Makes Playa Padre <span className="text-gradient-lime">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Experience <span className="text-gradient-lime">Playa Padre</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP reservation at Marbella's iconic bohemian beach club.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
