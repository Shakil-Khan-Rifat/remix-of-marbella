import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import oceanHero from "@/assets/ocean-club-hero.png";
import oceanClub1 from "@/assets/ocean-club-1.png";
import oceanClub2 from "@/assets/ocean-club-2.png";
import oceanClub3 from "@/assets/ocean-club-3.png";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: oceanHero, alt: "Ocean Club Pool Overview" },
  { src: oceanClub1, alt: "Ocean Club Beachfront View" },
  { src: oceanClub2, alt: "Ocean Club Poolside" },
  { src: oceanClub3, alt: "Ocean Club Panorama" },
];

const features = [
  { icon: "🏊", title: "Saltwater Pool", description: "Stunning pool overlooking the Mediterranean Sea" },
  { icon: "🍾", title: "Champagne Service", description: "Premium bottle service" },
  { icon: "🎵", title: "Live Entertainment", description: "World-class DJs, dancers, and performers" },
  { icon: "🍽️", title: "Fine Dining", description: "Exquisite al fresco dining at Amai restaurant" },
];


const priceList = [
  { area: "Small Round", persons: 3, price: "€270", includes: "1x Champagne 0.75L" },
  { area: "Frontline Square", persons: 3, price: "€300", includes: "1x Champagne 0.75L" },
  { area: "3rd Line Round", persons: 6, price: "€400", includes: "1x Champagne 0.75L" },
  { area: "2nd Line Round", persons: 8, price: "€500", includes: "2x Champagne 1.5L" },
  { area: "Deck", persons: 8, price: "€500", includes: "2x Champagne 1.5L" },
  { area: "VIP Pool", persons: 8, price: "€600", includes: "2x Champagne 1.5L" },
  { area: "VIP Deck", persons: 10, price: "€1500", includes: "3x DOM Perignon" },
  { area: "Super VIP Square", persons: 10, price: "€1500", includes: "3x DOM Perignon" },
];

// Set to true to show price list on the website
const SHOW_PRICE_LIST = false;

export default function OceanClubPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Static Hero Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={oceanHero} alt="Ocean Club" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">Ocean Club</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-foreground/70 mt-4 text-lg tracking-wider">
            Beach Club • Puerto Banús
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
                Europe's <span className="text-gradient-lime">Premier</span> Beach Club
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                Ocean Club Marbella is one of Europe's premier beach clubs, situated in the heart of Puerto Banús. Offering an unparalleled blend of luxury, style, and sophistication overlooking the breathtaking Mediterranean Sea.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                Indulge in the club's stunning saltwater pool, unwind on spacious Bali beds, and savor exquisite al fresco dining at Amai fine-dining restaurant. With live music, dancers, and entertainers, Ocean Club delivers an unforgettable experience.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Puerto Banús, Marbella</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">11:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">Live Entertainment</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Dress Code: Beach Wear</span>
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
              What Makes Ocean Club <span className="text-gradient-lime">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Price List - Hidden for now, set SHOW_PRICE_LIST to true to enable */}
      {SHOW_PRICE_LIST && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                <span className="text-gradient-lime">Price List</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto bg-charcoal-light rounded-2xl border border-primary/10 overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-primary/10 text-foreground font-medium text-sm">
                <span>Area</span>
                <span className="text-center">Persons</span>
                <span className="text-center">Price</span>
                <span>Includes</span>
              </div>
              {priceList.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-4 border-t border-primary/10 text-foreground/80 text-sm hover:bg-primary/5 transition-colors">
                  <span className="font-medium">{item.area}</span>
                  <span className="text-center">{item.persons}</span>
                  <span className="text-center text-primary font-medium">{item.price}</span>
                  <span className="text-foreground/60">{item.includes}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Experience <span className="text-gradient-lime">Ocean Club</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP reservation at Marbella's most iconic beach club.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
