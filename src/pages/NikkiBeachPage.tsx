import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import nikkiImg from "@/assets/beach-club-nikki.png";
import nikkiGallery1 from "@/assets/nikki-gallery-1.jpg";
import nikkiGallery2 from "@/assets/nikki-gallery-2.jpg";
import nikkiGallery3 from "@/assets/nikki-gallery-3.jpg";
import nikkiGallery4 from "@/assets/nikki-gallery-4.jpg";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: nikkiGallery1, alt: "Nikki Beach Pool Overview" },
  { src: nikkiGallery2, alt: "Nikki Beach Party" },
  { src: nikkiGallery3, alt: "Nikki Beach Pool" },
  { src: nikkiGallery4, alt: "Nikki Beach Lounge Area" },
];

const features = [
  { icon: "🌴", title: "Beachfront Paradise", description: "Located on Marbella's finest white sandy beaches" },
  { icon: "🎭", title: "World-Famous Brand", description: "Iconic global beach club with legendary reputation" },
  { icon: "🍾", title: "Champagne Lifestyle", description: "Full moon celebrations and champagne cocktails" },
  { icon: "🎵", title: "Live Entertainment", description: "World-class dining with live music and dancers" },
];


// Set to true to show price list on the website
const SHOW_PRICE_LIST = false;

export default function NikkiBeachPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Static Hero Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={nikkiImg} alt="Nikki Beach" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">Nikki Beach</span>
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
                World-Famous <span className="text-gradient-lime">Beach Club</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                Nikki Beach Marbella is a premier beach club located on one of Marbella's finest white sandy beaches, offering a luxurious and vibrant atmosphere. Renowned for its electrifying parties, full moon celebrations, and champagne cocktails.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                Nikki Beach seamlessly blends contemporary design with world-class dining and entertainment. Experience the legendary brand that has defined beach club luxury across the globe.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Playa Hotel Don Carlos</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">11:00 AM - Late</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">Live Entertainment</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Smart Beach Elegant</span>
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
              What Makes Nikki Beach <span className="text-gradient-lime">Special</span>
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

      {/* Season Info - Hidden for now, set SHOW_PRICE_LIST to true to enable */}
      {SHOW_PRICE_LIST && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Summer 2025 <span className="text-gradient-lime">Bed Experience</span>
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Choose from our exclusive pool area and beach area lounging options. Prices vary by season and day of the week. Contact our concierge for current availability and rates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 bg-charcoal-light rounded-2xl border border-primary/10">
                <h3 className="font-display text-xl text-foreground mb-4 text-center">Pool Area</h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  <li className="flex justify-between"><span>Pool Bed (4-6 guests)</span><span className="text-primary">From €950</span></li>
                  <li className="flex justify-between"><span>Deck Bed (4-6 guests)</span><span className="text-primary">From €950</span></li>
                  <li className="flex justify-between"><span>Cabana (6-8 guests)</span><span className="text-primary">From €1650</span></li>
                  <li className="flex justify-between"><span>Elevated Table (6-8 guests)</span><span className="text-primary">From €1650</span></li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 bg-charcoal-light rounded-2xl border border-primary/10">
                <h3 className="font-display text-xl text-foreground mb-4 text-center">Beach Area</h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  <li className="flex justify-between"><span>Beach Bed (4-6 guests)</span><span className="text-primary">From €650</span></li>
                  <li className="flex justify-between"><span>Single Sun Loungers (2 guests)</span><span className="text-primary">N/C</span></li>
                </ul>
                <p className="text-foreground/50 text-xs mt-4">* Prices include bottle service minimum. Weekend rates may apply.</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}


      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Experience <span className="text-gradient-lime">Nikki Beach</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP reservation at the world's most famous beach club.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
