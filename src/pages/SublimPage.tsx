import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import sublimHero from "@/assets/sublim-hero.jpg";
import sublimGallery1 from "@/assets/sublim-gallery-1.jpg";
import sublimGallery2 from "@/assets/sublim-gallery-2.jpg";
import sublimGallery3 from "@/assets/sublim-gallery-3.jpg";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: sublimGallery1, alt: "Sublim Pool Area" },
  { src: sublimGallery2, alt: "Sublim Beach Lounge" },
  { src: sublimGallery3, alt: "Sublim Aerial View" },
];

const features = [
  { icon: "🏛️", title: "Stunning Architecture", description: "Exceptional blend of Mediterranean heritage and contemporary elegance" },
  { icon: "✨", title: "Natural Simplicity", description: "Commitment to creating a magical, meticulously crafted atmosphere" },
  { icon: "🎵", title: "Eclectic Music", description: "House, Latin, Afro, and Funk Groove soundtracks" },
  { icon: "🌅", title: "Beachfront Views", description: "Breathtaking Mediterranean sunset views" },
];


// Set to true to show price list on the website
const SHOW_PRICE_LIST = false;

export default function SublimPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Static Hero Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={sublimHero} alt="Sublim" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">Sublim</span>
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
                Mediterranean <span className="text-gradient-lime">Elegance</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                Sublim Beach Club is a luxurious beachfront venue that offers guests an exceptional blend of Mediterranean heritage and contemporary elegance. With a commitment to natural simplicity, Sublim provides a unique atmosphere where every detail is meticulously crafted.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                Experience the perfect fusion of stunning architecture, world-class service, and an eclectic musical journey through House, Latin, Afro, and Funk Groove.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Marbella Beachfront</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">12 PM - Late</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">Live Entertainment</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Beachwear</span>
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
              What Makes Sublim <span className="text-gradient-lime">Special</span>
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

      {/* Areas & Rates - Hidden for now, set SHOW_PRICE_LIST to true to enable */}
      {SHOW_PRICE_LIST && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Our <span className="text-gradient-lime">Sunbeds</span>
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Our rates include the Sunbed rental, a food and beverage minimum and access to the pool, Azteca and beach area. Contact our concierge for seasonal pricing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-charcoal-light rounded-2xl border border-primary/10 text-center">
                <h3 className="font-display text-xl text-foreground mb-4">Pool Area</h3>
                <p className="text-foreground/60 text-sm mb-4">Premium poolside positioning with stunning views</p>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Solo Sunbed</li>
                  <li>Double Sunbed</li>
                  <li>Daybed</li>
                  <li>VIP Sunbed</li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 bg-charcoal-light rounded-2xl border border-primary/10 text-center">
                <h3 className="font-display text-xl text-foreground mb-4">Azteca Area</h3>
                <p className="text-foreground/60 text-sm mb-4">Exclusive elevated section with panoramic views</p>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Double Aztec Sunbed</li>
                  <li>Family Sunbed</li>
                  <li>Royal Aztec</li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 bg-charcoal-light rounded-2xl border border-primary/10 text-center">
                <h3 className="font-display text-xl text-foreground mb-4">Beach Area</h3>
                <p className="text-foreground/60 text-sm mb-4">Direct beachfront access with Mediterranean views</p>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Beach Solo</li>
                  <li>Beach Double</li>
                  <li>Beach VIP</li>
                </ul>
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
              Ready to Experience <span className="text-gradient-lime">Sublim</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP reservation at this stunning Mediterranean paradise.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
