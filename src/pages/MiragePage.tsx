import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import mirageHero from "@/assets/mirage-hero.jpg";
import mirageFloorPlan from "@/assets/mirage-floor-plan.png";
import mirageGallery1 from "@/assets/mirage-gallery-1.jpg";
import mirageGallery2 from "@/assets/mirage-gallery-2.jpg";
import mirageGallery3 from "@/assets/mirage-gallery-3.jpg";
import mirageGallery4 from "@/assets/mirage-gallery-4.jpg";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: mirageGallery1, alt: "Mirage VIP Lounge" },
  { src: mirageGallery2, alt: "Mirage Interior" },
  { src: mirageGallery3, alt: "Mirage Bottle Service" },
  { src: mirageGallery4, alt: "Mirage Dance Floor" },
];

const features = [
  { icon: "📍", title: "Prime Puerto Banús Location", description: "Central to Marbella's nightlife strip" },
  { icon: "🎧", title: "Weekly Events & DJs", description: "Regular party themes and live DJ line-ups" },
  { icon: "✨", title: "Stylish, Energetic Crowd", description: "International, fashionable, and always ready to dance" },
];

const vipAreas = [
  { name: "DJ Area Tables", description: "Front row experience by the DJ booth", capacity: "Up to 8 guests" },
  { name: "Main Floor Tables", description: "Center of the action on the dance floor", capacity: "Up to 6 guests" },
  { name: "Jacuzzi Room", description: "Exclusive private area with jacuzzi", capacity: "Up to 10 guests" },
  { name: "Dark Room", description: "Intimate VIP experience", capacity: "Up to 6 guests" },
];

export default function MiragePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Single Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={mirageHero} alt="Mirage Marbella" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">Mirage</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-foreground/70 mt-4 text-lg tracking-wider">
            Nightclub • Puerto Banús
          </motion.p>
        </div>
      </section>

      {/* Back Link */}
      <section className="container mx-auto px-6 py-8">
        <Link to="/nightclubs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Back to Nightclubs</span>
        </Link>
      </section>

      {/* About Section with Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary tracking-[0.4em] uppercase text-sm block mb-4">About The Venue</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Sleek, High-Impact <span className="text-gradient-lime">Nightclub</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                Mirage Nightclub Marbella is a sleek, high-impact club in Puerto Banús, known for its immersive lighting, strong music programming, and fashionable international crowd. With weekly events and themed party nights, it's a go-to destination for party-goers seeking premium nightlife and late-night energy in the heart of Banús.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Puerto Banús</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">12:00 AM - 7:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">House, Techno, Commercial</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Dress to Impress</span>
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
              What Makes Mirage <span className="text-gradient-lime">Special</span>
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

      {/* VIP Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              VIP <span className="text-gradient-lime">Experiences</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Choose from our exclusive VIP areas for an unforgettable night at Mirage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vipAreas.map((area, index) => (
              <motion.div 
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-charcoal-light rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-display text-xl text-foreground mb-2">{area.name}</h3>
                <p className="text-foreground/60 text-sm mb-3">{area.description}</p>
                <span className="text-primary text-sm">{area.capacity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Venue <span className="text-gradient-lime">Floor Plan</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Explore Mirage's layout featuring DJ area tables, the Jacuzzi Room, and exclusive VIP spaces
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-background/50">
              <img 
                src={mirageFloorPlan} 
                alt="Mirage Floor Plan" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Experience <span className="text-gradient-lime">Mirage</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP table at Puerto Banús's most visually stunning nightclub.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}