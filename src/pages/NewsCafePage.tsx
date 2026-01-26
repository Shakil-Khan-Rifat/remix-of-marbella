import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Star, Users, Music, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import newscafeHero from "@/assets/newscafe-hero.jpg";
import newscafeGallery1 from "@/assets/newscafe-gallery-1.jpg";
import newscafeGallery2 from "@/assets/newscafe-gallery-2.jpg";
import newscafeGallery3 from "@/assets/newscafe-gallery-3.jpg";

// Scroll to top on page load
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: newscafeGallery1, alt: "News Café VIP Lounge" },
  { src: newscafeGallery2, alt: "News Café Terrace Bar" },
  { src: newscafeGallery3, alt: "News Café Interior" },
];

const features = [
  {
    icon: MapPin,
    title: "Unmatched Location",
    description: "Front-row seat to Puerto Banús nightlife with stunning marina views",
  },
  {
    icon: Music,
    title: "High-Energy Music",
    description: "Feel-good sounds and packed atmosphere that keeps the room moving",
  },
  {
    icon: Sparkles,
    title: "Premium Service",
    description: "A social, upscale vibe from day drinks to late night",
  },
];

export default function NewsCafePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      
      {/* Hero Section - Static Image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={newscafeHero}
            alt="News Café Marbella"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary tracking-[0.4em] uppercase text-sm block mb-4"
          >
            Puerto Banús Nightlife
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground"
          >
            News <span className="text-gradient-lime">Café</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-foreground/60 mt-4 max-w-xl mx-auto"
          >
            Where Puerto Banús comes to life
          </motion.p>
        </div>
      </section>

      {/* Back Link */}
      <section className="container mx-auto px-6 py-8">
        <Link 
          to="/nightclubs"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Back to Nightlife</span>
        </Link>
      </section>

      {/* About Section with Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary tracking-[0.3em] uppercase text-xs">About the Venue</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-6">
                The Heart of <span className="text-gradient-lime">Puerto Banús</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                News Café Marbella is where Puerto Banús comes to life. A high-energy social hotspot 
                blending great music, stylish crowds, and nonstop atmosphere from day into night.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Known for its buzz, prime location, and premium service, it's the go-to destination 
                for unforgettable nights in Marbella. Experience the perfect blend of sophistication 
                and energy at one of the marina's most iconic venues.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs">Location</p>
                    <p className="text-foreground text-sm">Puerto Banús</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs">Hours</p>
                    <p className="text-foreground text-sm">Day to Late Night</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs">Style</p>
                    <p className="text-foreground text-sm">Social & Upscale</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs">Vibe</p>
                    <p className="text-foreground text-sm">High-Energy</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gallery Carousel */}
            <VenueGalleryCarousel images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary tracking-[0.3em] uppercase text-xs">The Experience</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">
              What Makes It <span className="text-gradient-lime">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-background/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 bg-charcoal-light rounded-2xl border border-primary/10"
          >
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Ready to Experience News Café?
            </h3>
            <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
              Let our concierge arrange VIP entry and premium table reservations for an unforgettable night
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
