import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import pangeaHero from "@/assets/pangea-hero.jpg";
import pangeaFloorPlan from "@/assets/pangea-floor-plan.png";
import pangeaGallery1 from "@/assets/pangea-gallery-1.jpg";
import pangeaGallery2 from "@/assets/pangea-gallery-2.jpg";
import pangeaGallery3 from "@/assets/pangea-gallery-3.jpg";
import pangeaGallery4 from "@/assets/pangea-gallery-4.jpg";
import pangeaGallery5 from "@/assets/pangea-gallery-5.jpg";
import pangeaGallery6 from "@/assets/pangea-gallery-6.jpg";
import pangeaGallery7 from "@/assets/pangea-gallery-7.jpg";
import pangeaGallery8 from "@/assets/pangea-gallery-8.jpg";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: pangeaGallery1, alt: "Pangea Rooftop Crowd" },
  { src: pangeaGallery2, alt: "Pangea DJ Booth" },
  { src: pangeaGallery3, alt: "Pangea VIP Party" },
  { src: pangeaGallery4, alt: "Pangea Terrace Sunset" },
  { src: pangeaGallery5, alt: "Pangea Exterior" },
  { src: pangeaGallery6, alt: "Pangea Bottle Service" },
  { src: pangeaGallery7, alt: "Pangea Tower View" },
  { src: pangeaGallery8, alt: "Pangea Night Party" },
];

const features = [
  { icon: "🌊", title: "Rooftop Location with Marina Views", description: "A standout open-air terrace overlooking Puerto Banús and the Mediterranean" },
  { icon: "🎧", title: "Weekly Events & DJs", description: "From Famous Fridays to summer party nights and DJ sets that keep the vibe lively" },
  { icon: "🍾", title: "VIP Tables & Premium Service", description: "Stylish bottle service and high-end crowd for celebrations and elevated nights" },
];


export default function PangeaPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Single Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={pangeaHero} alt="Pangea Marbella" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">Pangea</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-foreground/70 mt-4 text-lg tracking-wider">
            Rooftop Club • Puerto Banús
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
                Iconic <span className="text-gradient-lime">Nightlife Destination</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                Pangea is one of Puerto Banús' most iconic nightlife destinations — a rooftop nightclub and terrace bar perched above the marina with panoramic views over the yachts and Mediterranean. It's known for its glamorous setting, international crowd, live DJs, and weekly party programming that draws both locals and visitors looking for a premium nightlife experience.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Puerto Banús Marina</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">11:00 PM - 6:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">Deep House, Afro House</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Smart Elegant</span>
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
              What Makes Pangea <span className="text-gradient-lime">Special</span>
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
              Explore Pangea's rooftop layout with outdoor terrace tables and indoor seating options
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
                src={pangeaFloorPlan} 
                alt="Pangea Floor Plan" 
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
              Ready to Experience <span className="text-gradient-lime">Pangea</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP table with stunning Mediterranean views.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}